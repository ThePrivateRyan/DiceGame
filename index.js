//Image 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage1 = "Images/Dicey-" + randomNumber1 + ".png";

document.querySelector(".img1").setAttribute("src", randomDiceImage1);


//Image2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "Images/Dicey-" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2); //Have used querySelectorAll method here ref: linr 6


//Changing h1 based on dice numbers
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins";
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = " Player 2 Wins 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw !";
}
