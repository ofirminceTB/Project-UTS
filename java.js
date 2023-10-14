const mobileMenuButton = document.getElementById('mobile-menu');
const navbarLinks = document.getElementById('navbar-links');

mobileMenuButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('show');
});
 /* javascript Home */
const head = document.getElementById("toggle-header");
const paragraph = document.getElementById("hidden-paragraph");
paragraph.style.display="none"
head.addEventListener("click", function () {
    if (paragraph.style.display === "none" || paragraph.style.display === "") {
        paragraph.style.display = "block";
    } else {
        paragraph.style.display = "none";
    }
});
const h1 = document.getElementById('toggle');
const t1 = document.getElementById('hidden');
t1.style.display="none"
h1.addEventListener("click", function () {
    if (t1.style.display === "none" || t1.style.display === "") {
        t1.style.display = "block";
    } else {
        t1.style.display = "none";
    }
});

const h2 = document.getElementById('header');
const t2 = document.getElementById('paragraph');
t2.style.display="none"
h2.addEventListener("click", function () {
    if (t2.style.display === "none" || t2.style.display === "") {
        t2.style.display = "block";
    } else {
        t2.style.display = "none";
    }
});

const h3 = document.getElementById('note');
const t3 = document.getElementById('book');
t3.style.display="none"
h3.addEventListener("click", function () {
    if (t3.style.display === "none" || t3.style.display === "") {
        t3.style.display = "block";
    } else {
        t3.style.display = "none";
    }
});

const h4 = document.getElementById('read');
const t4 = document.getElementById('now');
t4.style.display="none"
h4.addEventListener("click", function () {
    if (t4.style.display === "none" || t4.style.display === "") {
        t4.style.display = "block";
    } else {
        t4.style.display = "none";
    }
});

/* javascript untuk dom*/

function changeColor() {
    var colorInput = document.getElementById('colorInput').value;
    var boxes = document.querySelectorAll('.right-column .box');

    for (var i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = colorInput;
    }
}
function addNewColor() {
    var colorInput = document.getElementById('colorInput').value;
    var colorBoxes = document.getElementById('colorBox');
    var newBox = document.createElement('div');
    newBox.className = 'box';
    newBox.textContent = colorInput;
    colorBoxes.appendChild(newBox);
}

function addFooterBox() {
    var colorBoxes = document.getElementById('colorBox');
    var newBox = document.createElement('div');
    newBox.className = 'box';
    newBox.textContent = 'footer';
    colorBoxes.appendChild(newBox);
}

/* javascript layout */