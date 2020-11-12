// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorDiv = document.querySelector('#modal');
const hearts = document.getElementsByClassName('like-glyph');
const heartsArray = Array.from(hearts);

function hide() {
  errorDiv.hidden = true;
  errorDiv.className = 'hidden';
}

function dontHide() {
  errorDiv.hidden = false;
}

hide();

heartsArray.forEach(heart => {
  heart.addEventListener('click', function (event) {
    event.preventDefault()
    mimicServerCall()
      .then(function () {
        hide();
        heartStatus(heart);
      })
      .catch(function () {
        dontHide();
        setTimeout(() => hide(), 5000);
        heartStatus(heart);
      });
  });
});

function heartStatus(heart) {
  if (heart.innerText == EMPTY_HEART) {
    heart.innerText = FULL_HEART;
    heart.className = 'activated-heart';
  }
  else {
    heart.innerText = EMPTY_HEART;
    heart.className = 'like-glyph';
  }
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
