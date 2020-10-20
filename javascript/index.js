console.log("HELLO");

// function declaration
function sayHello() {
  console.log("SAY HELLO");
}

sayHello();
sayHello();
sayHello();
sayHello();

const name1 = "Marc";

function sayHelloToOnePerson(name) {
  console.log(`Hello ${name1} and ${name}`);
}

function sayHelloToTwoPeople(person1, person2) {
  const greeting = `Hello there ${person1} and ${person2}`;
  //   console.log(greeting);
  return greeting;
}

sayHelloToOnePerson("Querien");

sayHelloToTwoPeople("Sophie", "Hugo");

function returnBoolean() {
  return false;
}

const variable = returnBoolean();
console.clear();
const twoPeopleGreeting = sayHelloToTwoPeople();

console.log(typeof twoPeopleGreeting);
console.log(sayHelloToTwoPeople("Gosia", "Milena"));

function canDrive(age) {
  if (age <= 16) {
    console.log("Nope.");
    return "Nope.";
  } else if (age > 16) {
    console.log("Well, maybe, if you have a license");
  } else {
    console.log("Oops, you didnt add an age value");
  }

  console.log("end of function");
}
console.clear();
canDrive();
canDrive(15);
canDrive(16);
canDrive(99);

const canIDrive = canDrive(26);
console.log("canIDrive:", canIDrive);
console.clear();

function fizzBuzz(five, seven) {
  for (let i = 1; i <= 10; i++) {
    if (i % 5 === 0) {
      console.log(five);
      return;
    } else if (i % 7 === 0) {
      console.log(seven);
      return;
    } else {
      console.log(i);
    }
  }
}

fizzBuzz("Fizz", "Buzz");

console.clear();

const log = console.log;
log("To log stuff");

console.log; // pointing to a definition of a function
console.log(); //calling a function

const gosia = mindsBlown;

console.error("THIS LOOKS SCARY");
console.warn("HALLOWEEN IS COMING");
console.clear();

function mindsBlown(fancy) {
  fancy("Noice");
}

mindsBlown(log);
console.clear();
// ARRAYS

// [undefined, null, 0, false]
const array = [];
console.log("array:", array);
array.push("Weird");
console.log("array:", array);
array.pop();
console.log("array:", array);
array.unshift("This adds");
console.log("array:", array);
array.shift();
console.log("array:", array);

console.clear();

const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

array2.splice(4, 1);
console.log("array2:", array2);
array2.splice(4, 0, 5);
console.log("array2:", array2);
const array3 = array2.slice(2);
console.log("array3:", array3);
const array4 = array2.slice(4, 8);
console.log("array4:", array4);
const array5 = array2.splice(4);
console.log("array5:", array5);

console.clear();

// for (let i = 0; i < array6.length; i++) {
//   console.log(array6[i]);
// }

const array6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

array6.forEach(function (element) {
  log(element, element * 2);
});
// array6.forEach(function (a, b, c) {
//   log("ELEMENT", a);
//   log("INDEX", b);
//   log("ARRAY", c);
// });

// array6.forEach(function () {
//   log("HEY THERE");
// });

// function forEach(element, index, array) {

// }

// for (let i = 0; i< array6.length; i++) {
//    forEach(array6[i], i, array)
// }

const array7 = [];
console.log("array7:", array7);

for (let i = 1; i <= 100; i++) {
  array7.push(i);
}
console.log("array7:", array7);
