// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const likeButtons = document.querySelectorAll(".like");
let likeSwitch = false;

window.addEventListener('DOMContentLoaded', (event) => {
  likeButtons.forEach(button => {
    button.addEventListener("click", like)
  })
});



function like(e) {
  const glyph = e.target;

  // do after fetch
  animateLike(glyph);


  //   mimicServerCall()

}

function animateLike(glyph) {
    if (glyph.matches(".like-glyph")) {
      if (glyph.innerText == FULL_HEART) {
        return glyph.innerText = EMPTY_HEART;
      } else {
        return glyph.innerText = FULL_HEART;
      }
    } else {
      if (glyph.querySelector(".like-glyph").innerText == FULL_HEART) {
        return glyph.querySelector(".like-glyph").innerText = EMPTY_HEART;
      } else {
        return glyph.querySelector(".like-glyph").innerText = FULL_HEART;
      }
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
