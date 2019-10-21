// This is for the loading animation
$(function () {
    $(".loading").fadeOut(2500, function () {
        $(".content").fadeIn(1000);
    });
});
// When the user clicks the submit button this function will be called
function submitInfo(w) {
    // Letters
    var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    // Score
    var score = [1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 5, 1, 3, 1, 1, 3, 10, 1, 1, 1, 1, 4, 4, 8, 4, 10];
    var total = 0;
    // BONUSES
    var dL;
    var tL;
    // 1 Word Input
    var w = document.getElementById("word").value.toUpperCase();
    // 2
    // Counter for letter array
    // Index for score is the same index for the letter 
    function calc() {
        for (var i = 0; i < letters.length; i++) {
            // First Letter
            if (w[0] == letters[i]) {
                var score1 = score[i];
            }
            // Second Letter
            if (w[1] == letters[i]) {
                var score2 = score[i];
            }
            // Third Letter
            if (w[2] == letters[i]) {
                var score3 = score[i];
            }
            // Fourth Letter
            if (w[3] == letters[i]) {
                var score4 = score[i];
            }
            // Fifth Letter
            if (w[4] == letters[i]) {
                var score5 = score[i];
            }
            // Six Letter
            if (w[5] == letters[i]) {
                var score6 = score[i];
            }
            // Seventh Letter 
            if (w[6] == letters[i]) {
                var score7 = score[i];
            }
            // Eighth Letter 
            if (w[7] == letters[i]) {
                var score8 = score[i];
            }
        }
        // 3 BONUS POINTS
        // Letter Bonus
        function doubleLetter() {
            dL = document.getElementById("double-letter").value.toUpperCase();
            for (i = 0; i < letters.length; i++) {
                if (dL === letters[i]) {
                    dL = score[i];
                    total = total - dL + dL * 2;
                }
            }
        }
        function tripleLetter() {
            tL = document.getElementById("triple-letter").value.toUpperCase();
            for (i = 0; i < letters.length; i++) {
                if (tL == letters[i]) {
                    tL = score[i];
                    total = total - tL + tL * 3;
                }
            }
        }
        // Word Bonus
        function doubleScore() {
            if (document.getElementById('double-word').checked == true) {
                total *= 2;
            }
        }
        function tripleScore() {
            if (document.getElementById('triple-word').checked == true) {
                total *= 3;
            }
        }
        // Bingo
        function bingo() {
            if (document.getElementById('bingo').checked == true) {
                total += 50;
            }
        }
        // 4 Call all functions into final calculation
        function callFunc() {
            doubleLetter();
            tripleLetter();
            doubleScore();
            tripleScore();
        }
        // 5 Work out Score depending on how long the word is
        if (w.length === 2) {
            total = score1 + score2;
            callFunc();
        }
        else if (w.length === 3) {
            total = score1 + score2 + score3;
            callFunc();
        }
        else if (w.length === 4) {
            total = score1 + score2 + score3 + score4;
            callFunc();
        }
        else if (w.length === 5) {
            total = score1 + score2 + score3 + score4 + score5;
            callFunc();
        }
        else if (w.length === 6) {
            total = score1 + score2 + score3 + score4 + score5 + score6;
            callFunc();
        }
        else if (w.length === 7) {
            total = score1 + score2 + score3 + score4 + score5 + score6 + score7;
            callFunc();
            bingo();
        }
        else if (w.length === 8) {
            total = score1 + score2 + score3 + score4 + score5 + score6 + score7 + score8;
            callFunc();
            bingo();
        }
        document.getElementById('score').innerHTML = total;
    }
    calc();
}