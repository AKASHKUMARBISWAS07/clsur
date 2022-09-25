1.  "    function counter(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = Counter();
alert(counter());
alert(counter());
alert(counter());
alert(counter());"

ans:
page loading and alert shows
"127.0.1:5500 says 1"
"127.0.1:5500 says 2"
"127.0.1:5500 says 3"
"127.0.1:5500 says 4"


2.
let count = 0;
(function () {
  if (count === 0) {
    let count = 1;
    console.log(count); 
  }
  console.log(count); 
})();


ans:  1  
      0

3. for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i);
    }, 1000);
  }

ans: 3

6.Print Output

var a = 12;
(function () {
  alert(a);
})();

ans: 
getting alert

"127.0.1:5500 says 12"


7. 
var a = 10;
var x = (function () {
var a = 12;
return function () {
alert(a);
};
})();
x();

ans:
getting alert

"127.0.1:5500 says 12"


8. 
var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar = " + globalVar);
    
    })(456);
})(123);


ans: 

outerArg = 123
innerArg = 456
outerVar = a
innerVar = b
globalVar = xyz



4. Write a code to calculate area of a rectangle using inner function. In this case outer function should accept parameter length and inner function should accept parameter breadth.

ans:



5.Take a variable in outer function and create an inner function to increase the counter every time it is called

ans:
function counter(){
    var counter = 0;
    
    function IncreaseCounter() {
        return counter += 1;
    };
    return IncreaseCounter;
}
var counter = counter();
alert(counter());
alert(counter());
alert(counter());
alert(counter());
alert(counter());
alert(counter());
alert(counter());
alert(counter());
alert(counter());
alert(counter());
alert(counter());
alert(counter());
alert(counter());
alert(counter());
alert(counter());
alert(counter());
alert(counter());
alert(counter());
alert(counter());
alert(counter());