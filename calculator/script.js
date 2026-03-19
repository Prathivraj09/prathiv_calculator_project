let current = "0";
let previous = "";
let op = null;

const mainDisp = document.getElementById('main-screen');
const upperDisp = document.getElementById('upper-screen');

function update() {
    mainDisp.innerText = current;
    upperDisp.innerText = op ? previous + " " + op : "";
}

function appendNumber(num) {
    if (current === "0" && num !== ".") current = num;
    else {
        if (num === "." && current.includes(".")) return;
        current += num;
    }
    update();
}

function setOperator(operator) {
    if (op !== null) calculate();
    op = operator;
    previous = current;
    current = "0";
    update();
}

function calculate() {
    let res;
    const a = parseFloat(previous);
    const b = parseFloat(current);
    if (isNaN(a) || isNaN(b)) return;

    if (op === '+') res = a + b;
    else if (op === '-') res = a - b;
    else if (op === '*') res = a * b;
    else if (op === '/') res = b === 0 ? "Error" : a / b;
    else if (op === '%') res = a % b;

    current = res.toString();
    op = null;
    previous = "";
    update();
}

function allClear() {
    current = "0";
    previous = "";
    op = null;
    update();
}

function deleteLast() {
    current = current.length > 1 ? current.slice(0, -1) : "0";
    update();
}