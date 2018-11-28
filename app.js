/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

let scores, roundScore, activePlayer;
scores = [0, 0];
roundScore = 0;
activePlayer = 0;

// Hide dice
document.querySelector('.dice').style.display = 'none';

// Set all scores to 0
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

// Click event for roll button to display dice image depending on dice roll
document.querySelector('.btn-roll').addEventListener('click', () => {
    let dice = Math.floor(Math.random() * 6) + 1;
    
    let diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png';

    // Roundscore functionality
    if (dice !== 1) {
        // Adding dice roll to current round score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        // Switch active player and reset roud score
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;

        // Display the reset round score
        document.getElementById('current-0').textContent = 0;
        document.getElementById('current-1').textContent = 0;

        // Toggle the active player styles
        document.querySelector('.player-0-panel').classList.toggle('active')
        document.querySelector('.player-1-panel').classList.toggle('active')

        diceDom.style.display = 'none';
    }

})




