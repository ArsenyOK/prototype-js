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


### Methods `in` and `hasOwnProperty`
