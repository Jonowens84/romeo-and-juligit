// 1. Make a button that adds a div with class square onto the pageBreakAfter:

const button = document.querySelector("#button");

button.addEventListener("click", function() {
  const div1 = document.createElement("div");
  div1.classList.add(".square");
  document.body.appendChild(div);
});

// 2.  Make a button that toggles the square to be a circle

const button2 = document.querySelector("#button2");
button2.addEventListener("click", function() {
  const div = document.querySelector("div");
  div.classList.toggle("circle");
});

// 3. Use a list to draw a set of cards

const people = [
  {
    name: "Cristiano Ronaldo",
    rating: "not ideal"
  },
  {
    name: "Lionel Messi",
    rating: "sik"
  },
  {
    name: "Virgil Van Dyk",
    rating: "bloody well good"
  }
];

function makeACard(person) {
  const square = document.createElement("div");
  square.classList.add("square");
  const display = `Name: ${person.name}, rating: ${person.rating}`;
  square.textContent = display;
  return square;
}

const container = document.querySelector(".container");

for (var i = 0; i < people.length; i++) {
  const card = makeACard(people[i]);
  container.appendChild(card);
}

// create a variable for the 'people', in the form of an array with seperate object for each player
// create a function, within which is a 'for' loop to generate each card
// using class of square, insert each player as a seperate div into the HTML of the page

// 4.
