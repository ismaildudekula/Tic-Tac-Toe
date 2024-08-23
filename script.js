let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let winnerMsg = document.querySelector("#msg");
let msContainer = document.querySelector(".msg-container");


let turnO = true;
let count = 0;

const winPatterns = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
];

const disableBoxes = () => {
    boxes.forEach((box) =>{
        box.disabled = true;
    });
};

const enableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    });
};

function showWinner(winner){
    winnerMsg.innerText = `Congratulations, Winner ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}


function checkWinner(){
    for(let pattern of winPatterns){
        posVal1 = boxes[pattern[0]-1].innerText;
        posVal2 = boxes[pattern[1]-1].innerText;
        posVal3 = boxes[pattern[2]-1].innerText;

        if(posVal1 != "" && posVal2 != "" && posVal3 != ""){
            if( posVal1 === posVal2 && posVal2 === posVal3){
                showWinner(posVal1);
                return true;
            }
        }
    }
}

const resetgame = () => {
    enableBoxes();
    turnO = true;
    count = 0;
    msgContainer.classList.add("hide");
};

const gameDraw = () =>{
    winnerMsg.innerText = "It's Draw!";
    msContainer.classList.remove("hide");
    disableBoxes();
};


boxes.forEach( (box) =>{
    box.addEventListener("click", () => {
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
        count++;
        let iswinner = checkWinner();
        if(count == 9 && !iswinner){
            gameDraw();
        }
    });
});

resetBtn.addEventListener("click",resetgame);
newBtn.addEventListener("click",resetgame);


