function libIt() {
  var storyDiv = document.getElementById("story");
  var name = document.getElementById("name").value;
  var adjective = document.getElementById("adjective").value;
  var noun = document.getElementById("noun").value;

  var phrases = name + " married a " + adjective + " " + noun + "... So weird!";
  localStorage.setItem('phrases', JSON.stringify(phrases));
  storyDiv.innerHTML = localStorage.getItem("phrases");
  
}

var libButton = document.getElementById('lib-button');
libButton.addEventListener('click', libIt);

document.getElementById("noun").onchange = function() {
	localStorage.setItem('noun', JSON.stringify(document.getElementById("noun").value) );
}

document.getElementById("name").onchange = function() {
	localStorage.setItem('name', JSON.stringify(document.getElementById("name").value) );
}
document.getElementById("adjective").onchange = function() {
	localStorage.setItem('adjective', JSON.stringify(document.getElementById("adjective").value) );
}
