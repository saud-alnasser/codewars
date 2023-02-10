import { describe, it } from 'vitest';
import { expect } from 'chai';
import { numberToString } from './solution';

describe('numberToString', function () {
  it('should work correctly', () => {
    expect(numberToString(67)).to.equal('67');
    expect(numberToString(79585)).to.equal('79585');
    expect(numberToString(79585)).not.to.equal(79585);
    expect(numberToString(1 + 2)).to.equal('3');
    expect(numberToString(1 - 2)).to.equal('-1');
  });
});
