let button = document.querySelectorAll(".btn");
let reset = document.querySelector(".reset");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerX playerO

let winpattern = [
    [0, 3, 6],
    [0, 1, 2],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
const resetgame = () => {
    turnO = true;
    enableButtons();
    msgcontainer.classList.add("hide");

};

const disableButtons = () => {
    button.forEach((btn) => {
        btn.disabled = true;
    });
};

const enableButtons = () => {
    button.forEach((btn) => {
        btn.disabled = false;
        btn.innerText = "";
    });
};


const showwinner = (winner) => {
    msg.innerText = `congratulation, winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableButtons();
};

button.forEach((btn) => {
    btn.addEventListener("click", () => {
        console.log("djbsh");
        if (turnO === true) {
            btn.innerText = "O";
            turnO = false;
        }
        else {
            btn.innerText = "X";
            turnO = true;
        }
        btn.disabled = true;
        checkwinner();
    });

});
const checkwinner = () => {
    for (let pattern of winpattern) {
        let pos1val = button[pattern[0]].innerText;
        let pos2val = button[pattern[1]].innerText;
        let pos3val = button[pattern[2]].innerText;
        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("winner", pos1val);
                showwinner(pos1val);
            }
        }
    }
    let isDraw = true;

    button.forEach((btn) => {
        if (btn.innerText === "") {
            isDraw = false;
        }
    });

    if (isDraw) {
        msg.innerText = "It's a Draw!";
        msgcontainer.classList.remove("hide");
        disableButtons();
    }
};
reset.addEventListener("click", resetgame);