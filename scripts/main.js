let done = false

function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  document.getElementById("caption").innerHTML = element.alt;
}

// scroll to top button:
let topButton = document.getElementById("btntop")

// when scroll down 30px from top show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

//when button clicked, scroll to top
function goToTop() {
  document.body.scrollTop = 0; //For Safari
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  })
}