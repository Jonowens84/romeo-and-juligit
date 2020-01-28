// Loop over this array and add up all of the numbers

var costs = [1.1, 3, 0.5, 20, 1.4];
var total = 0;

// Your code here ...

for (var i = 0; i < 5; i++) {
  total = costs[i] + total;
  console.log("The total is £" + total);
}

// And then...
// loop over array
// add costs.i to total every loop

//Arrays

//1. Create a function to sort a list of numbers in an array in numerical order (they usually go by first digit e.g. 1000, 29, 3, 490)

function sortProperly(a, b) {
  if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  } else {
    a < b;
    return -1;
  }
}

//In console:
//1.
var list = [100000, 12, 24, 19, 6, 7];
//2.
list;
//3.
list.sort(sortProperly);

var costs = [1.1, 3, 0.5, 20, 1.4];
var total = 0;

for (var i = 0; i < costs.length; i++) {
  total = costs[i] + total;
}
console.log("The total is £" + total);

// function print my details
// takes in name,age,height
//'name' is 'age' years old and 'height'

// step 1. make a function called printMyDetails, pass in string of name, age, height as string

function printMyDetails(name, age, height) {
  console.log(name + " is " + age + " years old and " + height);
}

printMyDetails("Sam", 24, "6ft1");

//

// to get info returned

function printMyDetails(name, age, height) {
  return (printMyDetails = name + " is " + age + " years old and " + height);
}
var details = printMyDetails("Sam", 24, "6ft1");

// step 1 declare the object, 'person'
// step 2 give object the parameters provided

var person = {
  name: "Sam",
  age: 24,
  height: "6ft1"
};

function printMyDetails(person) {
  return (printMyDetails =
    person.name + " is " + person.age + " years old and " + person.height);
}

var details = printMyDetails(person);
