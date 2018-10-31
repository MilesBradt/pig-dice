function Player(turnTotal, finalTotal) {
  this.turnTotal = turnTotal,
  this.finalTotal = finalTotal
}

function PlayerLog() {
  this.players = [];
  this.currentId = 0;
}

PlayerLog.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

PlayerLog.prototype.arraysPlayers = function(player) {
  player.id = this.assignId();
  this.players.push(player);
}

Player.prototype.diceRNGRoll = function(max = 7, min = 1) {
  var diceRoll = Math.floor(Math.random() * (max - min)) + min;
  // Maybe make as a key to display in DOM
  console.log(diceRoll);
  return diceRoll;
}

// newPlayer.turnTotalHolder(newPlayer.diceRNGRoll());
Player.prototype.turnTotalHolder = function (diceRoll) {
  if (diceRoll === 1) {
    return this.turnTotal = 0;
  } else {
    this.turnTotal = diceRoll + this.turnTotal;
  }
}

// newPlayer.finalTotalHolder(this.turnTotal);
Player.prototype.finalTotalHolder = function() {
  // Ask about this line
  this.finalTotal = this.finalTotal + this.turnTotal;
  if (this.finalTotal >= 100) {
    alert("You won yay")
    // Possible prototype reset
    return this.finalTotal = 0;
  }
}

var playerLog = new PlayerLog();
var newPlayer1 = new Player(0, 0);
var newPlayer2 = new Player(0, 0);

$(document).ready(function() {
  $(".roll").click(function() {
    $(".output").text(newPlayer1.diceRNGRoll());
    // document.getElementById('output').innerHTML = newPlayer1.diceRNGRoll();
  })

});
