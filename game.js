let board = ["","","","","","","","",""];
let playerTimer = 0;
let symbols = ["o", "x"]

function handleMove(position){

    if(board[position] == ""){
    board[position] = symbols[playerTimer];

    if (playerTimer == 0){
        playerTimer = 1;
    }else{
        playerTimer = 0;
    }
}}