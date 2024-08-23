// Countdown to 10th September
const countdownElement = document.getElementById('countdown-timer');

// Target date: 10 September of the current year
const targetDate = new Date(new Date().getFullYear(), 8, 10, 0, 0, 0).getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Display the result in the element
    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // If the countdown is over, display a message
    if (timeRemaining < 0) {
        clearInterval(interval);
        countdownElement.innerHTML = "Countdown Finished!";
    }
}

// Update the countdown every second
const interval = setInterval(updateCountdown, 1000);
