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

function loadDailyData() {
  document.querySelector('.work-hours-current').textContent = data[0].timeframes.daily.current
  document.querySelector('.play-hours-current').textContent = data[1].timeframes.daily.current
  document.querySelector('.study-hours-current').textContent = data[2].timeframes.daily.current
  document.querySelector('.exercise-hours-current').textContent = data[3].timeframes.daily.current
  document.querySelector('.social-hours-current').textContent = data[4].timeframes.daily.current
  document.querySelector('.selfcare-hours-current').textContent = data[5].timeframes.daily.current

  let x = document.querySelectorAll('.previous-period')
  for (let i = 0; i < x.length; i++) {
    x[i].textContent = "Yesterday"
  }

  document.querySelector('.work-hours-previous').textContent = data[0].timeframes.daily.previous
  document.querySelector('.play-hours-previous').textContent = data[1].timeframes.daily.previous
  document.querySelector('.study-hours-previous').textContent = data[2].timeframes.daily.previous
  document.querySelector('.exercise-hours-previous').textContent = data[3].timeframes.daily.previous
  document.querySelector('.social-hours-previous').textContent = data[4].timeframes.daily.previous
  document.querySelector('.selfcare-hours-previous').textContent = data[5].timeframes.daily.previous
}

// on load
loadDailyData()

// Daily button
document.querySelector('.daily-button').addEventListener('click', loadDailyData)

// Weekly button
document.querySelector('.weekly-button').addEventListener('click', function() {

  document.querySelector(".daily-button").classList.remove("active")

  document.querySelector('.work-hours-current').textContent = data[0].timeframes.weekly.current
  document.querySelector('.play-hours-current').textContent = data[1].timeframes.weekly.current
  document.querySelector('.study-hours-current').textContent = data[2].timeframes.weekly.current
  document.querySelector('.exercise-hours-current').textContent = data[3].timeframes.weekly.current
  document.querySelector('.social-hours-current').textContent = data[4].timeframes.weekly.current
  document.querySelector('.selfcare-hours-current').textContent = data[5].timeframes.weekly.current

  let x = document.querySelectorAll('.previous-period')
  for (let i = 0; i < x.length; i++) {
    x[i].textContent = "Last Week"
  }

  document.querySelector('.work-hours-previous').textContent = data[0].timeframes.weekly.previous
  document.querySelector('.play-hours-previous').textContent = data[1].timeframes.weekly.previous
  document.querySelector('.study-hours-previous').textContent = data[2].timeframes.weekly.previous
  document.querySelector('.exercise-hours-previous').textContent = data[3].timeframes.weekly.previous
  document.querySelector('.social-hours-previous').textContent = data[4].timeframes.weekly.previous
  document.querySelector('.selfcare-hours-previous').textContent = data[5].timeframes.weekly.previous
})

// Monthly button
document.querySelector('.monthly-button').addEventListener('click', function() {

  document.querySelector(".daily-button").classList.remove("active")

  document.querySelector('.work-hours-current').textContent = data[0].timeframes.monthly.current
  document.querySelector('.play-hours-current').textContent = data[1].timeframes.monthly.current
  document.querySelector('.study-hours-current').textContent = data[2].timeframes.monthly.current
  document.querySelector('.exercise-hours-current').textContent = data[3].timeframes.monthly.current
  document.querySelector('.social-hours-current').textContent = data[4].timeframes.monthly.current
  document.querySelector('.selfcare-hours-current').textContent = data[5].timeframes.monthly.current

  let x = document.querySelectorAll('.previous-period')
  for (let i = 0; i < x.length; i++) {
    x[i].textContent = "Last Month"
  }

  document.querySelector('.work-hours-previous').textContent = data[0].timeframes.monthly.previous
  document.querySelector('.play-hours-previous').textContent = data[1].timeframes.monthly.previous
  document.querySelector('.study-hours-previous').textContent = data[2].timeframes.monthly.previous
  document.querySelector('.exercise-hours-previous').textContent = data[3].timeframes.monthly.previous
  document.querySelector('.social-hours-previous').textContent = data[4].timeframes.monthly.previous
  document.querySelector('.selfcare-hours-previous').textContent = data[5].timeframes.monthly.previous
})