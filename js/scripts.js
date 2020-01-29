// back end logic
function Player(turnTotal, score) {
  this.turnTotal = turnTotal,
  this.score = score
}
Player.prototype.roll = function() {
  return Math.floor(Math.random() * (6)+ 1);
}

Player.prototype.check = function() {
  if (this.turnTotal.includes(1, (this.turnTotal.length-1))) {
    this.turnTotal = [0];
    this.hold();
  }
}

Player.prototype.hold = function() {
  for (var i = 0; i < this.turnTotal.length; i ++) {
    this.score += this.turnTotal[i];
  }
  if (this.score >= 100) {
   alert("You win!");
  }
  return this.score;
}
var player1 = new Player([],0);
var player2 = new Player([],0);



//  front end logic
$(document).ready(function() {
  $("#player1Hold").click(function() {
    var results = player1.hold();
    $("#player2Roll").show();
    $("#player1Roll").hide();
    $("#player1Hold").hide();
    $("#player1Score").text(results);
    $("#player2Rolls").text("");
  });
  $("#player2Hold").click(function() {
    var results = player2.hold();
    $("#player1Roll").show();
    $("#player2Roll").hide();
    $("#player2Hold").hide();
    $("#player2Score").text(results);
    $("#player1Rolls").text("");
  });
  $("#player1Roll").click(function() {
    var roll = player1.roll();
    player1.turnTotal.push(roll);
    player1.check();
    $("#player1Rolls").append(roll + ", ");
    $("#player1Hold").show();
  });
  $("#player2Roll").click(function() {
    var roll = player2.roll();
    player2.turnTotal.push(roll);
    player2.check();
    $("#player2Rolls").append(roll + ", ");
    $("#player2Hold").show();
  });
});