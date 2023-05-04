function solution(D) {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  let daySum = [0, 0, 0, 0, 0, 0, 0];
  let dayCount = [0, 0, 0, 0, 0, 0, 0];

  // Iterate through the dictionary and calculate the sum and count for each day of the week
  for (const dateStr in D) {
    const date = new Date(dateStr);
    const day = date.getDay();
    daySum[day] += D[dateStr];
    dayCount[day]++;
  }

  // Iterate through the arrays to calculate the mean for missing days
  for (let i = 0; i < 7; i++) {
    if (dayCount[i] === 0) {
      let prev = i - 1;
      while (prev >= 0 && dayCount[prev] === 0) {
        prev--;
      }
      let next = i + 1;
      while (next < 7 && dayCount[next] === 0) {
        next++;
      }
      daySum[i] = (daySum[prev] + daySum[next]) / 2;
      dayCount[i] = 1;
    }
  }

  // Create the output dictionary
  const output = {};
  for (let i = 0; i < 7; i++) {
    output[daysOfWeek[i]] = daySum[i];
  }
  return output;
}
