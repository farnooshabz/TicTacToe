var body = document.getElementsByTagName("body")[0];
//var board = document.getElementById("board");
//var button = document.getElementById("btn");





//make a player:
var count = 0;
var players = ['X', 'O'];
var changeTurn = function (count) {
  if (count % 2 === 0) {
    return 'X';
  } else {
    return 'O';
  }
}
//make a board for game
var cell = document.getElementsByClassName("cell");

for (let i=0 ; i < cell.length ; i++) {
    cell[i].onclick = () => {
        var turn = changeTurn(count);
        // var cellTxt = document.createTextNode(`${turn}`);
        // cell[i].appendChild(cellTxt);
        cell[i].innerText = `${turn}`;
        cell[i].style.pointerEvents = 'none';
        count ++;
        //check for the winner
        winnerCheck();
      }

  }


  var winnerCheck = () => {
    var square = $(".cell");
    var rows  = $(".table-row");
    //check for rows
    for (let i = 0; i < 3 ; i++) {
      rowWins(rows[i]);
    }
    //check for columns:
    var col1 = $(".col1");
    columnWins(col1);
    var col2 = $('.col2');
    columnWins(col2);
    var col3 = $('.col3');
    columnWins(col3);
    diagnalWin();
    //diognal wins <----------
    }
//check for row wins:
  var rowWins = (currentRow) => {
    var rowVals = [];
      for (let j = 0; j < 3 ; j++) {
        rowVals.push(currentRow.children[j].innerText);
      }
      if (rowVals[0] === 'X' && rowVals[1] === 'X' && rowVals[2] === 'X') {
        //disable clicking for all the cells
        disableClicking();
        console.log('X row wins');
      }  else if (rowVals[0] === 'O' && rowVals[1] === 'O' && rowVals[2] === 'O') {
        disableClicking();
        console.log('O row wins')

      }
  }
  //check for column wins:
  var columnWins = (col) => {
    var colVals = [];
    for (let i = 0; i < col.length ; i++) {
      colVals.push(col[i].innerText);
    }
    if (colVals[0] === 'X' && colVals[1] === 'X' && colVals[2] === 'X') {
      console.log('X column wins');
      disableClicking();
    } else if (colVals[0] === 'O' && colVals[1] === 'O' && colVals[2] === 'O') {
      console.log('O column wins');
    }

  }
  //check for diagnal wins:
  var diagnalWin = () => {
    console.log('hello from diagnal');
  }

//button reset

var resetButton = document.createElement("BUTTON");
var buttonText = document.createTextNode("Reset");
resetButton.appendChild(buttonText);
body.appendChild(resetButton);
//onClick reset button
resetButton.onclick = () => {
  //clear the count
  enableClicking()
  count = 0;
  //clear the table
  for (let i=0 ; i < cell.length ; i++) {
    cell[i].innerText = '';
  }
}

//for disable clicking

var disableClicking = () => {
  var square = $(".cell");
  for (let i = 0 ; i < square.length ; i++) {
    square[i].style.pointerEvents = 'none';
  }
}

var enableClicking = () => {
  var square = $(".cell");
  for (let i = 0 ; i < square.length ; i++) {
    square[i].style.pointerEvents = 'auto';
  }
}