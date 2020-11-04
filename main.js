// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const errorLocation = document.querySelector("#modal")





// Your JavaScript code goes here!

const mediaPosts = document.querySelectorAll('.media-post')

for(let i = 0; i < mediaPosts.length; i++) {
  mediaPosts[i].addEventListener('click', function(e) {
    let theHeart = e.target
    console.log(e.target)
    mimicServerCall().then(object => {
          console.log(object)
          changeHeart(theHeart) // make a function that checks what the current status of the heart is and changes it
        } )  .catch(error => {
          console.error('There has been a problem with your fetch operation:', error);
          errorLocation.className="";
         
          let errorMessage = document.querySelector("#modal-message").innerHTML = error
        let t = setTimeout(sendErrorMess, 5000) // wait 5 seconds before clearing the error message
            } 
        ) }
      
  )}
  

function changeHeart(location) {
  if (location.innerText == EMPTY_HEART) {
    location.innerText = FULL_HEART
  }
  else 
  location.innerText = EMPTY_HEART
}


function sendErrorMess() {  // wait 5 seconds before clearing the error message
 errorLocation.className="hidden";
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
