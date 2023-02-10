import { describe, it } from 'vitest';
import { assert } from 'chai';
import { solution } from './solution';

describe('Sample Test Cases', function () {
  it('Should return a string', function () {
    assert.equal(solution('world'), 'dlrow');
    assert.equal(solution('hello'), 'olleh');
    assert.equal(solution(''), '');
    assert.equal(solution('h'), 'h');
  });
});

describe('Random Test Cases', function () {
  it('Should work for random tests too', function () {
    for (let i = 0; i < 20; i++) {
      const testStr = makeStr();
      assert.equal(solution(testStr), example(testStr));
    }
  });
});

function example(str: string): string {
  return str.split('').reverse().join('');
}

function makeWord(min: number, max: number): string {
  const array = [];
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const length = Math.ceil(Math.random() * max + min);

  for (let i = 0; i < length; i++) {
    array.push(possible[Math.floor(Math.random() * possible.length)]);
  }

  return array.join('');
}

function makeStr() {
  const arrLen = Math.floor(Math.random() * 9) + 2;
  const testArr = [];
  for (let j = 0; j < arrLen; j++) {
    testArr.push(makeWord(5, 10));
  }
  return testArr.join(' ');
}
