var img = document.getElementsByTagName('img')[0];

img.style.left = '0px';
var walkForwards = true;
var audio = new Audio(document.URL+"static/lion.mp3");

function catWalk() {
  
  var currentLeft =0;
  var direction =  "forwards";
  if (localStorage.getItem("currentLeft") === null) {
    currentLeft = parseInt(img.style.left);
  }
  else{
    currentLeft = parseInt(localStorage.getItem("currentLeft"));
  }  

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
  localStorage.setItem('currentLeft', JSON.stringify(currentLeft));
  localStorage.setItem('currentDirection', JSON.stringify(direction));
  
}

  img.onmouseover=function(){  
    audio.play();
  };
window.setInterval(catWalk, 50);
