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
var newPlayerCPU = new Player(0, 0);

$(document).ready(function() {
  $(".roll").click(function() {
    if (newPlayer1.id === 1) {
      var diceRoll = newPlayer1.turnTotalHolder(newPlayer1.diceRNGRoll())
      $("#dice-roll1").text(diceRoll);
      if (diceRoll === 1) {
        $(".player2").addClass("player2Glow");
        $(".player1").removeClass("player1Glow");
        $("#player2Rolled1").fadeIn(800, "linear");
        $("#player2Rolled1").fadeOut(400, "linear");
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
        $(".player1").addClass("player1Glow");
        $(".player2").removeClass("player2Glow");
        $("#player1Rolled1").fadeIn(800, "linear");
        $("#player1Rolled1").fadeOut(400, "linear");
      }
      console.log(newPlayer1);
      if (newPlayer2.id === 0) {
        $("#turn-total-view2").text(newPlayer2.turnTotal);
        return newPlayer1.id = newPlayer1.id = 1;
      } else {
        $("#turn-total-view2").text(newPlayer2.turnTotal);
      }
    }
  });

  $(".CPU").click(function(){
    $(".rollCPU").toggle();
    $(".cpuOutput").toggle();
    $(".playerCPU").toggle();
    $(".rollCPU").show();
    $(".hold").toggle();
    $(".holdCPU").toggle();
    $(".player2").toggle();
    $(".player2Output").toggle();
    $(".roll").hide();
  });

  $(".rollCPU").click(function() {
    var diceRoll = newPlayer1.turnTotalHolder(newPlayer1.diceRNGRoll())
    $("#dice-roll1").text(diceRoll);
    $("#turn-total-view1").text(newPlayer1.turnTotal);
    if (diceRoll === 1) {
      $(".player2").addClass("player2Glow");
      $(".player1").removeClass("player1Glow");
    }
    console.log(newPlayer1);
    if (newPlayer1.id === 0) {
      $("#turn-total-view1").text(newPlayer1.turnTotal);
      var diceRoll = newPlayerCPU.turnTotalHolder(newPlayerCPU.diceRNGRoll())
      console.log("CPU Roll: " + diceRoll);
      $("#cpuRoll1").text(diceRoll)
      console.log(newPlayerCPU.turnTotal);
      $("#dice-rollCPU").text(diceRoll);
      if (diceRoll === 1) {
        $(".playerCPU").addClass("playerCPUGlow");
        $(".player1").removeClass("player1Glow");
        return newPlayer1.id = newPlayer1.id + 1;
      } else {
        var diceRoll = newPlayerCPU.turnTotalHolder(newPlayerCPU.diceRNGRoll())
        console.log("CPU Roll 2: " + diceRoll);
        $("#cpuRoll2").text(diceRoll)
        $("#turn-total-viewCPU").text(newPlayerCPU.turnTotal);
        console.log(newPlayerCPU.turnTotal);
        newPlayerCPU.finalTotalHolder(newPlayerCPU.turnTotal);
        console.log(newPlayerCPU.finalTotal);
        $("#final-total-viewCPU").text(newPlayerCPU.finalTotal);
        $("#dice-rollCPU").text(diceRoll);
        $(".playerCPU").addClass("playerCPUGlow");
        $(".player1").removeClass("player1Glow");
        return newPlayer1.id = newPlayer1.id + 1;
      }
    }
  });

  $(".hold").click(function() {
    if (newPlayer1.id === 1) {
      newPlayer1.finalTotalHolder(this.turnTotal);
      $("#final-total-view1").text(newPlayer1.finalTotal);
      newPlayer1.id = newPlayer1.id - 1;
      newPlayer2.id = newPlayer2.id + 1;
      $("#turn-total-view1").text(newPlayer2.turnTotal);
      $(".player2").addClass("player2Glow")
      $(".player1").removeClass("player1Glow")
      $("#player2Rolled1").fadeIn(800, "linear");
      $("#player2Rolled1").fadeOut(400, "linear");
      if (newPlayer1.finalTotal >= 100) {
        newPlayer1.finalTotal = 0;
        newPlayer2.finalTotal = 0;
        $("#turn-total-view1").text(newPlayer1.turnTotal);;
        $("#final-total-view1").text(newPlayer1.finalTotal);
        $("#final-total-view2").text(newPlayer2.finalTotal);
        $("#dice-roll1").text("Winner");
        $("#dice-roll2").text("Loser");
        $(".player1").addClass("player1Glow");
        $(".player2").removeClass("player2Glow");
        newPlayer1.id = 1
        newPlayer2.id = 0
      }
    } else if (newPlayer2.id === 1) {
      newPlayer2.finalTotalHolder(this.turnTotal);
      $("#final-total-view2").text(newPlayer2.finalTotal);
      newPlayer2.id = newPlayer2.id - 1;
      newPlayer1.id = newPlayer1.id = 1;
      $(".player1").addClass("player1Glow");
      $(".player2").removeClass("player2Glow");
      $("#player1Rolled1").fadeIn(800, "linear");
      $("#player1Rolled1").fadeOut(400, "linear");
      $("#turn-total-view2").text(newPlayer1.turnTotal);
      newPlayer1.id = 1
      newPlayer2.id = 0
      if (newPlayer2.finalTotal >= 100) {
        newPlayer1.finalTotal = 0;
        newPlayer2.finalTotal = 0;
        $("#turn-total-view2").text(newPlayer2.turnTotal);;
        $("#final-total-view1").text(newPlayer1.finalTotal);
        $("#final-total-view2").text(newPlayer2.finalTotal);
        $("#dice-roll2").text("Winner");
        $("#dice-roll1").text("Loser");
        newPlayer1.id = 1
        newPlayer2.id = 0
      }
    }
  });

  $(".holdCPU").click(function() {
    if (newPlayer1.id === 1) {
      newPlayer1.finalTotalHolder(this.turnTotal);
      $("#final-total-view1").text(newPlayer1.finalTotal);
      newPlayer1.id = 0;
      if (newPlayer1.id === 0) {
        $("#turn-total-view1").text(newPlayer1.turnTotal);
        var diceRoll = newPlayerCPU.turnTotalHolder(newPlayerCPU.diceRNGRoll())
        $("#cpuRoll1").text(diceRoll)
        $("#dice-rollCPU").text(diceRoll);
        if (diceRoll === 1) {
          $(".playerCPU").addClass("playerCPUGlow");
          $(".player1").removeClass("player1Glow");
          return newPlayer1.id = newPlayer1.id + 1;
        } else {
          var diceRoll = newPlayerCPU.turnTotalHolder(newPlayerCPU.diceRNGRoll())
          $("#cpuRoll2").text(diceRoll)
          $("#turn-total-viewCPU").text(newPlayerCPU.turnTotal);
          console.log(newPlayerCPU.turnTotal);
          newPlayerCPU.finalTotalHolder(newPlayerCPU.turnTotal);
          console.log(newPlayerCPU.finalTotal);
          $("#final-total-viewCPU").text(newPlayerCPU.finalTotal);
          $("#dice-rollCPU").text(diceRoll);
          $(".playerCPU").addClass("playerCPUGlow");
          $(".player1").removeClass("player1Glow");
          return newPlayer1.id = newPlayer1.id + 1;
        }
      }
    }
  });
});
