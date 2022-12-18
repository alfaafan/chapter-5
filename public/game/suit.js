// class permainan
class Game {
  constructor() {
    this.playerName;
    this.computerName;
    this.playerOption;
    this.computerOption;
    this.winner;
  }

  changeInfo(playerOption, computerOption) {
    const box = document.getElementById(`box`);
    const info = document.getElementById(`info`);
    let result = this.winCalculation(playerOption, computerOption);

    if (result == "Player 1 Win!") {
      box.classList.add("box");
      info.classList.add("info");
      info.innerHTML = result;
    } else if (result == "COM Win!") {
      box.classList.add("box");
      info.classList.add("info");
      info.innerHTML = result;
    } else {
      box.classList.add("draw-box");
      info.classList.add("info");
      info.innerHTML = result;
    }
  }

  winCalculation(playerOption, computerOption) {
    if (playerOption == computerOption) {
      return "Draw!";
    }
    if (playerOption == "batu") {
      return computerOption == "gunting" ? "Player 1 Win!" : "COM Win!";
    }
    if (playerOption == "kertas") {
      return computerOption == "batu" ? "Player 1 Win!" : "COM Win!";
    }
    if (playerOption == "gunting") {
      return computerOption == "kertas" ? "Player 1 Win!" : "COM Win!";
    }
  }

  #winnerIs(playerOption, computerOption) {
    if (this.winCalculation(playerOption, computerOption) == "Player 1 Win!") {
      return "Player 1";
    } else if (this.winCalculation(playerOption, computerOption) == "COM Win!") {
      return "Computer";
    } else {
      return "Draw";
    }
  }
}

class Player extends Game {
  constructor() {
    super();
  }

  get getPlayerOption() {
    return this.playerOption;
  }

  set setPlayerOption(option) {
    this.playerOption = option;
  }

  changeBackground() {
    const plOptions = document.getElementById("player-options");
    const playerBatu = document.getElementById("player-batu");
    const playerKertas = document.getElementById("player-kertas");
    const playerGunting = document.getElementById("player-gunting");

    plOptions.classList.add("no-cursor");

    if (this.playerOption == "batu") {
      playerBatu.classList.add("picked");
    } else if (this.playerOption == "kertas") {
      playerKertas.classList.add("picked");
    } else {
      playerGunting.classList.add("picked");
    }
  }
}

class Computer extends Game {
  constructor() {
    super();
  }

  get getComputerOption() {
    return this.computerOption;
  }

  set setComputerOption(option) {
    this.computerOption = option;
  }

  choose() {
    const options = ["batu", "kertas", "gunting"];
    const i = Math.floor(Math.random() * options.length);
    this.setComputerOption = options[i];
    return options[i];
  }

  changeBackground() {
    const comOptions = document.getElementById("computer-options");
    const comBatu = document.getElementById("com-batu");
    const comKertas = document.getElementById("com-kertas");
    const comGunting = document.getElementById("com-gunting");

    comOptions.classList.add("no-cursor");

    if (this.computerOption == "batu") {
      comBatu.classList.add("picked");
    } else if (this.computerOption == "kertas") {
      comKertas.classList.add("picked");
    } else {
      comGunting.classList.add("picked");
    }
  }
}

// run program
function pickOption(params) {
  const game = new Game();
  const player = new Player();
  const computer = new Computer();

  // get data
  player.setPlayerOption = params;
  computer.setComputerOption = computer.choose();

  // win calculation
  game.winCalculation(player.getPlayerOption, computer.getComputerOption);

  // change bg info
  player.changeBackground();
  computer.changeBackground();
  game.changeInfo(player.getPlayerOption, computer.getComputerOption);

  // check
  console.log(`Kamu memilih ` + player.getPlayerOption);
  console.log(`Computer memilih ` + computer.getComputerOption);
  console.log(game.winCalculation(player.getPlayerOption, computer.getComputerOption));
}

// refresh
const refresh = document.getElementById(`refresh`);

refresh.addEventListener("click", function () {
  window.location.reload();
});
