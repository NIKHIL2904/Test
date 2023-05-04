describe('solution', () => {
  it('returns the correct sum of values for each day of the week', () => {
    const input = {
      '2020-01-01': 4,
      '2020-01-02': 4,
      '2020-01-03': 8,
      '2020-01-04': 8,
      '2020-01-05': 2,
      '2020-01-06': -6,
      '2020-01-07': 2,
      '2020-01-08': -2,
    };

    const output = {
      Mon: -6,
      Tue: 2,
      Wed: 2,
      Thu: 4,
      Fri: 0,
      Sat: 8,
      Sun: 2,
    };

    expect(solution(input)).toEqual(output);
  });

  it('returns the mean value of the previous and next day when a day is missing', () => {
    const input = {
      '2020-01-01': 6,
      '2020-01-04': 12,
      '2020-01-05': 14,
      '2020-01-07': 4,
      '2020-01-08': 2,
    };

    const output = {
      Mon: 2,
      Tue: 4,
      Wed: 6,
      Thu: 6,
      Fri: 10,
      Sat: 12,
      Sun: 8,
    };

    expect(solution(input)).toEqual(output);
  });

  it('handles empty input dictionary', () => {
    expect(solution({})).toEqual({
      Mon: 0,
      Tue: 0,
      Wed: 0,
      Thu: 0,
      Fri: 0,
      Sat: 0,
      Sun: 0,
    });
  });

  it('handles input dictionary with only one day of the week', () => {
    const input = { '2020-01-05': 2 };
    expect(solution(input)).toEqual({
      Mon: 0,
      Tue: 0,
      Wed: 0,
      Thu: 0,
      Fri: 0,
      Sat: 2,
      Sun: 0,
    });
  });
});
