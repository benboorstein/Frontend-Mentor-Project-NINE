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

const mappings = {
  daily: 'Yesterday',
  weekly: 'Last Week',
  monthly: 'Last Month'
}

let tracker = 'daily' // 'tracker' is just STARTING OFF as 'daily'

// calling this function here so that on load of page 'daily' data is shown (this works because 'tracker' is set to 'daily' and it hasn't been updated yet) 
updateCards()
// Robert: "This is a great way to get the job done. It also is what you'd do when using something like Vue: You would likely call a function in Vue's purpose-built 'mounted' or 'created' method in order to initialize everything. So, in essence, you are calling 'updateCards()' once the page loads...in order to refresh the data to reflect your tracker being set to 'daily'. Great work!"

document.querySelectorAll('.time-period-btn').forEach(button => {
  button.addEventListener('click', function() {
    document.querySelector('.daily-button').classList.remove('active')
    tracker = button.textContent.toLowerCase() // 'tracker' is updated
    updateCards()
  })
})

function updateCards() {
  document.querySelectorAll('.card').forEach(card => {
    let match = data.find(obj => obj.title === card.dataset.label) // ref notes under code for explanation of 'card.dataset.label'
    card.querySelector('.hours-current').textContent = match.timeframes[tracker].current
    card.querySelector('.hours-previous').textContent = match.timeframes[tracker].previous
    document.querySelectorAll('.previous-period').forEach(period => {
      period.textContent = mappings[tracker]
    })
  })  
}

/* NOTES FOR THIS LINE ABOVE: let match = data.find(obj => obj.title === card.dataset.label)

1) Note that 'element.dataset.keyname' -- applied in the line above as 'card.dataset.label' -- is the standard way of accessing the value(s) stored in 'keyname' ('label'). 'label' (just the suffix Robert and I chose for the HTML 'data-' attribute) is the KEY in the key-value pair, and the HTML attribute value (e.g., "Work", "Play", etc.) is the VALUE in the key-value pair. Look to the code examples below to see how logging these key-value pairs looks. Each looks like an object but is actually a DOMStringMap.

2) 'dataset' is a property on the HTML element (which is represented by 'card' in this case). Robert: 'dataset' isn't a global object that aggregates every element's 'data-' attributes, but rather is a property on any HTML element that has 'data-' attributes.

3) These are the relevant MDNs: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset and https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes.

document.querySelectorAll('.card').forEach(card => {
  console.log(card.dataset)
})
LOGS:
DOMStringMap {label: 'Work'}
DOMStringMap {label: 'Play'}
DOMStringMap {label: 'Study'}
DOMStringMap {label: 'Exercise'}
DOMStringMap {label: 'Social'}
DOMStringMap {label: 'Self Care'}

document.querySelectorAll('.card').forEach(card => {
  console.log(card.dataset.label)
})
LOGS:
Work
Play
Study
Exercise
Social
Self Care

*/