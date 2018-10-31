function Player(turnTotal, finalTotal) {
  this.turnTotal = turnTotal,
  this.finalTotal = finalTotal
}

Player.prototype.diceRNGRoll = function(max = 7, min = 1) {
  var diceRoll = Math.floor(Math.random() * (max - min)) + min;
  console.log(diceRoll); // Turn into something the user can see
  return diceRoll;
}

Player.prototype.turnTotalHolder = function (diceRoll) {
  return this.turnTotal = diceRoll + this.turnTotal;
}

var newPlayer = new Player(0, 0);

$(document).ready(function() {

});
