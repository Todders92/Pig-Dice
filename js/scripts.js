// back end logic
function Player(player, turnTotal, score) {
  this.player = player,
  this.turnTotal = turnTotal,
  this.score = score
}

var player1 = new Player("Player 1",[],0);
var player2 = new Player("Player 2",[],0);

Player.prototype.roll = function() {
  return Math.floor(Math.random() * (6)+ 1);
}

Player.prototype.check = function() {
  if (this.turnTotal.includes(1)) {
    this.turnTotal = [0];
    endTurn();
  }
}

Player.prototype.hold = function() {
  for (var i = 0; i < this.turnTotal.length; i ++) {
    this.score += this.turnTotal[i];
  }
  this.speak();
  this.turnTotal.splice(0,this.turnTotal.length);
  if (this.score >= 100) {
   this.winner();
   alert(this.player + " wins!")
  }
  return this.score;
}

Player.prototype.speak = function() {
  $("#output").prepend("<li>" + this.player + " held, adding " + this.turnTotal + " to their score </li>");
}

Player.prototype.winner = function() {
  $("#output").prepend("<li>" + this.player + " has scored 100 points and wins the game!!!");
}

//  front end logic
var endTurn = function() {
  $("#player1Roll").hide();
  $("#player2Roll").hide();
};

$(document).ready(function() {
  $("#player1Hold").click(function() {
    var results = player1.hold();
    $("#player2Roll").show();
    $("#player1Roll").hide();
    $("#player1Hold").hide();
    $("#player1Score").text(results);
    $("#player1Rolls").text("");
  });
  $("#player2Hold").click(function() {
    var results = player2.hold();
    $("#player1Roll").show();
    $("#player2Roll").hide();
    $("#player2Hold").hide();
    $("#player2Score").text(results);
    $("#player2Rolls").text("");
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
