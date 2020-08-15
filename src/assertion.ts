export class AssertionError<T> extends Error {
  public constructor(
    public readonly message: string,
    public readonly actual: T,
    public readonly exptected: T
  ) {
    super(message);

    Object.setPrototypeOf(this, AssertionError.prototype);
  }
}

type Comparison<T> = (left: T, right: T) => boolean;

function equalValue<T>(left: T, right: T): boolean {
  return left == right;
}

function equalValueAndType<T>(left: T, right: T): boolean {
  return left === right;
}

function notEqualValue<T>(left: T, right: T): boolean {
  return left != right;
}

function notEqualValueAndType<T>(left: T, right: T): boolean {
  return left !== right;
}

function greater<T>(left: T, right: T): boolean {
  if (typeof left === "string" && typeof right === "string") {
    return left.length > right.length;
  }

  return left > right;
}

function greaterOrEqual<T>(left: T, right: T): boolean {
  if (typeof left === "string" && typeof right === "string") {
    return left.length >= right.length;
  }

  return left >= right;
}

function noop<T>(_left: T, _right: T): boolean {
  throw Error(`Assertion not implemented yet`);
}

type Assertion<T> = (expected: T) => void;

function compare<T>(actual: T, comparison: Comparison<T>): Assertion<T> {
  return function (expected: T) {
    if (comparison(actual, expected) === false) {
      throw new AssertionError(
        `${actual} is different from ${expected}`,
        actual,
        expected
      );
    }
  };
}

export function Expect<T>(actual: T) {
  const standard = {
    toBeEqualTo: compare(actual, equalValue),
    toBeStrictEqual: compare(actual, equalValueAndType),
    toBeGreaterThan: compare(actual, greater),
    toBeGreaterThanOrEqualTo: compare(actual, greaterOrEqual),
  };

  const negated: typeof standard = {
    toBeEqualTo: compare(actual, notEqualValue),
    toBeStrictEqual: compare(actual, notEqualValueAndType),
    toBeGreaterThan: compare(actual, noop),
    toBeGreaterThanOrEqualTo: compare(actual, noop),
  };

  return { ...standard, not: negated };
}
