// 1. start with function relating to the onclick

function sayHello() {
  // 2. create a variable, make selector for the html

  var allTextElements = document.getElementsByClassName("page text");
  allTextElements = Array.from(allTextElements);

  // 3. create for loop that runs through all the class of 'page text'
  //apply the change to the variable, i, and change the text

  for (var i = 0; i < allTextElements.length; i++) {
    allTextElements[i].innerText = "sikwan";
  }
}

// 4. change color of title using if statement, and create function for that
// 5. variable called isRed=false as title does not start as red

var isRed = false;

function toggleColor() {
  var title = document.getElementById("title");
  console.log(title);
  if (!isRed) {
    title.classList.add("red");
  } else {
    title.classList.remove("red");
  }
  isRed = !isRed;
}

// 6. take in a colour as a parameter (string)
// 7. change the background-color of the heading

function changeColor(color) {
  var title = document.getElementById("title");
  title.style.backgroundColor = color;
}
