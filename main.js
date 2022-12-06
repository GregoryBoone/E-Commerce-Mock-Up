//Chang color of nav links
const colorToggle = document.querySelectorAll('.nav-link');

for(let i = 0; i < colorToggle.length; i++){
  colorToggle[i].addEventListener('mouseover', function handleMouseOver(){colorToggle[i].style.color = '#f9b7a9';});

colorToggle[i].addEventListener('mouseout', function handleMouseOver(){colorToggle[i].style.color = '#fff';});
}

//Change mouse on green arrows
const arrow = document.getElementsByClassName("tagline");

function changeCursor() {
  arrow.style.cursor = "pointer";
}

arrow.onmouseover = changeCursor();
