// back end logic
function Player(total, turn, score) {
  this.total = total,
  this.turn = turn,
  this.score = score
}
Player.prototype.roll = function() {
  return Math.floor(Math.random() * (6)+ 1);


  
}
Player.prototype.hold = function() {
  score += total;
  // if (total >= 100) {
  //   return
  // }
  

}

var player1 = new Player(0,true,0);
var player2 = new Player(0,false,0);



//  front end logic
$(document).ready(function() {
  $("#player1Hold").click(function() {
    $("#player2Roll").show();
    $("#player1Roll").hide();
    $("#player1Hold").hide();
  });
  $("#player2Hold").click(function() {
    $("#player1Roll").show();
    $("#player2Roll").hide();
    $("#player2Hold").hide();
  });
  $("#player1Roll").click(function() {
    var roll = player1.roll();
    $("#player1Rolls").append(roll + ", ");
    $("#player1Hold").show();
  });
  $("#player2Roll").click(function() {
    var roll = player2.roll();
    $("#player2Rolls").append(roll + ", ");
    $("#player2Hold").show();
  });
});