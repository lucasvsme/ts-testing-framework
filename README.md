# TypeScript Testing Framework

It's a prototype of a [testing framework](https://en.wikipedia.org/wiki/Software_testing) written to practice software design.

The goal is to develop a minimal set of APIs that allows developers to write unit tests to their code and to have a report showing passing and failing tests. If a test fails we want to show the reason for that and the text should be red. Passing tests should be displayed in green.

The non-goal is to replace any existing production-ready or not testing framework.

## How to run

| Description | Command |
| :--- | :--- |
| Install dependencies | `npm install` |
| Run examples | `npm test` |

## Example

### Single test suite

```
import { Tests, Expect } from "./src";

Tests.run((suite) => [
  suite.test("2 + 2 is equal to 4", async () => {
    Expect(2 + 2).toEqual(4);
  }),

  suite.test("2 - 2 is equal to 0", async () => {
    Expect(2 - 2).toEqual(0);
  }),

  suite.test("2 * 2 is equal to 4", async () => {
    Expect(2 * 2).toEqual(6);
  }),

  suite.test("2 / 2 is equal to 1", async () => {
    Expect(2 / 2).toEqual(1);
  }),
]);

```

```
[PASSED] 2 + 2 is equal to 4
[PASSED] 2 - 2 is equal to 0
[FAILED] 2 * 2 is equal to 4
	4 is different from 6
[PASSED] 2 / 2 is equal to 1
```

### Tests grouped by name

```
Tests.grouped("Assertions API", (suite) => [
  suite.test("Expect toEqual true", async () => {
    Expect(123).toEqual(123);
    Expect("123").toEqual("312");
  }),

  suite.test("Expect toEqual false", async () => {
    Expect(123).toEqual(123);
    Expect("123").toEqual("123");
  }),

  suite.test("Expect not toEqual true", async () => {
    Expect("123").not.toEqual("321");
  }),

  suite.test("Expect greaterThanOrEqualTo false", async () => {
    Expect("123").greaterThanOrEqualTo("3210");
  }),

  suite.test("Expect greaterThanOrEqualTo true", async () => {
    Expect(20).greaterThanOrEqualTo(15);
  }),
]);
```

```
ASSERTIONS API

	[FAILED] Expect toEqual true
		123 is different from 312
	[PASSED] Expect toEqual false
	[PASSED] Expect not toEqual true
	[FAILED] Expect greaterThanOrEqualTo false
		123 is different from 3210
	[PASSED] Expect greaterThanOrEqualTo true
```

