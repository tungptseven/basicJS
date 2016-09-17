/**
 * Created by tungpt on 16/09/2016.
 */
"user strict";
var age = 10;
const pi = 3.14158;
console.log(typeof pi);

if (parseInt(age)){
    console.log("Age is number");
}

var myAge = "21";
var myAge2 = parseInt(myAge)

var nodejs_slow = false;
var iojs_fast = true;

if (nodejs_slow) {
    console.log("Node.js is slow");
} else {
    console.log("Node.js is fast");
}

if (!nodejs_slow) {
    console.log("Node.js is not slow");
}

if (!nodejs_slow && iojs_fast) {
    console.log("Both Node.js and iojs are fast");
}

var best_film = "Gone with the wind";
var best_hero = "Batman";
var best_player = "Faker\'LeSangHyuk"
console.log(best_player)
var my_folder = "/MSi/tung/Data";
console.log(my_folder);

var tung = {firstName: "Phan", lastName: "Tung"};
var book = {name: "Getting MEAN", author: tung};
console.log(book['name']);
book.price = 100;
console.log(book.price);
console.log(book.author);

var player = "B'jorka";
console.log(player);