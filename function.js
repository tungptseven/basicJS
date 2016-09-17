/**
 * Created by tungpt on 17/09/2016.
 */
function add (a, b) {
    "use strict"
    return a + b;
}
console.log(add(2, 3));

var cong = add;
console.log(cong(2, 3));

var square = function (x) {
    return x * x;
}
console.log(square(10));

add.description = function () {
    console.log("Add 2 numbers");
}
add.description();

var addSafe = function (a, b) {
    if (typeof  a !== 'number' || typeof b !== 'number'){
        throw {
            name: 'TypeError',
            message: 'addSafe requires number parameters'
        };
    }
    return a + b;
}
addSafe(10, 1);

function arithmetic(operatorString) {
    switch (operatorString){
        case '+':
            return function (a, b) {
                return a + b;
            };
        case '-':
            return function (a, b) {
                return a - b;
            };
        case '*':
            return function (a, b) {
                return a * b;
            };
        case '/':
            return function (a, b) {
                return a / b;
            };
    }
}

var x = arithmetic("-")(20,10);
console.log(x);
var y = arithmetic("/")(20,10);
console.log(y);
var z = arithmetic("*")(20,10);
console.log(z);

function makeACupOfCoffee() {
    function boilWater(temp) {
        console.log("Boil water at ", temp);
    }
    function mixCoffeeWithMilkAndSugar() {
        console.log("Mix coffee with milk and sugar");
    }
    boilWater(100);
    mixCoffeeWithMilkAndSugar();
}
makeACupOfCoffee();