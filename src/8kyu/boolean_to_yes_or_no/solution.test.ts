import { describe, it } from 'vitest';
import { assert } from 'chai';
import { boolToWord } from './solution';

describe('boolToWord', function () {
  it('Sample tests', function () {
    assert.equal(boolToWord(true), 'Yes');
    assert.equal(boolToWord(false), 'No');
  });

  it('Random tests', function () {
    for (let i = 0; i < 100; ++i) {
      if (Math.random() > 0.5) {
        assert.equal(boolToWord(true), 'Yes');
      } else {
        assert.equal(boolToWord(false), 'No');
      }
    }
  });
});
