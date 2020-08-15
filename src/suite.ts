import { AssertionError } from "./assertion";
import { TestReporter, TestReporterImpl } from "./report";

export type TestSuiteOptions = {
  title: string;
  reporter: TestReporter;
};

const TestSuiteOptionsDefault: TestSuiteOptions = {
  title: "",
  reporter: new TestReporterImpl(),
};

export interface TestSuite {
  getTitle(): string;
  getResults(): readonly [string, AssertionError<any> | undefined][];
  test(title: string, fn: () => Promise<void>): Promise<void>;
  run(tests: Promise<void>[]): Promise<void>;
}

export class TestSuiteImpl implements TestSuite {
  private readonly options: TestSuiteOptions;

  private results: [string, AssertionError<any> | undefined][] = [];

  public constructor(options?: Partial<TestSuiteOptions>) {
    this.options = { ...TestSuiteOptionsDefault, ...options };
  }

  public getTitle(): string {
    return Object.freeze(this.options.title);
  }

  public getResults(): readonly [string, AssertionError<any> | undefined][] {
    return Object.freeze(this.results);
  }

  public async test(title: string, fn: () => Promise<void>): Promise<void> {
    try {
      await fn();
      this.results.push([title, undefined]);
    } catch (error) {
      this.results.push([title, error]);
    }
  }

  public async run(tests: Promise<void>[]): Promise<void> {
    await Promise.all(tests);
    console.log(this.options.reporter.generate(this));
  }
}
