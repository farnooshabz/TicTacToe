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

//game name

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
        winner('X');
      }  else if (rowVals[0] === 'O' && rowVals[1] === 'O' && rowVals[2] === 'O') {
        disableClicking();
        winner('O');

      }
  }
  //check for column wins:
  var columnWins = (col) => {
    var colVals = [];
    for (let i = 0; i < col.length ; i++) {
      colVals.push(col[i].innerText);
    }
    if (colVals[0] === 'X' && colVals[1] === 'X' && colVals[2] === 'X') {
      winner('X');
      disableClicking();
    } else if (colVals[0] === 'O' && colVals[1] === 'O' && colVals[2] === 'O') {
      winner('O');
    }

  }
  //check for diagnal wins:
  var diagnalWin = () => {
    var rows  = $(".table-row");
    var rowVals = [];
    for (let i = 0; i < 3; i++) {
      var currentRow = rows[i];
      for (let j = 0; j < 3 ; j++) {
        rowVals.push(currentRow.children[j].innerText);
      }
    }
    if(rowVals[0] === 'X' && rowVals[4]==='X' && rowVals[8]==='X') {
      winner('X');
      disableClicking();
    }
    if(rowVals[0] === 'O' && rowVals[4]==='O' && rowVals[8]==='O') {
      winner('O');
      disableClicking();
    }
    if (rowVals[2] === 'X' && rowVals[4]==='X' && rowVals[6]==='X') {
      winner('X');
      disableClicking();
    }
    if (rowVals[2] === 'O' && rowVals[4]==='O' && rowVals[6]==='O') {
      winner('O');
      disableClicking();
    }
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
  winner('draw');
  count = 0;
  //clear the table
  for (let i=0 ; i < cell.length ; i++) {
    cell[i].innerText = '';
  }

}
//announce the winner:
var winner = (name) => {
  if (name.length === 0) {
    var winner = document.getElementsByClassName("winner");
    winner[0].remove();
    return;
  }
  // const heading = document.getElementsByClassName("winner");
  // const heading_text = document.createTextNode(`Our Winner is ${name}`);
  // heading.appendChild(heading_text);
  // document.body.appendChild(heading);
  // var winner = document.getElementsByClassName("winner");
  var winner = document.createElement("div");
  winner.className += "winner";
  var content = document.createTextNode(`Our Winner is ${name}`);
  winner.appendChild(content);
  document.body.appendChild(winner);

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