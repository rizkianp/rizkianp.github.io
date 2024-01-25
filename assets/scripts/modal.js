//get the modal
let modal = document.getElementById("modal01");
let img = document.getElementById("img01");

function onClick(element) {
    if (element.classList.contains("done")) {
        return;
    } else {
        img.src = element.src;
        modal.style.display = "block";
    }
    
}


let span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    modal.style.display = "none";
}
img.onclick = function () {
    modal.style.display = "none";
}

let totalJamaah = 1284
document.getElementById("jamaah").innerHTML = totalJamaah

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
    currentHajjImage.src = hajjImages[currentIndex]
}

