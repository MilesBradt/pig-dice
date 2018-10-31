function Player(turnTotal, finalTotal, id) {
  this.turnTotal = turnTotal,
  this.finalTotal = finalTotal,
  this.id = id
}

// function PlayerLog() {
//   this.players = [];
//   this.currentId = 0;
// }

// PlayerLog.prototype.assignId = function() {
//   this.currentId += 1;
//   return this.currentId;
// }
//
// PlayerLog.prototype.arraysPlayers = function(player) {
//   player.id = this.assignId();
//   this.players.push(player);
// }

Player.prototype.diceRNGRoll = function(max = 7, min = 1) {
  var diceRoll = Math.floor(Math.random() * (max - min)) + min;
  // Maybe make as a key to display in DOM
  console.log("Dice roll: " + diceRoll);
  return diceRoll;
}

// newPlayer.turnTotalHolder(newPlayer.diceRNGRoll());
Player.prototype.turnTotalHolder = function (diceRoll) {
  if (diceRoll === 1) {
    this.turnTotal = 0;
    return 1;
  } else {
    this.turnTotal = diceRoll + this.turnTotal;
    return diceRoll;
  }
}

// newPlayer.finalTotalHolder(this.turnTotal);
Player.prototype.finalTotalHolder = function() {
  // Ask about this line
  this.finalTotal = this.finalTotal + this.turnTotal;
  this.turnTotal = 0;
  console.log(this.turnTotal);
  if (this.finalTotal >= 100) {
    alert("You won yay")
    // Possible prototype reset
    return this.finalTotal = 0;
  }
}

// var playerLog = new PlayerLog();
var newPlayer1 = new Player(0, 0, 1);
var newPlayer2 = new Player(0, 0, 0);

$(document).ready(function() {
  $(".roll").click(function() {
    if (newPlayer1.id === 1) {
      $("#dice-roll-1").text(newPlayer1.turnTotalHolder(newPlayer1.diceRNGRoll()));
      console.log(newPlayer1);
      $("#turn-total-view1").text("Turn total: " + newPlayer1.turnTotal);
      // document.getElementById('output').innerHTML = newPlayer1.diceRNGRoll();
    } else if (newPlayer2.id === 1) {
      $("#dice-roll-2").text(newPlayer2.turnTotalHolder(newPlayer2.diceRNGRoll()));
      console.log(newPlayer1);
      $("#turn-total-view2").text("Turn total: " + newPlayer2.turnTotal);
    }
  })


  $(".hold").click(function() {
    if (newPlayer1.id === 1) {
      newPlayer1.finalTotalHolder(this.turnTotal);
      $("#final-total-view1").text("Final Total: " + newPlayer1.finalTotal);
      newPlayer1.id = newPlayer1.id - 1;
      console.log(newPlayer1.id);
      newPlayer2.id = newPlayer2.id + 1;
      return console.log("player 2: " + newPlayer2.id + "player 1: " + newPlayer1.id);
    } else if (newPlayer2.id === 1) {
      newPlayer2.finalTotalHolder(this.turnTotal);
      $("#final-total-view2").text("Final Total: " + newPlayer2.finalTotal);
      newPlayer2.id = newPlayer2.id - 1;
      console.log(newPlayer2.id);
      newPlayer1.id = newPlayer1.id + 1;
      return console.log("player 1: " + newPlayer1.id + "player 2: " + newPlayer2.id);
    }
  })
});
