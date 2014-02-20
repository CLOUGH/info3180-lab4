var img = document.getElementsByTagName('img')[0];

img.style.left = '0px';
var walkForwards = true;
var audio = new Audio(document.URL+"static/lion.mp3");

function catWalk() {
  
  var currentLeft = parseInt(img.style.left);; 
  var direction =  "forwards";

  if (walkForwards && (currentLeft > (window.innerWidth-img.width))) {
    walkForwards = false;
  }
  if (!walkForwards && (currentLeft <= 0)) {
    walkForwards = true;
  }
  
  if (walkForwards) {
    currentLeft = currentLeft + 10;
    direction =  "forwards";
  } else {
    currentLeft = currentLeft - 10;
    direction =  "backwards";
  }
  img.style.left = currentLeft  + 'px';  
  if (localStorage.getItem("infiniteScrollEnabled") === null) {
    // create the local storage for the cat position
    localStorage.setItem('currentLeft', JSON.stringify(currentLeft));
  }
  

  localStorage.setItem('currentDirection', JSON.stringify(direction));
  
}

  img.onmouseover=function(){  
    audio.play();
  };
window.setInterval(catWalk, 50);
