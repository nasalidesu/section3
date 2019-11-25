var path = '';
var currentPosition = 0;
var path2 = '';
var currentPosition2 = 0;

function generateRandomNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

function defineImgPath(result) {
  //condition for dice and result
  switch (result) {
    case 1:
      path = "https://openclipart.org/download/282127/Die";
      currentPosition = currentPosition +result;
      document.getElementById("display1").innerHTML = " current postion is "+ currentPosition;
      break;
    case 2:
      path = "https://openclipart.org/download/282128/Die";
      currentPosition = currentPosition +result;
      document.getElementById("display1").innerHTML = " current postion is "+ currentPosition;
      break;
    case 3:
      path = "https://openclipart.org/download/282129/Die";
      currentPosition = currentPosition +result;
      document.getElementById("display1").innerHTML = " current postion is "+ currentPosition;
      break;
    case 4:
      path = "https://openclipart.org/download/282130/Die";
      currentPosition = currentPosition +result;
      document.getElementById("display1").innerHTML = " current postion is "+ currentPosition;
      break;
    case 5:
      path = "https://openclipart.org/download/282131/Die";
      currentPosition = currentPosition +result;
      document.getElementById("display1").innerHTML = " current postion is "+ currentPosition;
      break;
    case 6:
      path = "https://openclipart.org/download/282132/Die";
      currentPosition = currentPosition +result;
      document.getElementById("display1").innerHTML = " current postion is " +  currentPosition;
      break;
  }
  // condition for ladder and snake
  switch (currentPosition) {
    case 8:
      currentPosition = 14;
      document.getElementById("display1").innerHTML = "LADDER! player advanced to pos 14, current postion is "+ currentPosition;
        break;
    case 19:
      currentPosition = 24;
      document.getElementById("display1").innerHTML = "LADDER! player advanced to pos 24, current postion is "+ currentPosition;
        break;
    case 15:
      currentPosition = 5;
      document.getElementById("display1").innerHTML = "SNAKE! player drop to pos 5, current postion is "+ currentPosition;
      break;
    case 23:
      currentPosition = 16;
      document.getElementById("display1").innerHTML = "SNAKE! player drop to pos 16, current postion is "+ currentPosition;
        break;

  }
//condition to win the game >= 25
  if (currentPosition >= 25) {
    currentPosition=0;
    document.getElementById("display1").innerHTML = "Player 1 WON the game !!";


  }



}

//player 2------------------------------------




function changeDiceFace(result) {
  var dice = document.querySelector('#dice');
  dice.setAttribute("src", path + result + ".svg");
}


function rollDice() {
  var result = generateRandomNumber();
  defineImgPath(result);
  changeDiceFace(result);
  positionLA(currentPosition);

  return false;
}
function rollDice2() {
var result = generateRandomNumber();
changeDiceFace(result);
    document.getElementById("display2").innerHTML = "Player 2 WON the game !!"+result ;

  return false;
}


//testing purposes-------
function positionLA(currentPosition){
  switch (currentPosition) {
    case 8:
    currentPosition = 15;
    document.getElementById("displaycurrent1").innerHTML = " ladder to 15 ";
    break;
    case 9:
    currentPosition = 15;
    document.getElementById("displaycurrent1").innerHTML = " ladder to 15 ";
    break;
    case 10:
    currentPosition = 15;
    document.getElementById("displaycurrent1").innerHTML = " ladder to 15 ";
    break;
    default:

  }
  return currentPosition;
}
