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