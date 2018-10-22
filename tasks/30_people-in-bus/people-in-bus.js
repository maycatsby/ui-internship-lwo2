export function peopleInBus(Stops) {
  let Summ = 0;
  for (let i = 0; i < Stops.length; i++) {
    let oneStop = Stops[i];
    let stopIn = oneStop[0];
    let stopOut = oneStop[1];
    Summ = Summ + stopIn - stopOut;
  }
  return Summ;
}
