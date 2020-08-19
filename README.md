# TypeScript Testing Framework

It's a prototype of a [testing framework](https://en.wikipedia.org/wiki/Software_testing) built to practice software design.

The goal is to develop a minimal set of APIs that allows developers to write unit tests to their code and to have a report showing passing and failing tests. If a test fails we want to show the reason for that and the text should be red. Passing tests should be displayed in green.

The non-goal is to replace any existing production-ready or not testing framework.

## How to run

| Description | Command |
| :--- | :--- |
| Install dependencies | `npm install` |
| Run examples | `npm test` |

## Example

### Single test suite

```typescript
Tests.run((suite) => [
  suite.test("2 + 2 is equal to 4", async () => {
    Expect(2 + 2).toBeEqualTo(4);
  }),

  suite.test("2 - 2 is equal to 0", async () => {
    Expect(2 - 2).toBeEqualTo(0);
  }),

  suite.test("2 * 2 is equal to 4", async () => {
    Expect(2 * 2).toBeEqualTo(8);
  }),

  suite.test("2 / 2 is equal to 1", async () => {
    Expect(2 / 2).toBeEqualTo(1);
  }),
]);
```

```
[PASSED] 2 + 2 is equal to 4
[PASSED] 2 - 2 is equal to 0
[FAILED] 2 * 2 is equal to 4
	4 is different from 8
[PASSED] 2 / 2 is equal to 1
```

### Tests grouped by name

```typescript
Tests.grouped("Assertions API", (suite) => [
  suite.test("Expect toBeEqualTo true", async () => {
    Expect(123).toBeEqualTo(123);
    Expect("123").toBeEqualTo("312");
  }),

  suite.test("Expect toBeEqualTo false", async () => {
    Expect(123).toBeEqualTo(123);
    Expect("123").toBeEqualTo("123");
  }),

  suite.test("Expect not toBeEqualTo true", async () => {
    Expect("123").not.toBeEqualTo("321");
  }),

  suite.test("Expect toBeGreaterThanOrEqualTo false", async () => {
    Expect("day").toBeGreaterThanOrEqualTo("night");
  }),

  suite.test("Expect toBeGreaterThanOrEqualTo true", async () => {
    Expect(20).toBeGreaterThanOrEqualTo(15);
  }),
]);
```

```
ASSERTIONS API

	[FAILED] Expect toBeEqualTo true
		123 is different from 312
	[PASSED] Expect toBeEqualTo false
	[PASSED] Expect not toBeEqualTo true
	[FAILED] Expect toBeGreaterThanOrEqualTo false
		day is different from night
	[PASSED] Expect toBeGreaterThanOrEqualTo true
```

