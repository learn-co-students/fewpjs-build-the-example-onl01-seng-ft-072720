// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const likeButtons = document.querySelectorAll(".like");
const errorBar = document.querySelector("#modal");

window.addEventListener('DOMContentLoaded', (event) => {
  likeButtons.forEach(button => {
    button.addEventListener("click", like)
  })
});



function like(e) {
  const glyph = e.target;

  mimicServerCall()
  .then(resp => {
    if (resp == "Pretend remote server notified of action!") {
      animateLike(glyph)
    }
    })
    
    .catch(error => {
      errorBar.innerText = error;
      errorBar.classList.remove("hidden")
      setTimeout(function() {
        errorBar.classList.add("hidden")
      }, 5000)
    })

}

function animateLike(glyph) {
    if (glyph.matches(".like-glyph")) {
      if (glyph.innerText == FULL_HEART) {
        glyph.classList.remove("activated-heart");
        glyph.innerText = EMPTY_HEART;
      } else {
        glyph.classList.add("activated-heart");
        glyph.innerText = FULL_HEART;
        return;
      }
    } else {
      if (glyph.querySelector(".like-glyph").innerText == FULL_HEART) {
        glyph.querySelector(".like-glyph").classList.remove("activated-heart");
        glyph.querySelector(".like-glyph").innerText = EMPTY_HEART;
        return;
      } else {
        glyph.querySelector(".like-glyph").classList.add("activated-heart");
        glyph.querySelector(".like-glyph").innerText = FULL_HEART;
        return;
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
