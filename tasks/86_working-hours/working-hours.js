export function formatWorkingHours(arr) {
  if (!arr.length) {
    return [];
  }
  const tillDay = () => start !== end ? ` - ${end.day.toUpperCase()}` : '';
  const dayAndHours = () => {
    let startDay = start.day.toUpperCase();
    return `${startDay}${tillDay()}: ${start.from} - ${start.to}`;
  };

  const daysOfWeek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  let start;
  let end;
  start = end = arr.find((el) => el.day === 'mon');
  let scheduleArray = [];

  for (let i = 1; i < daysOfWeek.length; i++) {
    let currentDay = arr.find((el) => el.day === daysOfWeek[i]);

    if (currentDay.from === start.from
          && currentDay.to === start.to) {
      end = currentDay;
    } else {
      scheduleArray.push(dayAndHours());
      start = end = currentDay;
    }
    if (i === daysOfWeek.length - 1) {
      scheduleArray.push(dayAndHours());
    }
  }
  return scheduleArray;
}


