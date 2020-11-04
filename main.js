// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const modal = document.querySelector('#modal');
const modalMessage = document.querySelector('#modal-message');
const modalSwitch = false;
modal.classList.add('hidden');

const hearts = document.querySelectorAll('span.like-glyph');

function changeModal(msg) {
  modal.classList.remove("hidden");
  modalMessage.innerHTML += msg;
  setTimeout(function() {
    modal.classList.add('hidden');
    modalMessage.innerHTML = "";
  }, 5000);
}

function activateHeart(heart) {
  heart.innerHTML = FULL_HEART;
  heart.classList.add('activated-heart')
}

function deactivateHeart(heart) {
  heart.innerHTML = EMPTY_HEART;
  heart.classList.remove('activated-heart')
}

for (heart of hearts) {
  heart.addEventListener('click', function(e) {
    const heart = e.target
    mimicServerCall()
    .then(response => {
      if (heart.classList.contains('activated-heart')) {
        deactivateHeart(heart);
      } else {
        activateHeart(heart);
      }
    })
    .catch(error => {
      changeModal(error);
    })
  })
}

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
