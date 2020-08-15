import { Tests, Expect } from "./src";

// Example 1
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

// Example 2
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
