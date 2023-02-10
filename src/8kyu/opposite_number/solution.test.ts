import { describe, it } from 'vitest';
import { assert } from 'chai';
import { Kata } from './solution';

describe('solution', function () {
  it('Sample Test', function () {
    assert.strictEqual(Kata.opposite(1), -1);
  });

  it('Fixed Tests', function () {
    assert.strictEqual(Kata.opposite(1), -1);
    assert.strictEqual(Kata.opposite(0), 0);
    assert.strictEqual(Kata.opposite(4.25), -4.25);
    assert.strictEqual(Kata.opposite(3.3333333), -3.3333333);
    assert.strictEqual(Kata.opposite(-12525220.3325), 12525220.3325);
    assert.strictEqual(Kata.opposite(-5), 5);
  });

  it('Random Tests', function () {
    for (let i = 0; i < 100; ++i) {
      const n = Math.random() * 1e9;
      assert.strictEqual(Kata.opposite(n), -n);
    }
  });
});
