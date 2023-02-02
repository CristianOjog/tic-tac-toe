let cellRef = document.querySelectorAll(".cell-option");
let newGamePopup = document.querySelector(".new-game-popup");
let newGameBtn = document.getElementById("new-game");
let message = document.getElementById("message");

let allWinningPattern = [[0, 1, 2], [0, 3, 6], [2, 5, 8], [6, 7, 8], [3, 4, 5], [1, 4, 7], [0, 4, 8], [2, 4, 6]];
let isXturn = true;
let countClickedCells = 0;

function disableAllBtns() {
    cellRef.forEach((cell) => (cell.disabled = true));
    newGamePopup. classList.remove("hide"); 
}

function enableAllBtns() {
    cellRef.forEach((cell) => {
        cell.disabled = false;
        cell.innerText = "";
    });
    newGamePopup.classList.add("hide");
}

function gameEndDraw() {
    disableAllBtns();
    message.innerText = "The game ended in a draw";
}

function gameWinner(letter) {
    disableAllBtns();
    if (letter === "X") {
        message.innerText = "Winner is X";
    } else {
        message.innerText = "Winner is 0";
    }
}

function checkWinner() {
    for (let pattern of allWinningPattern) {
        let [cell1, cell2, cell3] = [
            cellRef[pattern[0]].innerText, 
            cellRef[pattern[1]].innerText, 
            cellRef[pattern[2]].innerText,
        ];
        if (cell1 !== "" && cell2 !== "" && cell3 !== "") {
            if (cell1 === cell2 && cell2 === cell3) {
                gameWinner(cell1);
            }
        }
    }
}

function startNewGame() {
    isXturn = true;
    countClickedCells = 0;
    enableAllBtns();
}

function displayXand0(event) {
    let clickedCell = event.target;
    if (isXturn) {
        isXturn = false;
        clickedCell.innerText = "X";
    } else {
        isXturn = true;
        clickedCell.innerText = "0";
    }
    clickedCell.disabled = true;
    ++countClickedCells;
    if (countClickedCells === 9) {
        gameEndDraw();
    }
    checkWinner();
}