let board = ["", "", "", "", "", "", "", "", ""];
let playerTimer = 0;
let symbols = ["o", "x"]
let gameOver = false;
var cont = 0;
var ptsPlayer1 = 0;
var ptsPlayer2 = 0;
verificador = true;
   
var playerWin = []

let winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];



function handleMove(position) {
    if (gameOver) {
        return;
    }
    if (board[position] == "") {
        board[position] = symbols[playerTimer];

        gameOver = isWin();

            if (!gameOver) {
                cont += 1;
                if (cont == 9){

                    let win = document.getElementById("player-win")
                    win.innerHTML = "<h3>O jogo ficou EMPATADO!";
                    win.style.display = "inline-block";
                }
                
               if (playerTimer == 0){
                   playerTimer = 1;
               }else{
                   playerTimer = 0;
               };
         }
    }
    return gameOver;
}


function isWin() {


    for (let i = 0; i < winStates.length; i++) {
        let seq = winStates[i];

        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];

        if (board[pos1] == board[pos2] &&
            board[pos1] == board[pos3] &&
            board[pos1] != ""  ) {
            
                return true;
                
            }
            
            
    }
    
    
    return false;
}


