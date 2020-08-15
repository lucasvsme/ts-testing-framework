import { Tests, Expect } from "./src";

// Example 1
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

// Example 2
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

  suite.test("Expect greaterThanOrEqualTo true", async () => {
    Expect("123").greaterThanOrEqualTo("3210");
  }),
]);
