$(document).ready(function(){ 
	console.clear();
 
function rando(min, max) {

	return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

var randoGoal = rando (19, 120);
$("#goal").text(randoGoal)


var wins = 0;
var losses = 0;

function playGame(){

var tally = 0;

var arsenalVal = rando(1, 12);
var chelseaVal = rando(1, 12);
var liverpoolVal = rando(1, 12);
var manUVal = rando(1, 12);	

console.log(arsenalVal);
console.log(chelseaVal);
console.log(liverpoolVal);
console.log(manUVal);

$(".teams").on("click", function(){
	console.log("scoore")

// 	$('a.pagerlink').click(function() { 
//     var id = $(this).attr('id');
//     $container.cycle(id.replace('#', '')); 
//     return false; 
// });
	var id = $(this).attr('id');

	if(id === "arsenal"){
		tally = tally+arsenalVal;
		$("#tally").text(tally);
		checkWin();
	}
	else if(id === "chelsea"){
		tally = tally+chelseaVal;
		$("#tally").text(tally);
		checkWin();
	}
	else if(id === "liverpool"){
		tally = tally+liverpoolVal;
		$("#tally").text(tally);
		checkWin();
	}
	else if(id === "manU"){
		tally = tally+manUVal;
		$("#tally").text(tally);
		checkWin();
	}
})

	function checkWin(){
		if(tally < randoGoal){
			return;
			//keep on playing
		}
		// determin if won/game over
		else {
			if(tally === randoGoal){
				wins++;
				$("#wins").text(wins);
				reset();	
			}
			else {
			losses++;
			$("#losses").text(losses);
			reset();
			}	
		}
		
	}
function reset() {
	randoGoal = rando (19, 120);
	tally = 0;
	arsenalVal = rando(1, 12);
	chelseaVal = rando(1, 12);
	liverpoolVal = rando(1, 12);
	manUVal = rando(1, 12);
	console.log(arsenalVal);
	console.log(chelseaVal);
	console.log(liverpoolVal);
	console.log(manUVal);
	$("#tally").text(tally);
	$("#goal").text(randoGoal)


// body...
}
	
}

playGame();
 	






















































});