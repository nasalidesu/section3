var path = '';
var currentPosition = 0;
var path2 = '';
var currentPosition2 = 0;

function generateRandomNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

function defineImgPath(result) {
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



}

function defineImgPath2(result2) {
  switch (result2) {
    case 1:
      path = "https://openclipart.org/download/282127/Die";
      currentPosition = currentPosition2 +result2;
      document.getElementById("display2").innerHTML = " current postion is "+ currentPosition2;
      break;
    case 2:
      path = "https://openclipart.org/download/282128/Die";
      currentPosition = currentPosition2 +result2;
      document.getElementById("display2").innerHTML = " current postion is "+ currentPosition2;
      break;
    case 3:
      path = "https://openclipart.org/download/282129/Die";
      currentPosition = currentPosition2 +result2;
      document.getElementById("display2").innerHTML = " current postion is "+ currentPosition2;
      break;
    case 4:
      path = "https://openclipart.org/download/282130/Die";
      currentPosition = currentPosition2 +result2;
      document.getElementById("display2").innerHTML = " current postion is "+ currentPosition2;
      break;
    case 5:
      path = "https://openclipart.org/download/282131/Die";
      currentPosition = currentPosition2 +result2;
      document.getElementById("display2").innerHTML = " current postion is "+ currentPosition2;
      break;
    case 6:
      path = "https://openclipart.org/download/282132/Die";
      currentPosition = currentPosition2 +result2;
      document.getElementById("display2").innerHTML = " current postion is " +  currentPosition2;
      break;
  }



}

function changeDiceFace(result) {
  var dice = document.querySelector('#dice');
  dice.setAttribute("src", path + result + ".svg");
}

function changeDiceFace2(result2) {
        var dice2 = document.querySelector('#dice2');
        dice.setAttribute("src", path2 + result2 + ".svg");
      }

function rollDice() {
  var result = generateRandomNumber();
  defineImgPath(result);
  changeDiceFace(result);
  positionLA(currentPosition);

  return false;
}

function rollDice2() {
        var result2 = generateRandomNumber();
        defineImgPath2(result2);
        changeDiceFace2(result2);
      //function current positin 2 should be here

        return false;
      }


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
