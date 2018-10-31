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

var playerLog = new PlayerLog();
var newPlayer1 = new Player(0, 0);
var newPlayer2 = new Player(0, 0);

$(document).ready(function() {
  $(".roll").click(function() {
    $("#dice-roll").text(newPlayer1.turnTotalHolder(newPlayer1.diceRNGRoll()));
    console.log(newPlayer1);
    $("#turn-total-view").text("Turn total: " + newPlayer1.turnTotal);
    // document.getElementById('output').innerHTML = newPlayer1.diceRNGRoll();
  })

  $(".hold").click(function() {
    newPlayer1.finalTotalHolder(this.turnTotal);
    
    $("#final-total-view").text("Final Total: " + newPlayer1.finalTotal);
  })
});
