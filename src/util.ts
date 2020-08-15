import { TestSuite, TestSuiteImpl } from "./suite";

export class Tests {
  public static async run(
    tests: (suite: TestSuite) => Promise<void>[]
  ): Promise<void> {
    const suite = new TestSuiteImpl();

    suite.run(tests(suite));
  }

  public static async grouped(
    title: string,
    tests: (suite: TestSuite) => Promise<void>[]
  ): Promise<void> {
    const suite = new TestSuiteImpl({ title });

    suite.run(tests(suite));
  }
}
