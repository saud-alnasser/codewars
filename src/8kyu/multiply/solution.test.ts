import { describe, it } from 'vitest';
import { assert } from 'chai';
import { multiply } from './solution';

describe('multiply', function () {
  it('Basic tests', function () {
    assert.strictEqual(multiply(1, 1), 1);
    assert.strictEqual(multiply(1, 2), 2);
    assert.strictEqual(multiply(2, 2), 4);
    assert.strictEqual(multiply(3, 5), 15);
  });

  it('Random tests', function () {
    const a: number = (Math.random() * 100) | 0;
    const b: number = (Math.random() * 100) | 0;
    assert.strictEqual(multiply(a, b), a * b, `Testing for a = ${a}, b = ${b}`);
  });
});
