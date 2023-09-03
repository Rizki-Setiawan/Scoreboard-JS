let countA = 0;
let countB = 0;
let scoreboard = document.getElementById("scoreboard");
let counterA = document.getElementById("counterA");
let counterB = document.getElementById("counterB");
let kurangA = document.getElementById("kurangA");
let kurangB = document.getElementById("kurangB");

function tambahNilaiA() {
    countA += 1;
    counterA.innerHTML = countA;
    kurangA.disabled = false;
}

function tambahNilaiB() {
    countB += 1;
    counterB.innerHTML = countB;
    kurangB.disabled = false;
}

function kurangNilaiA() {
    if (countA <= 0) {
        counterA.innerHTML = 0;
        kurangA.disabled = true;
    } else {
        countA -= 1;
        counterA.innerHTML = countA;
    }
}

function kurangNilaiB() {
    if (countB <= 0) {
        counterB.innerHTML = 0;
        kurangB.disabled = true;
    } else {
        countB -= 1;
        counterB.innerHTML = countB;
    }
}

scoreboard.addEventListener("click", (evt) => {
    let target = evt.target;
    if (target.id === "tambahA") {
        tambahNilaiA();
    } else if (target.id === "tambahB") {
        tambahNilaiB();
    } else if (target.id === "kurangA") {
        kurangNilaiA();
    } else if (target.id === "kurangB") {
        kurangNilaiB();
    } else {
        console.error();
    }
}, false)

// add comment

// let tambah1 = document.getElementById("tambah1");
// let tambah2 = document.getElementById("tambah2");
// tambah1.onclick = () => {
//     countA += 1;
//     document.getElementById('counter1').innerHTML = countA;
// }
// tambah2.onclick = () => {
//     count2 += 1;
//     document.getElementById('counter2').innerHTML = count2;
// }

// function tambah1() {
//     countA += 1;
//     document.getElementById('counter1').innerHTML = countA;
// }
// function tambah2() {
//     count2 += 1;
//     document.getElementById('counter2').innerHTML = count2;
// }

