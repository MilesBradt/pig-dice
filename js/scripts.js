function Player(turnTotal, finalTotal, id) {
  this.turnTotal = turnTotal,
  this.finalTotal = finalTotal,
  this.id = id
}

Player.prototype.diceRNGRoll = function(max = 7, min = 1) {
  var diceRoll = Math.floor(Math.random() * (max - min)) + min;
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
      var diceRoll = newPlayer1.turnTotalHolder(newPlayer1.diceRNGRoll())
      $("#dice-roll1").text(diceRoll);
      if (diceRoll === 1) {
        $("#player1Rolled1").fadeIn(800, "linear");
        $("#player1Rolled1").fadeOut(800, "linear");
      }
      console.log(newPlayer1);
      if (newPlayer1.id === 0) {
        $("#turn-total-view1").text(newPlayer1.turnTotal);
        return newPlayer2.id = newPlayer2.id + 1;
      } else {
        $("#turn-total-view1").text(newPlayer1.turnTotal);
        // document.getElementById('output').innerHTML = newPlayer1.diceRNGRoll();
      }
    }
    if (newPlayer2.id === 1) {
      var diceRoll = newPlayer2.turnTotalHolder(newPlayer2.diceRNGRoll())
      $("#dice-roll2").text(diceRoll);
      if (diceRoll === 1) {
        $("#player2Rolled1").fadeIn(800, "linear");
        $("#player2Rolled1").fadeOut(800, "linear");
      }
      console.log(newPlayer1);
        if (newPlayer2.id === 0) {
          $("#turn-total-view2").text(newPlayer2.turnTotal);
          return newPlayer1.id = newPlayer1.id = 1;
        } else {
      $("#turn-total-view2").text(newPlayer2.turnTotal);
      }
    }
  })

  $(".hold").click(function() {
    if (newPlayer1.id === 1) {
      newPlayer1.finalTotalHolder(this.turnTotal);
      $("#final-total-view1").text(newPlayer1.finalTotal);
      newPlayer1.id = newPlayer1.id - 1;
      newPlayer2.id = newPlayer2.id + 1;
      $("#turn-total-view1").text(newPlayer2.turnTotal);
      $("#player1Rolled1").fadeIn(800, "linear");
      $("#player1Rolled1").fadeOut(800, "linear");
    } else if (newPlayer2.id === 1) {
      newPlayer2.finalTotalHolder(this.turnTotal);
      $("#final-total-view2").text(newPlayer2.finalTotal);
      newPlayer2.id = newPlayer2.id - 1;
      newPlayer1.id = newPlayer1.id = 1;
      $("#player2Rolled1").fadeIn(800, "linear");
      $("#player2Rolled1").fadeOut(800, "linear");
      $("#turn-total-view2").text(newPlayer1.turnTotal);
    }
  })
});
