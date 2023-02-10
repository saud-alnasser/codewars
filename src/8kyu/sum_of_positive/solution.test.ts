import { describe, it } from 'vitest';
import { assert } from 'chai';
import { positiveSum } from './solution';

describe('solution', function () {
  it('Basic Tests', function () {
    assert.equal(positiveSum([1, 2, 3, 4, 5]), 15);
    assert.equal(positiveSum([1, -2, 3, 4, 5]), 13);
    assert.equal(positiveSum([]), 0);
    assert.equal(positiveSum([-1, -2, -3, -4, -5]), 0);
    assert.equal(positiveSum([-1, 2, 3, 4, -5]), 9);
  });

  it('Random Tests', function () {
    function rand(l: number): number[] {
      const ran: number[] = [];
      while (ran.length < l) {
        ran.push(
          (Math.round(Math.random()) * 2 - 1) *
            Math.floor(Math.random() * 100 + 1)
        );
      }
      return ran;
    }
    let r: number[] = rand(8);
    assert.equal(
      positiveSum(r),
      (r.filter(function (e) {
        return e > 0;
      }).length > 0
        ? r.filter(function (e) {
            return e > 0;
          })
        : [0]
      ).reduce(function (a, b) {
        return a + b;
      })
    );
    r = rand(15);
    assert.equal(
      positiveSum(r),
      (r.filter(function (e) {
        return e > 0;
      }).length > 0
        ? r.filter(function (e) {
            return e > 0;
          })
        : [0]
      ).reduce(function (a, b) {
        return a + b;
      })
    );
    r = rand(60);
    assert.equal(
      positiveSum(r),
      (r.filter(function (e) {
        return e > 0;
      }).length > 0
        ? r.filter(function (e) {
            return e > 0;
          })
        : [0]
      ).reduce(function (a, b) {
        return a + b;
      })
    );
    r = rand(120);
    assert.equal(
      positiveSum(r),
      (r.filter(function (e) {
        return e > 0;
      }).length > 0
        ? r.filter(function (e) {
            return e > 0;
          })
        : [0]
      ).reduce(function (a, b) {
        return a + b;
      })
    );
  });
});
