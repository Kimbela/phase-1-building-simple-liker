// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const errorModal = document.querySelector('#modal');
errorModal.classList.add('hidden');

const emptyHeart = document.querySelector('.like-glyph');
emptyHeart.addEventListener('click', () => {
  mimicServerCall()
    .then(() => {
      
    })
    .catch(() => {
      
    });
});

const errorMessage = document.querySelector('#modal-message');
mimicServerCall()
  .then(() => {
   
  })
  .catch(() => {
    errorMessage.textContent = "Something went wrong with the server!";
    errorModal.classList.remove('hidden');
  });

  setTimeout(() => {
    errorModal.classList.add('hidden');
  }, 3000);

  fullHeart.addEventListener('click', () => {
    emptyHeart.classList.remove('activated-heart');
    fullHeart.classList.add('hidden');
  });

//function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  //return new Promise(function(resolve, reject) {
    //setTimeout(function() {
      //let isRandomFailure = Math.random() < .2
      //if (isRandomFailure) {
        //reject("Random server error. Try again.");
      //} else {
        //resolve("Pretend remote server notified of action!");
      //}
    //}, 300);
  //});
//}

document.addEventListener("DOMContentLoaded", () => {
  const errorModal = document.getElementById("modal");
  errorModal.classList.add("hidden");

  const hearts = document.querySelectorAll(".like-glyph");

  function mimicServerCall() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomNum = Math.random();
        if (randomNum < 0.5) {
          resolve("success");
        } else {
          reject("error");
        }
      }, 300);
    });
  }

  function toggleLike(event) {
    const heart = event.target;
    mimicServerCall()
      .then(() => {
        heart.classList.toggle("activated-heart");
        if (heart.innerHTML === "♡") {
          heart.innerHTML = "♥";
        } else {
          heart.innerHTML = "♡";
        }
      })
      .catch(() => {
        errorModal.classList.remove("hidden");
        const errorMessage = document.getElementById("modal-message");
        errorMessage.innerText = "Server Error";
        setTimeout(() => {
          errorModal.classList.add("hidden");
        }, 3000);
      });
  }

  hearts.forEach((heart) => {
    heart.addEventListener("click", toggleLike);
  });
});