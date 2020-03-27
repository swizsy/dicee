evaluateWinner(Math.ceil(Math.random() * 6), Math.ceil(Math.random() * 6));

function evaluateWinner(player1Outcome, player2Outcome) {
    var outcomeMessage = getOutcomeMessage(player1Outcome, player2Outcome);
    document.querySelector(".title").textContent = outcomeMessage;

    setImages(player1Outcome, player2Outcome);
}

function getOutcomeMessage(player1Outcome, player2Outcome) {
    if (player1Outcome === player2Outcome) {
        return "Draw!";
    } else {
        return player1Outcome > player2Outcome ? "🚩 Player 1 wins!" : "Player 2 wins! 🚩";
    }
}

function setImages(player1Outcome, player2Outcome) {
    var imgPlayer1 = "images/dice" + player1Outcome + ".png";
    var imgPlayer2 = "images/dice" + player2Outcome + ".png";

    var diceImages = document.querySelectorAll(".dice img");
    diceImages[0].setAttribute("src", imgPlayer1);
    diceImages[1].setAttribute("src", imgPlayer2);
}
