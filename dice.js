// JavaScript file for handling button click and displaying numbers

// Function to generate a random number between 1 and 100
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

// Function to handle button click event
function handleButtonClick() {
    const iteg = document.getElementById('itag');
    const randomNumber = generateRandomNumber(); // Generate a random number
    const displayElement = document.getElementById('randomNumberDisplay'); // Get the display element
    if (randomNumber > 50) {
        displayElement.textContent = ` ${randomNumber}, Over 50`; // Display if number is over 50
        iteg.style.left = `${randomNumber-7}%`;
    } else {
        displayElement.textContent = ` ${randomNumber}, Under 50`; // Display if number is under 50
        iteg.style.left = `${randomNumber-7}%`;
    }
}

document.getElementById('nextButton').addEventListener('click', handleButtonClick);
window.onload = function() {
    document.getElementById('popupOverlay').style.display = 'flex';
  };

  function disable() {
    var x = document.getElementById("btn");
    x.style.display = "none";
    setTimeout(function() {
        x.style.display = "block";
    }, 20000); // Delay for 20000 milliseconds (20 seconds)
  }

  window.addEventListener('load', function() {
    var audio = document.getElementById("myAudio");
    audio.play();
  });
  
  function play() {
    var audio = document.getElementById("clickk");
    audio.play();
  }

  function showPopup() {
    const popup = document.getElementById('popup');
    popup.textContent = generatePhoneNumber();
    popup.style.display = 'block'; // Show the popup
  }
  // Adding click event listener to close button
document.getElementById('closePopup').addEventListener('click', function() {
    // Removing popup
    document.getElementById('popupOverlay').style.display = 'none';
  });
  