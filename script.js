Function.prototype.console = (arg) => {
  console.log(arg, "argument");
};

const GrandFather = function () {};

GrandFather.prototype.age = 52;

const Father = function () {};
Father.prototype = new GrandFather();

const Son = function () {};
Son.prototype = new Father();

const sonAge = new Son();
const fatherAge = new Father();
const GrandFatherAge = new GrandFather();

Son.prototype.age = 14;
Father.prototype.age = 30;

Function.console([sonAge.age, fatherAge.age, GrandFatherAge.age]);

const few = function () {};

console.log("console" in few, "Use method in"); // Check console method inside few() function
console.log(few.hasOwnProperty("console", "USe method hasOwnProperty")); //  Check console method inside few() function

const obj = {
  ShowMessage: function () {
    console.log("Hello World!");
  },
};

// console.log("ShowMessage" in obj, "assign");

function getProperty(obj, prop) {
  if (obj.hasOwnProperty(prop)) return obj[prop];
  else if (obj.__proto__ !== null) return getProperty(obj.__proto__, prop);
  else return undefined;
}

const Point = {
  x: 0,
  y: 0,
  print: function () {
    console.log(this.x, this.y);
  },
};

const p = { x: 10, __proto__: Point };

// console.log(getProperty(p, "y"), "getProperty y from p");
getProperty(p, "print").call(p);

// Creating Constructor
const Book = function (name, published) {
  this.name = name;
  this.published = published;
};

// Adding new method to book class
Book.prototype = {
  print: function () {
    console.log(`Name: ${this.name} and Published: ${this.published}`);
  },
};

const NewBook = new Book("World Cup", "2000.09.03");

console.log(NewBook instanceof Book, "NewBook instanceof Book");

NewBook.print();

const TVShow = function (name, quantityOfSeries) {
  this.name = name;
  this.quantityOfSeries = quantityOfSeries;
};

TVShow.prototype = {
  showTVShow: function () {
    console.log(
      `TV Show: ${this.name}, Quantity Of Series: ${this.quantityOfSeries}`,
      this.name
    );
  },
};

const WednesdayTV = new TVShow("Wednesday", 8);
WednesdayTV.showTVShow();

const Witcher = new TVShow("Witcher", 14);
Witcher.showTVShow();
