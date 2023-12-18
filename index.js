
// <<<---Dice 1--->>>
var randomnumber1 = Math.floor(Math.random()*6)+1;

var randomDiceImage = "dice" + randomnumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource)

// <<<---Dice 2--->>>

var randomnumber2 = Math.floor(Math.random()*6)+1;

var randomDiceImage = "dice" + randomnumber2 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImageSource);


    if(randomnumber1>randomnumber2){
        document.querySelector("h1").innerHTML = "Player 1 win"
    }
    else if(randomnumber2>randomnumber1){
        document.querySelector("h1").innerHTML = "Player 2 wins"
    }
    else{
        document.querySelector("h1").innerHTML = "Draw"
    }


    document.getElementById('refreshButton').addEventListener('click', function() {
        location.reload();
      });
