class God {
  static create() {
    return [new Man(), new Woman()];
  }
}
class Human {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
}
class Man extends Human {
  constructor(name, sex) {
    super(name, sex);
    this.name = 'Adam';
    this.sex = 'male';
  }
}
class Woman extends Human {
  constructor(name, sex) {
    super(name, sex);
    this.name = 'Eve';
    this.sex = 'female';
  }
}


export {Human, God, Man, Woman};

