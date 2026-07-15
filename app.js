let boxes = document.querySelectorAll(".box");
let newbttn = document.querySelector("#new-game");
let resetbttn = document.querySelector("#reset");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");


let currTurn = true;
let count = 0;

const winnerPattan = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];


const resetGame = () =>{
    currTurn = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
}


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (currTurn) {
            box.innerText = "O";
            currTurn = false;
        } else {
            box.innerText = "X";
            currTurn = true;
        }
        box.disabled = true;
        count++;
        let res = checkWinner();

        if(count === 9 && !res){
            gameDraw();
        }
    })
})


const gameDraw = () =>{
    msg.innerText = `Game was a Draw.`
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}


const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}


const showWinner = (winner)=>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}


const checkWinner = () => {
    for (let win of winnerPattan) {
        let positon1 = boxes[win[0]].innerText;
        let positon2 = boxes[win[1]].innerText;
        let positon3 = boxes[win[2]].innerText;

        if (positon1 != "" && positon2 != "" && positon3 != "") {
            if (positon1 === positon2 && positon2 === positon3) {
                showWinner(positon1);
                return true;
            }
        }
    }
};

resetbttn.addEventListener("click",resetGame);
newbttn.addEventListener("click",resetGame);