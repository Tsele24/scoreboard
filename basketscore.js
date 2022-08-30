
let scoreHome = document.getElementById("scoreHome")
let scoreGuest = document.getElementById("scoreGuest")

let resultHome = 0;
let resultGuest = 0;
 
function add1Home() {
    resultHome += 1
    scoreHome.innerText = resultHome;
}

function add2Home() {
    resultHome += 2
    scoreHome.innerText = resultHome;
}

function add3Home() {
    resultHome += 3
    scoreHome.innerText = resultHome;
}

function add1Guest() {
    resultGuest += 1
    scoreGuest.innerText = resultGuest
}

function add2Guest() {
    resultGuest += 2
    scoreGuest.innerText = resultGuest
}

function add3Guest() {
    resultGuest += 3
    scoreGuest.innerText = resultGuest
}

function newGame() {
    scoreHome.innerText = 0
    scoreGuest.innerText = 0

}

