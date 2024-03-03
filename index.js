// Helper function to generate a random number between min and max (inclusive)
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Helper function to check the player's guess
  function checkGuess(secretNumber, playerGuess) {
    if (playerGuess < secretNumber) {
      return "Too low! Try again.";
    } else if (playerGuess > secretNumber) {
      return "Too high! Try again.";
    } else {
      return "Congratulations! You guessed the correct number!";
    }
  }
  
  // Main function to run the number guessing game
  function numberGuessingGame() {
    const minNumber = 1;
    const maxNumber = 20;
    const secretNumber = generateRandomNumber(minNumber, maxNumber);
    let attempts = 0;
  
    while (true) {
      const playerInput = prompt(`Guess the number between ${minNumber} and ${maxNumber}:`);
      const playerGuess = parseInt(playerInput);
  
      if (isNaN(playerGuess)) {
        alert("Invalid input. Please enter a valid number.");
        continue;
      }
  
      attempts++;
  
      const feedback = checkGuess(secretNumber, playerGuess);
      alert(feedback);
  
      if (playerGuess === secretNumber) {
        alert(`You guessed the number in ${attempts} attempts!`);
        break;
      }
    }
  }
  
  // Start the game
  numberGuessingGame();