const majorityElement = require('./majorityElement');

describe('Find if there’s any “most-prominent” number', () => {
  it('should return -1', () => {
    numbers = [3, 3, 3, 3, 3, 5, 7, 7, 8, 9];
    const value = majorityElement(numbers);
    console.log(`majorityElement in [${numbers}] is: ${value}`);

    expect(typeof value).toBe('number');
    expect(value).toBe(-1);
  });

  it('should return 12', () => {
    const numbers = [12, 12, 12, 12, 53];
    const value = majorityElement(numbers);
    console.log(`majorityElement in [${numbers}] is: ${value}`);

    expect(value).not.toBe(-1);
    expect(typeof value).toBe('number');
    expect(value).toBe(12);
  });
});
