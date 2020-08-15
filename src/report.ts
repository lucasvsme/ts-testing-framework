export interface TestReporter {
  generate(suite: TestSuite): string;
}

export class TestReporterImpl implements TestReporter {
  private readonly tab = "\t";
  private readonly newLine = "\n";

  private readonly red = "\x1b[31m";
  private readonly green = "\x1b[32m";
  private readonly white = "\x1b[37m";

  private readonly templatePassed = this.green + "[PASSED] {{title}}\n";
  private readonly templateFailed = this.red + "[FAILED] {{title}}\n";
  private readonly templateError = this.red + "{{message}}\n";

  public generate(suite: TestSuite): string {
    let report: string = "";

    let padding = 0;
    if (suite.getTitle() !== "") {
      padding += 1;

      report = report
        .concat(this.white)
        .concat(suite.getTitle().toUpperCase())
        .concat(this.newLine.repeat(2));
    }

    for (const [title, error] of suite.getResults()) {
      if (error === undefined) {
        report = report
          .concat(this.tab.repeat(padding))
          .concat(this.templatePassed.replace("{{title}}", title));
      } else {
        report = report
          .concat(this.tab.repeat(padding))
          .concat(this.templateFailed.replace("{{title}}", title))
          .concat(this.tab.repeat(padding + 1))
          .concat(this.templateError.replace("{{message}}", error.message));
      }
    }

    return report;
  }
}
