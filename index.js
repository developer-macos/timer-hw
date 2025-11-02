let timer = document.getElementById("timer")
let startButton = document.getElementById("startButton")

function Timer() {
  let hours = 1;
  let minutes = 0;

  startButton.addEventListener("click", () => {
    // Prevent multiple intervals
    if (startButton.interval) return;

    startButton.interval = setInterval(() => {
      if (minutes === 0 && hours === 0) {
        clearInterval(startButton.interval)
        timer.textContent = "Time's up!"
        return
      }

      if (minutes === 0) {
        hours--
        minutes = 59
      } else {
        minutes--
      }

      if (hours === 0 && minutes === 30) {
        alert("Half way there!")
      }

      timer.textContent = `Time left: ${hours} ${minutes}`
    }, 1000)
  })
}

Timer()


let secondsTimer = document.getElementById("seconds_timer")