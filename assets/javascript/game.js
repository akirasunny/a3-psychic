var wins = 0;
var losses = 0;
var guesses = 9;
var letters = "abcdefghijklmnopqrstuvwxyz";
var index = Math.floor(Math.random() * (letters.length + 1));
var computerchoice = letters[index];
var sofar = "";
document.getElementById("guesses").textContent = guesses;
console.log(computerchoice);


document.onkeyup = function(event) {

	function reset () {
		guesses = 9;
		document.getElementById("guesses").textContent = guesses;
		var index = Math.floor(Math.random() * (letters.length + 1));
		var computerchoice = letters[index];
		sofar = "";
		document.getElementById("sofar").textContent = sofar;
	}

	if (event.keyCode > 64 && event.keyCode < 91) {
		guesses -= 1;
		document.getElementById("guesses").textContent = guesses;
		sofar = sofar + event.key + " ";
		document.getElementById("sofar").textContent = sofar;

		if (event.key === computerchoice && guesses >= 0) {
			wins += 1;
			document.getElementById("wins").textContent = wins;
			reset();
		}

		else if (event.key !== computerchoice && guesses < 0) {
			losses += 1;
			document.getElementById("losses").textContent = losses;
			reset();
		}

	}
}