// 1 - Start enchant.js
enchant();
 
// 2 - On document load 
window.onload = function() {
	// 3 - Starting point
	var game = new Game(320, 440);
	// 4 - Preload resources
	game.preload('res/BG.png');
	// 5 - Game settings
	game.fps = 30;
	game.scale = 1;
	game.onload = function() {
		// 6 - Once Game finishes loading
		console.log("Hi, Ocean!");
	}
	// 7 - Start
	game.start();   
};