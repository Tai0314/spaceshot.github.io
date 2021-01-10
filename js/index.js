console.clear();

console.log("Hello!!!!!!");

// this is a comment
// this let stament sat x to 0
let x = 0;

if (x > 2) {
  console.log("it is greater!");
} else {
  console.log("it was not greater");
}

function sum(x, y) {
  let answer = x + y;
  return answer;
}

let result = sum(7, 73);
console.log(result);

let result2 = sum(55, 55);
console.log(result2);

let mybutton = document.getElementById("pressbutton");

mybutton.addEventListener("click", sayhi);

function sayhi() {
  let greeter = document.getElementById("greeting");
  greeter.innerText = "Hello!!";
}
