document.addEventListener("DOMContentLoaded", () =>{
    let squares = document.querySelectorAll(".square");

    squares.forEach(square => {
        square.addEventListener("click", handleClick);
    })
})

player1 = "vinicius"
function handleClick(event){
    console.log(event.target);

    let square = event.target;
    let position = square.id;

    if (handleMove(position)){
        let win = document.getElementById("player-win")
        win.innerHTML = "<h3>" + playerWin[playerTimer] + " é o vencedor da rodada!";
        win.style.display = "inline-block";
    }
    
    updateSquares(position);  
}

function updateSquares(position){
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class=${symbol}></div>`
}