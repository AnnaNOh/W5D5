const readline = require('readline');
const reader = readline.createInterface({
  input:process.stdin,
  output: process.stdout
});


class Game {
  run() {

    // unitl all blocks are stacked in another column
    // get a move from the player
    // make the move on the board
  }

  constructor () {
    this.stacks = [ [3, 2, 1], [], [] ];
  }

  promptMove (cb) {
    console.log(this.stacks);
    reader.question("Which tower do you want to take from", function (startTowerIdx) {
      const startIdx = parseInt(startTowerIdx);
      reader.question("Which tower do you want to add to", function (endTowerIdx) {
        const endIdx = parseInt(endTowerIdx);
        cb(startIdx, endIdx);
      });
    });

  }


}
