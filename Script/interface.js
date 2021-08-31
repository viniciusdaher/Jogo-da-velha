document.addEventListener("DOMContentLoaded", () =>{
    let squares = document.querySelectorAll(".square");

    squares.forEach(square => {
        square.addEventListener("click", handleClick);
    })
})

function handleClick(event){
    // console.log(event.target);

    let square = event.target;
    let position = square.id;

    if (handleMove(position)){
        
        let win = document.getElementById("player-win")
        win.innerHTML = "<h3>" + playerWin[playerTimer] + " É o vencedor(a) da rodada!";
        win.style.display = "inline-block";
        
    }
    if (gameOver && verificador == true){
    
        if (playerTimer == 0){
            
            ptsPlayer1 += 1;

            placar.innerHTML = "<h2> Pontos </h2>" + playerWin[0] + "   -  " + ptsPlayer1 + " Pts<br>" + 
            playerWin[1] + "   -  " + ptsPlayer2 + " Pts";
            verificador = false

        }else{

            ptsPlayer2 += 1;

            placar.innerHTML = "<h2> Pontos </h2>" + playerWin[0] + "   -  " + ptsPlayer1 + " Pts<br>" + 
            playerWin[1] + "   -  " + ptsPlayer2 + " Pts";
            verificador = false

        }
        
    }
    updateSquares(position);  
}




function updateSquares(position){
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class=${symbol}></div>`
   
}

let play = document.getElementById("play");
play.addEventListener("click", playGo);


function playGo(){
    let player1 = document.getElementById("player1").value;
    let player2 = document.getElementById("player2").value;
    
    playerWin.push(player1);
    playerWin.push(player2);

    let placar = document.getElementById("placar");
    placar.innerHTML = "<h2> Pontos </h2>" + playerWin[0] + "   -  " + ptsPlayer1 + " Pts <br>" + 
    playerWin[1] + "   -  " + ptsPlayer2 + " Pts";

    let menu = document.querySelector(".menu").style.
    animation = "opacity 1s forwards";

    setTimeout(() => {
        
        document.querySelector(".menu").style.display = "none"
       
    
    }
        , 800);
    
    

    
}

function restart(){
    board = ["", "", "", "", "", "", "", "", ""];
    gameOver = false;
    playerTimer = 0;
    cont = 0;
    verificador = true;
    
    let squares = document.querySelectorAll(".square");
    let win = document.getElementById("player-win");
    win.style.display = "none"

    squares.forEach((square) => {
        square.innerHTML = "";


    })
}