/**
 * Created by tungpt on 16/09/2016.
 */
/*var person = {firstName:"Tung", lastName:"Phan", age:21, eyeColor:"brown"};
var person2 = {
    firstName:"Tung",
    lastName:"Phan",
    age:21,
    eyeColor:"brown"
};
person2.gender = "male";
//console.log(person2);
delete person2.eyeColor;
console.log(person2);

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

var myBro = new Person("Cun", "Phan", 14, "black");
console.log(myBro);

Person.prototype.showInfo = function () {
    "use strict";
    console.log("name: ",this.firstName, this.lastName, "- age: ", this.age, "- eye color: ", this.eyeColor);
}

myBro.showInfo();
*/

/*var a = 1,
    b = { foo: 'bar' },
    c = "Rock start",
    a_ = a,
    b_ = b,
    c_ = c;

//non object type params are passed by value
//object type params are passed by reference
function makeChange(_a, _b, _c) {
    _a = 2;
    //arguments[1] = { foo: 'Fun qua' };
    _b.foo = 'Fun qua';
    _c = "Film Star";
}
makeChange(a, b, c);

console.log(a === a_); //=> true
console.log(b === b_); //=> true
console.log(c === c_); //=> true

console.log('a = ', a, ', b = ', b, ', c =', c);
    */

function Robot(type) {   //-->Constructor function
    this.type = type;
}

var flyRobot = new Robot('fly');
var diveRobot = new Robot('dive');

Robot.prototype.speak = function (text) {
    console.log(this.type + "Robot says '" + text + "'");
};

flyRobot.speak('Hello World'); //sử dụng lại function speak định nghĩa ở Robot.prototype
diveRobot.speak('I swimming');

flyRobot.talk = function() {
    console.log('I am talking');
};
flyRobot.talk();