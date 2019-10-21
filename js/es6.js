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
const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', () => {
    submitInfo();
});


const submitInfo = () => {
    let total = 0;
    let dL;
    let tL;
    const dLHTML = document.getElementById('double-word');
    const tLHTML = document.getElementById('triple-word');
    const bingoHTML = document.getElementById('bingo');
    let score1;
    let score2;
    let score3;
    let score4;
    let score5;
    let score6;
    let score7;
    let score8;
    const w = document.getElementById('word').value.toUpperCase();

    const calc = () => {
        for (let i = 0; i < letterKeys.length; i++) {
            if (w[0] == letterKeys[i]) {
                score1 = letterValues[i];
            };
            if (w[1] == letterKeys[i]) {
                score2 = letterValues[i];
            };
            if (w[2] == letterKeys[i]) {
                score3 = letterValues[i];
            };
            if (w[3] == letterKeys[i]) {
                score4 = letterValues[i];
            };
            if (w[4] == letterKeys[i]) {
                score5 = letterValues[i];
            };
            if (w[5] == letterKeys[i]) {
                score6 = letterValues[i];
            };
            if (w[6] == letterKeys[i]) {
                score7 = letterValues[i];
            };
            if (w[7] == letterKeys[i]) {
                score8 = letterValues[i];
            };
        }
        const doubleLetter = () => {
            dL = document.getElementById('double-letter').value.toUpperCase();
            for (let i = 0; i < letterKeys.length; i++) {
                if (dL === letterKeys[i]) {
                    dL = letterValues[i];
                    total = total - dL + dL * 2;
                }
            }
        }

        const tripleLetter = () => {
            tL = document.getElementById('triple-letter').value.toUpperCase();
            for (let i = 0; i < letterKeys.length; i++) {
                if (tL === letterKeys[i]) {
                    tL = letterValues[i];
                    total = total - tL + tL * 3;
                }
            }
        }

        const doubleScore = () => {
            if (dLHTML.checked == true) {
                total *= 2;
            };
        }
        const tripleScore = () => {
            if (tLHTML.checked == true) {
                total *= 3;
            };
        }
        const bingo = () => {
            if (w.length >= 7) {
                if (bingoHTML.checked == true) {
                    total = total + 50;
                };
            };
        }

        const callFunc = () => {
            doubleLetter();
            tripleLetter();
            doubleScore();
            tripleScore();
            bingo();
            document.getElementById('score').innerHTML = total;
        }

        if (w.length === 2) {
            total = score1 + score2;
            callFunc();
        } else if (w.length === 3) {
            total = score1 + score2 + score3;
            callFunc();
        } else if (w.length === 4) {
            total = score1 + score2 + score3 + score4;
            callFunc();
        } else if (w.length === 5) {
            total = score1 + score2 + score3 + score4 + score5;
            callFunc();
        } else if (w.length === 6) {
            total = score1 + score2 + score3 + score4 + score5 + score6;
            callFunc();
        } else if (w.length === 7) {
            total = score1 + score2 + score3 + score4 + score5 + score6 + score7;
            callFunc();
        } else if (w.length === 8) {
            total = score1 + score2 + score3 + score4 + score5 + score6 + score7 + score8;
            callFunc();
        }
    }
    calc();
}