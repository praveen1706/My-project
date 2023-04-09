//first dice
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomImage = "dice" + randomNumber1 + ".png";  //dice1.png - dice6.png

var randomImageSrc = "images/" + randomImage;  //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSrc);

//second dice
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSrc2 = "images/" + "dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSrc2);

//player1 wins
if(randomNumber1 > randomNumber2)
    document.querySelector("h1").innerHTML = "🚩Player 1 wins!";
else if(randomNumber1 < randomNumber2)
    document.querySelector("h1").innerHTML = "Player 2 wins!🚩";
else
    document.querySelector("h1").innerHTML = "Match draws...";