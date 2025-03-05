let score;
let increment;

const selectPokemon = (choice) => {
    const selectedPokemon = choice;
	console.log(selectedPokemon);
	const popup = document.getElementById("initPopup");
	popup.style.display = "none";

	const finalImg = document.getElementById("poke");
	if(selectedPokemon === "Pikachu") {
		finalImg.style.background = "url(\"assets/images/pikachu_transparent.png\")";
	} else if(selectedPokemon === "Charmander") {
		finalImg.style.background = "url(\"assets/images/charmander_transparent.png\")";
	} else {
		finalImg.style.background = "url(\"assets/images/bulbasaur_transparent.png\")";
	}
	finalImg.style.backgroundSize = "contain";
	finalImg.style.transform = "scale(0.8)";
	finalImg.style.backgroundRepeat = "no-repeat";

	document.getElementById('trick').click();

}

const pokeClick = (ev) => {
	updateScore();
}

const updateScore = () => { 
	score += increment //Placeholder
	document.getElementById("score").textContent = score;
	console.log(score);
}

let recieved = function () { };
function waitForChange() {
	return new Promise(resolve => {
		recieved = function () {
			resolve();
		}
	});
}

document.body.onload = async () => {
	await waitForChange();
	score = 0;
	increment = 1;
	console.log("chosen");

}