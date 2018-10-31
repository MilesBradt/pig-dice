function Player(turnTotal, finalTotal) {
  this.turnTotal = turnTotal,
  this.finalTotal = finalTotal
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
    // possible prototype reset
    return this.finalTotal = 0;
  }
}

var newPlayer = new Player(0, 99);

$(document).ready(function() {

});
