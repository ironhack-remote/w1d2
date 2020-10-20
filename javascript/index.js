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
