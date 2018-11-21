/* eslint-disable */
export function formatWorkingHours(arr) {
  if (!arr.length) return [];
  const orderedDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  const orderedInput = [];
  let firstIndexGrouped = 0;
  let lastIndexGrouped = 0;
  const scheduleArr = [];
  const orderedDaysLength = orderedDays.length;
  orderedDays.forEach((outerElement) =>{
    arr.forEach((element) => {
      if (element.day == outerElement) {
        orderedInput.push(element);
      }
    });
  });
  for (let i = 0; i < orderedDaysLength; i++) {
    if (orderedInput[i].from !== orderedInput[firstIndexGrouped].from || orderedInput[i].to !== orderedInput[firstIndexGrouped].to) {
      let groupedFD = orderedInput[firstIndexGrouped].day.toUpperCase();
      let groupedLD = orderedInput[lastIndexGrouped].day.toUpperCase();
      let fromTimeLD = orderedInput[lastIndexGrouped].from;
      let toTimeLD = orderedInput[lastIndexGrouped].to;
      if (groupedFD !== groupedLD) {
        scheduleArr.push(groupedFD + ' - ' + groupedLD + ': ' + fromTimeLD + ' - ' + toTimeLD);
      } else {
        scheduleArr.push(groupedLD + ': ' + fromTimeLD + ' - ' + toTimeLD);
      }
      firstIndexGrouped = i;
      if (i == 6) scheduleArr.push(orderedInput[6].day.toUpperCase() + ': ' + orderedInput[6].from + ' - ' + orderedInput[6].to);
    }
    lastIndexGrouped = i;
  }
  return scheduleArr;
}
