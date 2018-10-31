function UserData(turnTotal, finalTotal) {
  this.turnTotal = turnTotal,
  this.finalTotal = finalTotal
}

UserData.prototype.diceRNG = function(max = 7, min = 1) {
  var diceRoll = Math.floor(Math.random() * (max - min)) + min;
  console.log(diceRoll); // Turn into something the user can see
  return this.turnTotal = diceRoll + this.turnTotal;
}


var newUser = new UserData(0, 0);

$(document).ready(function() {

});
