/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

let scores, roundScore, activePlayer, gamePlaying;
init();

// Click event for roll button to display dice image depending on dice roll
    document.querySelector('.btn-roll').addEventListener('click', () => {
        if (gamePlaying) {
            let dice = Math.floor(Math.random() * 6) + 1;
            
            document.querySelector('.dice').style.display = 'block';
            document.querySelector('.dice').src = 'dice-' + dice + '.png';

            // Roundscore functionality
            if (dice !== 1) {
                // Adding dice roll to current round score
                roundScore += dice;
                document.querySelector('#current-' + activePlayer).textContent = roundScore;
            } else {
                nextPlayer();
            }
        }
    });

// Click event for hold button to update global score
    document.querySelector('.btn-hold').addEventListener('click', () => {
            if (gamePlaying) {
            // Add current score to global score
            scores[activePlayer] += roundScore;
            document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

            // Check if player won the game
            if (scores[activePlayer] >= 10) {
                document.getElementById('name-' + activePlayer).textContent = 'WINNER!';
                document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner')
                document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active')
                document.querySelector('.dice').style.display = 'none';
                gamePlaying = false;
            } else {
                nextPlayer(); 
            }
        }
    });

// Next Player
    const nextPlayer = () => {
        // Switch active player and reset round score
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;

        // Display the reset round score
        document.getElementById('current-0').textContent = 0;
        document.getElementById('current-1').textContent = 0;

        // Toggle the active player styles
        document.querySelector('.player-0-panel').classList.toggle('active')
        document.querySelector('.player-1-panel').classList.toggle('active')

        document.querySelector('.dice').style.display = 'none';
    }

// Click event for new game button to reset game
    document.querySelector('.btn-new').addEventListener('click', init);

// Game Initializer
    function init() {
        scores = [0, 0];
        roundScore = 0;
        activePlayer = 0;
        gamePlaying = true;

        // Hide dice
        document.querySelector('.dice').style.display = 'none';

        // Set all scores to 0
        document.getElementById('score-0').textContent = '0';
        document.getElementById('score-1').textContent = '0';
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        // Set all labels to player name
        document.getElementById('name-0').textContent = 'Player 1';
        document.getElementById('name-1').textContent = 'Player 2';

        // Reset winner classes and player 0 to active
        document.querySelector('.player-0-panel').classList.remove('winner')
        document.querySelector('.player-1-panel').classList.remove('winner')
        document.querySelector('.player-0-panel').classList.remove('active')
        document.querySelector('.player-1-panel').classList.remove('active')
        document.querySelector('.player-0-panel').classList.add('active')
    }