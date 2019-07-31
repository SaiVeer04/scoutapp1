


var one  = document.getElementById("one")
var two  = document.getElementById("two")
var three  = document.getElementById("freefree")
var four  = document.getElementById("four")
var five  = document.getElementById("five")
var search = document.getElementById("search")
var searchbtn = document.getElementById("searchbtn")
var submit = document.getElementById("submit")

var ref = firebase.database().ref('players/');


submit.addEventListener("click", function() {
  var oneD = one.value;
  var twoD = two.value;
  var threeD = three.value;
  var fourD = four.value;
  var fiveD = five.value;


  var secRef = firebase.database().ref('players/'+oneD);
  secRef.set ({
      name: twoD,
      Auto: threeD,
      TeleOp: fourD,
      Endgame: fiveD
  });
});
searchbtn.addEventListener("click", function() {
  firebase.database().ref().on("value", function(snapshot) {
   console.log(snapshot.val());
}, function (error) {
   console.log("Error: " + error.code);
});
  });
