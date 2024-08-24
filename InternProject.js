document.getElementById('connectWallet').addEventListener('click', function() {
    // Logic to connect the wallet will go here
    alert('Wallet Connected!'); // Temporary
    document.getElementById('gameArea').style.display = 'block';
});

// Add event listeners for the flip buttons
document.getElementById('flipHeads').addEventListener('click', function() {
    // Logic for flipping heads
    alert('You chose heads!');
});

document.getElementById('flipTails').addEventListener('click', function() {
    // Logic for flipping tails
    alert('You chose tails!');
});
