export class SimTime {
  constructor() {
    this.time = 0;
    this.speedRate = 1;
    this.simulatedTime = 0;
  }
  get() {
    return this.simulatedTime;
  }
  setSpeed(newSpeedRate) {
    this.speedRate = newSpeedRate;
  }
  update(value) {
    if (value > this.time) {
      this.simulatedTime = this.simulatedTime + this.speedRate
       * (value - this.time);
      this.time = value;
    } else {
      return 'Error';
    }
  }
}
