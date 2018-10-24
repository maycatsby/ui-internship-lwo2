export class SimTime {
  constructor() {
    this.speed = 1;
    this.currentTime = 0;
    this.simTime = 0;
  }

  get() {
    return this.simTime;
  }

  setSpeed(speed) {
    this.speed = speed;
  }
  update(time) {
    if (this.time > time) {
      return -1;
    }
    this.simTime += (time - this.currentTime) * this.speed;
    this.currentTime = time;
  }
}
