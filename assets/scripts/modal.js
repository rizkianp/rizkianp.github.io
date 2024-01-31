//get the modal
let modal = document.getElementById("modal01");
let img = document.getElementById("img01");
let modal_snk = document.getElementById("modal02");
let nav = document.getElementById("nav");


function disableScroll() {
    // get current page scroll position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    // if any scroll attempted, set this to previous value
    window.onscroll = function () {
        window.scrollTo(scrollLeft, scrollTop);
    };
  topButton.animate(fadeOut, fadeTiming).onfinish = function () {
    topButton.style.display = "none";  
  };
  waButton.animate(fadeOut, fadeTiming).onfinish = function () {
    waButton.style.display = "none";  
  };
}

function enableScroll() {
  window.onscroll = function () {
    scrollFunction();
  };
}

function onClick(element) {
    if (element.classList.contains("done")) {
        return;
    } else {
        img.src = element.src;
        modal.style.display = "block";
        disableScroll();
    }    
}

function onClickSnk() {
  modal_snk.style.display = "block";
  disableScroll();
}

function closeSnk() {
  modal_snk.animate(fadeOut,fadeTiming).onfinish = function () {
    modal_snk.style.display = "none";
  };
  enableScroll();
}

let span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    modal.style.display = "none";
    enableScroll();
}
img.onclick = function () {
    modal.style.display = "none";
    enableScroll();
}

//when button clicked, scroll to top

let topButton = document.getElementById("button_top");
let waButton = document.getElementById("button_wa");

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

  if (scrollTop > 800 && topButton.style.display !== "block") {
    // Button becomes visible, play fade-in animation
    topButton.style.display = "block";
    waButton.style.display = "block";
    nav.style.display = "flex";
    topButton.animate(fadeIn, fadeTiming);
    waButton.animate(fadeIn, fadeTiming);
    nav.animate(fadeIn, fadeTiming);
  } else if (scrollTop <= 30 && topButton.style.display !== "none") {
    // Button becomes not visible, play fade-out animation
    topButton.animate(fadeOut, fadeTiming).onfinish = function () {
      topButton.style.display = "none";
    };
    waButton.animate(fadeOut, fadeTiming).onfinish = function () {
      waButton.style.display = "none";
    };
    nav.animate(fadeOut, fadeTiming).onfinish = function () {
      nav.style.display = "none";
    };
  }
}

function goToTop() {
    document.body.scrollTop = 0; //For Safari
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
}

// Total Jamaah
let totalJamaah = 1284;
document.getElementById("jamaah").innerHTML = totalJamaah;
// click to page section

function goToSection(id) {
    let section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({behavior: 'smooth'});
    }
}

// change hajj brochure
const hajjImages = ["assets/img/haji.jpg", "assets/img/hajj01.jpeg", "assets/img/hajj01a.jpeg"];
let currentIndex = 0;

// ensure index stay within bounds
function nextImg(x) {
    currentIndex += x;

    if (currentIndex < 0) {
        currentIndex = hajjImages.length -1;
    } else if (currentIndex >= hajjImages.length) {
        currentIndex = 0;
    }
    // update image source
    const currentHajjImage = document.getElementById("img_haji");

    // slide animation
    
    const slideAmount = x > 0 ? "-0.5%" : "0.5%";
    currentHajjImage.style.transform = `translateX(${slideAmount})`;

    setTimeout(() => {
        currentHajjImage.src = hajjImages[currentIndex];
        currentHajjImage.style.transform = 'translateX(0)';
    }, 100);

}


// SplideJS Initialization
document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '#splideumrah', {
    perPage: 4,
    breakpoints: {
      992: {
        perPage: 3,
      },
      820: {
        perPage: 2,
      },
      600: {
        perPage: 1,
      },
    },
    focus  : 0,
    omitEnd: true,
    } );
  splide.mount();

  var splide2 = new Splide( '#splidehaji', {
    perPage: 1,
    focus  : 0,
    omitEnd: true,
    } );
  splide2.mount();

  var splide3 = new Splide('#dokumentasi', {
    perPage: 4,
    breakpoints: {
      992: {
        perPage: 3,
      },
      820: {
        perPage: 2,
      },
      600: {
        perPage: 1,
      },
    },
    focus: 0,
    omitEnd: true,
  } );
  splide3.mount();

  var splide4 = new Splide('#testimoni', {
    perPage: 4,
    breakpoints: {
      992: {
        perPage: 3,
      },
      820: {
        perPage: 2,
      },
      600: {
        perPage: 1,
      },
    },
    video: {
      loop: true,
    },
    focus: 0,
    omitEnd: true,
  } );
  splide4.mount(window.splide.Extensions);
} );
