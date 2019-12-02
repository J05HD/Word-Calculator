const letters = {
    A: 1,
    B: 3,
    C: 3,
    D: 2,
    E: 1,
    F: 4,
    G: 2,
    H: 4,
    I: 1,
    J: 8,
    K: 5,
    L: 1,
    M: 3,
    N: 1,
    O: 1,
    P: 3,
    Q: 10,
    R: 1,
    S: 1,
    T: 1,
    U: 1,
    V: 4,
    W: 4,
    X: 8,
    Y: 4,
    Z: 10
}
const letterKeys = Object.keys(letters);
const letterValues = Object.values(letters);
let doubleLetterValue;
let tripleLetterValue = document.getElementById('trible-letter')
const doubleWordHtml = document.getElementById('double-word')
const tripleWordHtml = document.getElementById('triple-word')
const bingoHtml = document.getElementById('bingo')
const btn = document.getElementById('submit-btn')
let total;

document.addEventListener('keydown', event => {
    if (event.keyCode === 13 || event.which === 13) {
        total = 0;
        const input = document.querySelector('[data-input]').value.toUpperCase();
        let inputArr = [...input];
        calc(inputArr)
    };
});

btn.addEventListener('click', () => {
    total = 0;
    const input = document.querySelector('[data-input]').value.toUpperCase();
    let inputArr = [...input];
    calc(inputArr)
})



function calc(args) {
    for (let i = 0; i < args.length; i++) total += findValue(args[i]);
    if (document.getElementById('double-letter').value !== "") doubleLetter()
    if (document.getElementById('triple-letter').value !== "") tripleLetter()
    if (doubleWordHtml.checked === true) doubleScore()
    if (tripleWordHtml.checked === true) tripleScore()
    if (args.length >= 7 && bingoHtml.checked === true) bingo()
    document.getElementById('score').textContent = total
}

const findValue = letter => {
    for (let i = 0; i < letterKeys.length; i++)
        if (letter == letterKeys[i])
            return letterValues[i]
}

const doubleLetter = () => {
    doubleLetterValue = document.getElementById('double-letter').value.toUpperCase()
    doubleLetterValue = findValue(doubleLetterValue) * 2
    total += doubleLetterValue
}

const tripleLetter = () => {
    tripleLetterValue = document.getElementById('triple-letter').value.toUpperCase()
    tripleLetterValue = findValue(tripleLetterValue) * 3
    total += tripleLetterValue
}

const doubleScore = () => total *= 2


const tripleScore = () => total *= 3

const bingo = () => total += 50