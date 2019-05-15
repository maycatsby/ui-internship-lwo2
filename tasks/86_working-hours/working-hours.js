export function formatWorkingHours(arr) {
  let start = null;
  let end = null;
  const tillDay = () => start !== end ? ` - ${end.day.toUpperCase()}` : '';
  const dayAndHours = () => {
    let startDay = start.day.toUpperCase();
    return `${startDay}${tillDay()}: ${start.from} - ${start.to}`;
  };
  const daysOfWeek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  const sortedArray = arr.sort((a, b) => {
    const indexOfEl = (day) => daysOfWeek.indexOf(day);
    if (indexOfEl(a.day) < indexOfEl(b.day)) {
      return -1;
    } else {
      return 1;
    }
  });

  let scheduleArray = [];
  for (let i = 0; i < sortedArray.length; i++) {
    if (start === null) {
      start = end = sortedArray[i];
    } else if (sortedArray[i].from === start.from
      && sortedArray[i].to === start.to) {
      end = sortedArray[i];
      if (!sortedArray[i + 1]) {
        scheduleArray.push(dayAndHours());
      }
    } else {
      scheduleArray.push(dayAndHours());
      start = end = sortedArray[i];
      if (!sortedArray[i + 1]) {
        scheduleArray.push(dayAndHours());
      }
    }
  }
  return scheduleArray;
}
