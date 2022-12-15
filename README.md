# Prototyping in Javascript
At first I wanna mention this topic is significant not only for beginners and also for experienced developers. Why It so happends, because in the main Front-end
developers don't use this technology in their job. For example development in: React, Vue, Angular and ets.

Prototyping is more about OOP it's Inheritance in OOP

The **Inheritance** of JavaScript only works with one entity: objects. Each object has persistence on another object, called its prototype. 
The prototype object also has its own prototype, and so on, until the chain terminates in destruction, whose prototype property is null. In part, 
null has no prototype and is the final link in the **prototype chain**.

We can create a method or property in `Object`, `Function`, `Array`;

In this article won't be many text I've created this PR for detailed examples.

### How to create a method or property in prototype?

`Object`, `Function`, `Array` have method prototype and we can add our new method after that.

*For example*:

```no-highlight
  Function.prototype.console = (arg) => {
  console.log(arg, "argument");
};

const GrandFather = function () {}; // Constructor

GrandFather.prototype.age = 52; // Add property to prototype

const Father = function () {}; // Constructor
Father.prototype = new GrandFather(); // Inheriting from a class Son

const Son = function () {}; // Constructor
Son.prototype = new Father();

const sonAge = new Son();  // Inheriting from a class Son
const fatherAge = new Father(); // Inheriting from a class Father
const GrandFatherAge = new GrandFather(); // Inheriting from a class GrandFather

Son.prototype.age = 14;
Father.prototype.age = 30;

Function.console([sonAge.age, fatherAge.age, GrandFatherAge.age]); // [14, 30, 52]
};
```
So We have this array `[14, 30, 52]` because We changed property only in Son and Father not for GrandFather. Therefore a class GrandFather stayed the same


### Operator's `in` and method's `hasOwnProperty()`

**hasOwnProperty**: The *`hasOwnProperty()`* method returns a boolean indicating whether the object has the specified property as its own property.

**in**: The operator returns true if the property is stored in the specified object or its prototype chain.

```no-highlight
console.log("console" in few, "Use method in"); // true
console.log(few.hasOwnProperty("console"), "USe method hasOwnProperty"); //  false
```

First `console.log()` displays `true` because `operator in` checks method inside few() function and `Object.prototype`.

Second `console.log()` displays `false`. In this case method `hasOwnProperty()` checks only that method only inside few() function.

### Reference `_proto_`

**`__proto__`** is a reference to the constructor's prototype(prototype).

```no-highlight
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

const p = { x: 10, __proto__: Point }; // with using _proto_ we inherit constructor of Point

getProperty(p, "print").call(p); // 10 0
```
Why we have `y = 0`, we definitely didn't initialize the value of `y`. In this result the `_proto_` inherit constructor and the search will happen in Point too.


### Creating constructors and methods

#### `TVShow` is our class with a constructor
#### `TVShow.prototype` in this case we create `showTVShow()` function. This function we can use in the new classes inherited from TVSHow

```no-highlight
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
WednesdayTV.showTVShow(); // TV Show: Wednesday, Quantity Of Series: 8 Wednesday

const Witcher = new TVShow("Witcher", 14);
Witcher.showTVShow(); // TV Show: Witcher, Quantity Of Series: 14 Witcher
```


