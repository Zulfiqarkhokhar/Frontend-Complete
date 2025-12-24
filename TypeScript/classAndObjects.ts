// class

class Device {
  name = "Nokia";
  price = 12000;
  color = "Black";
}

let d1 = new Device();

class Human {
  constructor(public name: string, public age: number) {}
}

let h1 = new Human("Zulfiqar", 27);

class Car {
  public model;
  public price;

  constructor(model: string, price: number) {
    this.model = model;
    this.price = price;
  }
}

let c1 = new Car("Corola", 2000000);

class Zulfiqar {
  public readonly name;

  constructor(name: string) {
    this.name = name;
  }

  changeName() {
    this.name = "Khokhar"; // this not allow because it is readonly
  }
}

// getter and setter

class Cat {
  private _name;
  private _color;

  constructor(_name: string, _color: string) {
    this._name = _name;
    this._color = _color;
  }

  get name() {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}

let cat = new Cat("kitty", "Black");
cat.name;

// static

class Game {
  gameName = "Sonic"; /// accessible with class object --> part of object of class
  static version = 1.2; // accessable with Class itself ---> part of class itself

  static getRandomNumber() {
    // accessable with Class itself ---> part of class itself
    return Math.random();
  }
}

let g1 = new Game();

// abstract class
