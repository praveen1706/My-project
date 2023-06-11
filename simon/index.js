var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var start = false;

var level = 0;

$(document).keypress(function(){
    if(!start){
        $("#level-title").text("Level "+ level);
        nextSequence();
        start = true;
    }
});

//clicking button
$(".btn").on("click", function(){

    //the box which is clicked that id will store
    var userChosenColour = $(this).attr("id");
    //the clicked colour box is pushed to clicked pattern
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);    

    animation(userChosenColour);

    checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("Success");

        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence();
            }, 1000);
        }
    }
    else{
        playSound("wrong");
        $("body").addClass("gameOver");
        $("#level-title").text("Game Over, Press Any key to Restart");

        setTimeout(function(){
            $("body").removeClass("gameOver");
        }, 200);
     
        startOver();
    }
}
//random number
function nextSequence(){

    userClickedPattern = [];
    level++;

    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random()*4);
    var randomChoosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChoosenColour);
    
    $("#" + randomChoosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChoosenColour);
};

//animating to click
function animation(currentColor){

    $("#" + currentColor).addClass("pressed");

    setTimeout(function(){
        $("#" + currentColor).removeClass("pressed");
    }, 100);
};

//playing sound by it click
function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
};

//reset the game
function startOver(){

    level = 0;
    gamePattern = [];
    start = false;
}