var num = 2.1542;
var num1 = 2.5165;
var result = Math.floor(num);
var result1 = Math.ceil(num);
var result2 = Math.round(num1);
console.log(result, result1, result2);

//random in js
var ranNum = 1;
var randomNumber = Math.random(ranNum) * 6;
var output = Math.round(randomNumber);
console.log(output);

for (var i = 0; i <= 10; i++) {
    var randomNumber = Math.random() * 6;
    var output = Math.round(randomNumber);
    console.log(output);
}

var student = 1;
var randomNum = Math.random(student) * 35;
var winer = Math.round(randomNum);
console.log(winer);
