
export class Human {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
}

export class Man extends Human {}

export class Woman extends Human {}

export class God {
  static create() {
    let man = new Man('Adam', 'male');
    let woman = new Woman('Eve', 'female');
    return [man, woman];
  }
}
