import { TestSuite, TestSuiteImpl } from "./suite";

export class Tests {
  public static run(tests: (suite: TestSuite) => Promise<void>[]): void {
    const suite: TestSuite = new TestSuiteImpl();

    void suite.run(tests(suite));
  }

  public static grouped(
    title: string,
    tests: (suite: TestSuite) => Promise<void>[]
  ): void {
    const suite: TestSuite = new TestSuiteImpl({ title });

    void suite.run(tests(suite));
  }
}
