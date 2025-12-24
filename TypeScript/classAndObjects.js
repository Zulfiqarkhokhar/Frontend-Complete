// class
var Device = /** @class */ (function () {
    function Device() {
        this.name = "Nokia";
        this.price = 12000;
        this.color = "Black";
    }
    return Device;
}());
var d1 = new Device();
var Human = /** @class */ (function () {
    function Human(name, age) {
        this.name = name;
        this.age = age;
    }
    return Human;
}());
var h1 = new Human("Zulfiqar", 27);
var Car = /** @class */ (function () {
    function Car(model, price) {
        this.model = model;
        this.price = price;
    }
    return Car;
}());
var c1 = new Car("Corola", 2000000);
var Zulfiqar = /** @class */ (function () {
    function Zulfiqar(name) {
        this.name = name;
    }
    Zulfiqar.prototype.changeName = function () {
        this.name = "Khokhar"; // this not allow because it is readonly
    };
    return Zulfiqar;
}());
// getter and setter
var Cat = /** @class */ (function () {
    function Cat(_name, _color) {
        this._name = _name;
        this._color = _color;
    }
    Object.defineProperty(Cat.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    return Cat;
}());
var cat = new Cat("kitty", "Black");
cat.name;
// static
var Game = /** @class */ (function () {
    function Game() {
        this.gameName = "Sonic"; /// accessible with class object --> part of object of class
    }
    Game.getRandomNumber = function () {
        // accessable with Class itself ---> part of class itself
        return Math.random();
    };
    Game.version = 1.2; // accessable with Class itself ---> part of class itself
    return Game;
}());
var g1 = new Game();
// abstract class
