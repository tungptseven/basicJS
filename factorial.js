/**
 * Created by tungpt on 16/09/2016.
 */
// n!: 3! = 1 * 2 * 3, N! = (N-1)! * N
function  factorial(n) {
    if (typeof (n) != "number") {
        return NaN;
    }

    if (n === parseInt(n)) {
        if (n <= 1) {
            return 1;
        } else {
            var result = 1;
            for (var i = 2; i <= n; i++) {
                result *= i;
            }
            return result;
        }
    } else {
        return NaN;
    }
}

console.log(factorial(3));

//Recursive function
function fact(n) {
    if (typeof (n) != "number") {
        return NaN;
    }

    if (n === parseInt(n)) {
        if (n <= 1) {
            return 1;
        } else {
            return n * fact(n-1);
        }
    } else {
        return NaN;
    }
}
console.log(fact(3));