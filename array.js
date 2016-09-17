/**
 * Created by tungpt on 16/09/2016.
 */
var cars = ["RR","BMW","Ford"];
console.log(cars.valueOf());

for (var i = 1; i < cars.length; i++){
    console.log(cars[i]);
}

console.log(cars.join(" * "));
cars.push("Bugatti");
cars.push("Audi");
console.log(cars.valueOf());

while (cars.length > 0){
    cars.pop();
    console.log(cars.valueOf());
}

/*
while (cars.length > 0){
    cars.shift();
    console.log(cars.valueOf());
}
*/