
export class Human {
  constructor(name) {
    this.name = name;
  }
}

export class Man extends Human {
  constructor(name) {
    super(name);
    this.sex = 'male';
  }
}

export class Woman extends Human {
  constructor(name) {
    super(name);
    this.sex = 'female';
  }
}

export class God {
  static create() {
    let man = new Man('Adam');
    let woman = new Woman('Eve');
    return [man, woman];
  }
}
