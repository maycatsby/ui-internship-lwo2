export class SimTime {
  constructor() {
    this.realtime = 0;
    this.simulatedTime = 0;
    this.speed = 1;
  }
  get() {
    return this.simulatedTime;
  }
  setSpeed(speed) {
    this.speed = speed;
  }
  update(newTime) {
    if (newTime < this.realtime) {
      throw new Error('Time can`t go back');
    }
    this.simulatedTime += (newTime - this.realtime) * this.speed;
    return this.realtime = newTime;
  }
}

