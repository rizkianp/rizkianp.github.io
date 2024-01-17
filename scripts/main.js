let done = false

function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  document.getElementById("caption").innerHTML = element.alt;
}

// logo image
let logo = document.getElementById("logo_header")
// center text
let logo_text = document.getElementById("logo_text")
// logo button
let logo_button = document.getElementById("logo_button")

// scroll to top button:
let topButton = document.getElementById("btntop")

// sticky header variable
let header = document.getElementById("myheader")
let sticky = header.offsetTop;

// Define fade-in and fade-out animations
const fadeIn = [
  { opacity: 0 },
  { opacity: 1 }
];

const fadeOut = [
  { opacity: 1 },
  { opacity: 0 }
];

const fadeTiming = {
  duration: 200, // Adjust the duration as needed
  iterations: 1
};

// when scroll down 30px from top, show the button with fade-in animation
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

  if (scrollTop > 30 && topButton.style.display !== "block") {
    // Button becomes visible, play fade-in animation
    topButton.style.display = "block";
    topButton.animate(fadeIn, fadeTiming);
  } else if (scrollTop <= 30 && topButton.style.display !== "none") {
    // Button becomes not visible, play fade-out animation
    topButton.animate(fadeOut, fadeTiming).onfinish = function () {
      topButton.style.display = "none";
    };
  }

  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    logo_button.classList.replace('wa_button', 'wa_button_none')
    logo.src ="images/logo_dh_mini.png";
    logo.style.maxWidth ='30px';
    logo.style.maxHeight = '30px';
    logo.style.verticalAlign ='middle';
    logo_text.style.fontSize = '18px';
    logo_text.style.position = 'relative';
    logo_text.style.color = '#1D2B53';
  }
    else {
      header.classList.remove("sticky");
      logo_button.classList.replace('wa_button_none', 'wa_button')
      logo.src ="images/logo_dh.png";
      logo.style.maxWidth ='233.8px';
      logo.style.maxHeight = '52.5px';
      logo_text.style.fontSize = '28px';
      logo_text.style.position = 'relative';
      logo_text.style.color = '#FFFFFF';
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