function rollDice() {
    const numDice = document.getElementById('number').value;
    const diceResult = document.getElementById('diceResult');
    const diceImages = document.getElementById('diceImages');

    const result = [];
    const images = [];

    for (let i = 0; i < numDice; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        result.push(roll);
        images.push(`<img src="dice_images/${roll}.png" alt="Dice ${roll}" width="50" height="50">`);
    }

    document.getElementById('diceResult').textContent = `You rolled: ${result.join(', ')}`;
    document.getElementById('diceResult').className = 'diceResult';
    document.getElementById('diceImages').innerHTML = images.join(' ');
    document.getElementById('diceImages').className = 'diceImages';
}

