function UserData(turnTotal, finalTotal) {
  this.turnTotal = turnTotal,
  this.finalTotal = finalTotal
}

UserData.prototype.diceRNG = function(max = 7, min = 1) {
  return this.turnTotal = Math.floor(Math.random() * (max - min)) + min;
}


var newUser = new UserData(0, 0);

$(document).ready(function() {

});
