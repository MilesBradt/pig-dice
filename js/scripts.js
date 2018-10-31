function Player(turnTotal, finalTotal, id) {
  this.turnTotal = turnTotal,
  this.finalTotal = finalTotal,
  this.id = id
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
    this.id = 0;
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

var newPlayer1 = new Player(0, 0, 1);
var newPlayer2 = new Player(0, 0, 0);

$(document).ready(function() {
  $(".roll").click(function() {
    if (newPlayer1.id === 1) {
      $("#dice-roll1").text(newPlayer1.turnTotalHolder(newPlayer1.diceRNGRoll()));
      console.log(newPlayer1);
      if (newPlayer1.id === 0) {
        return newPlayer2.id = newPlayer2.id + 1;
      } else {
        $("#turn-total-view1").text("Turn total: " + newPlayer1.turnTotal);
        // document.getElementById('output').innerHTML = newPlayer1.diceRNGRoll();
      }
    }
    if (newPlayer2.id === 1) {
      $("#dice-roll2").text(newPlayer2.turnTotalHolder(newPlayer2.diceRNGRoll()));
      console.log(newPlayer1);
        if (newPlayer2.id === 0) {
          return newPlayer1.id = newPlayer1.id = 1;
        } else {
      $("#turn-total-view2").text("Turn total: " + newPlayer2.turnTotal);
      }
    }
  })

  $(".hold").click(function() {
    if (newPlayer1.id === 1) {
      newPlayer1.finalTotalHolder(this.turnTotal);
      $("#final-total-view1").text("Final Total: " + newPlayer1.finalTotal);
      newPlayer1.id = newPlayer1.id - 1;
      newPlayer2.id = newPlayer2.id + 1;
      $("#turn-total-view1").text("Turn total: " + newPlayer2.turnTotal);
    } else if (newPlayer2.id === 1) {
      newPlayer2.finalTotalHolder(this.turnTotal);
      $("#final-total-view2").text("Final Total: " + newPlayer2.finalTotal);
      newPlayer2.id = newPlayer2.id - 1;
      newPlayer1.id = newPlayer1.id = 1;
      $("#turn-total-view2").text("Turn total: " + newPlayer1.turnTotal);
    }
  })
});
