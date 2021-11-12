const data = [
  {
    "title": "Work",
    "timeframes": {
      "daily": {
        "current": 5,
        "previous": 7
      },
      "weekly": {
        "current": 32,
        "previous": 36
      },
      "monthly": {
        "current": 103,
        "previous": 128
      }
    }
  },
  {
    "title": "Play",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 2
      },
      "weekly": {
        "current": 10,
        "previous": 8
      },
      "monthly": {
        "current": 23,
        "previous": 29
      }
    }
  },
  {
    "title": "Study",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 7
      },
      "monthly": {
        "current": 13,
        "previous": 19
      }
    }
  },
  {
    "title": "Exercise",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 5
      },
      "monthly": {
        "current": 11,
        "previous": 18
      }
    }
  },
  {
    "title": "Social",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 3
      },
      "weekly": {
        "current": 5,
        "previous": 10
      },
      "monthly": {
        "current": 21,
        "previous": 23
      }
    }
  },
  {
    "title": "Self Care",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 2,
        "previous": 2
      },
      "monthly": {
        "current": 7,
        "previous": 11
      }
    }
  }
]

function setHoursCurrent(timeframe) {
  document.querySelector('.work-hours-current').textContent = data[0].timeframes[timeframe].current
  document.querySelector('.play-hours-current').textContent = data[1].timeframes[timeframe].current
  document.querySelector('.study-hours-current').textContent = data[2].timeframes[timeframe].current
  document.querySelector('.exercise-hours-current').textContent = data[3].timeframes[timeframe].current
  document.querySelector('.social-hours-current').textContent = data[4].timeframes[timeframe].current
  document.querySelector('.selfcare-hours-current').textContent = data[5].timeframes[timeframe].current
}

function setHoursPrevious(timeframe) {
  document.querySelector('.work-hours-previous').textContent = data[0].timeframes[timeframe].previous
  document.querySelector('.play-hours-previous').textContent = data[1].timeframes[timeframe].previous
  document.querySelector('.study-hours-previous').textContent = data[2].timeframes[timeframe].previous
  document.querySelector('.exercise-hours-previous').textContent = data[3].timeframes[timeframe].previous
  document.querySelector('.social-hours-previous').textContent = data[4].timeframes[timeframe].previous
  document.querySelector('.selfcare-hours-previous').textContent = data[5].timeframes[timeframe].previous
}

function displayPrevTimePeriod(prevTimePeriod) {
  let x = document.querySelectorAll('.previous-period')
  for (let i = 0; i < x.length; i++) {
    x[i].textContent = prevTimePeriod
  }
}

function loadData(currentTimeframe, prevTimePeriod, prevTimeframe) {
  setHoursCurrent(currentTimeframe)
  displayPrevTimePeriod(prevTimePeriod)
  setHoursPrevious(prevTimeframe)
}

// on load
loadData('daily', 'Yesterday', 'daily')

// Daily button
document.querySelector('.daily-button').addEventListener('click', function() {
  loadData('daily', 'Yesterday', 'daily')
})

// Weekly button
document.querySelector('.weekly-button').addEventListener('click', function() {
  document.querySelector(".daily-button").classList.remove("active")
  loadData('weekly', 'Last Week', 'weekly')
})

// Monthly button
document.querySelector('.monthly-button').addEventListener('click', function() {
  document.querySelector(".daily-button").classList.remove("active")
  loadData('monthly', 'Last Month', 'monthly')
})