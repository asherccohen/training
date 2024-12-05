const {
  printValues,
  printValuesIIFE,
  printValuesWithLet
} = require('./closure');

describe('Print the numbers from 1 to n with a delay of 1 second each', () => {
  jest.useFakeTimers();

  it('waits 5 calls before ending the function', () => {
    printValues();

    expect(setTimeout).toHaveBeenCalledTimes(5);
  });

  it('should print undefined', () => {
    const callback = jest.fn(x => x);

    printValues(callback);
    // At this point in time, the callback should not have been called yet
    expect(callback).not.toBeCalled();

    // Fast-forward until all timers have been executed
    jest.runAllTimers();

    // Now our callback should have been called!
    expect(callback).toBeCalled();
    expect(callback).toHaveBeenCalledTimes(5);
    expect(typeof callback.mock.results[0].value).toBe('undefined');
  });

  it('should print numbers from 1 to 5', () => {
    const callback = jest.fn(x => x);

    printValuesIIFE(callback);
    // At this point in time, the callback should not have been called yet
    expect(callback).not.toBeCalled();

    // Fast-forward until all timers have been executed
    jest.runAllTimers();

    // Now our callback should have been called!
    expect(callback).toBeCalled();
    expect(callback).toHaveBeenCalledTimes(5);
    expect(typeof callback.mock.results[0].value).toBe('number');
  });

  it('should print numbers from 1 to 5', () => {
    const callback = jest.fn(x => x);

    printValuesWithLet(callback);
    // At this point in time, the callback should not have been called yet
    expect(callback).not.toBeCalled();

    // Fast-forward until all timers have been executed
    jest.runAllTimers();

    // Now our callback should have been called!
    expect(callback).toBeCalled();
    expect(callback).toHaveBeenCalledTimes(5);
    expect(typeof callback.mock.results[0].value).toBe('number');
  });
});
