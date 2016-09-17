/**
 * Created by tungpt on 16/09/2016.
 */
var quotes = "Darkness cannot drive out darkness; " +
    "only light can do that. " +
    "Hate cannot drive out hate; " +
    "only love can do that.";
console.log(quotes);
var firstPost = quotes.indexOf("only");
var lastPost = quotes.lastIndexOf("only");
console.log("firstPost = ",firstPost, "lastPost = ", lastPost);

var canPost = quotes.search(/ca..ot/);
console.log(canPost);

var contact = "phone 01653001626 Tung";
var phonePos = contact.search(/[0-9]+/);
console.log(phonePos);

var iLove = "I love PHP. PHP file extension is php";
var iLoveNode = iLove.replace(/PHP/ig, "Node.js");
console.log(iLoveNode);
//i: in casesensitive
//g: greedy

var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13);
console.log(res);

var res2 = str.slice(-12, -6);
console.log(res2);

console.log(str.substring(7, 13));

console.log(str.toUpperCase());
console.log(str.toLowerCase());

var tung = "TUNG";
for (var i = tung.length-1; i >= 0; i--) {
    console.log(tung.charAt(i));
}

String.prototype.reverse = function() {
    var result = "";
    for (var i = this.length-1; i >= 0; i--) {
        result += this.charAt(i);
    }
    return result;
};

console.log(tung.reverse());