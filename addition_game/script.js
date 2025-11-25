let numberContainerA = document.getElementById("firstNumber");
let numberContainerB = document.getElementById("secondNumber");
let ans = document.getElementById("userInput");
let r = document.getElementById("gameResult");

let ap = "Congratulations! You got it right";
let at = "Please Try Again!";

function restartGame() {
    let aNo = Math.ceil(Math.random() * 100);
    let bNo = Math.ceil(Math.random() * 100);

    numberContainerA.textContent = aNo;
    numberContainerB.textContent = bNo;
    r.textContent = "";
    ans.value = "";
}

restartGame();

function checkResult() {
    let aNo = parseInt(numberContainerA.textContent);
    let bNo = parseInt(numberContainerB.textContent);
    let ansU = parseInt(ans.value);

    let summ = aNo + bNo;

    if (ansU === summ) {
        r.textContent = ap;
        r.style.backgroundColor = "#028a0f";
    } else {
        r.textContent = at;
        r.style.backgroundColor = "#1e217c";
    }
}