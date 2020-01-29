// back end logic


//  front end logic
$(document).ready(function() {
  $("#player1Hold").click(function() {
    $("#player2Roll").show();
    $("#player2Hold").show();
    $("#player1Roll").hide();
    $("#player1Hold").hide();
  });
  $("#player2Hold").click(function() {
    $("#player1Roll").show();
    $("#player1Hold").show();
    $("#player2Roll").hide();
    $("#player2Hold").hide();
  });
});