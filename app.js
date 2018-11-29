/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

let scores, roundScore, activePlayer, diceDom;
scores = [0, 0];
roundScore = 0;
activePlayer = 0;
diceDom = document.querySelector('.dice');

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
        
        diceDom.style.display = 'block';
        diceDom.src = 'dice-' + dice + '.png';

        // Roundscore functionality
        if (dice !== 1) {
            // Adding dice roll to current round score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }
    });

// Click event for hold button to update global score
    document.querySelector('.btn-hold').addEventListener('click', () => {
        // Add current score to global score
        scores[activePlayer] += roundScore;
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

        // Check if player won the game
        if (scores[activePlayer] >= 10) {
            document.getElementById('name-' + activePlayer).textContent = 'WINNER!';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner')
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active')
            diceDom.style.display = 'none';
        } else {
            nextPlayer(); 
        }
    });

let nextPlayer = () => {
    // Switch active player and reset round score
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