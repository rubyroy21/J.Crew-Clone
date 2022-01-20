const slideShowImages = document.querySelectorAll(".intro .slideshow-img");

const nextImageDelay = 2000;
let currentImageCounter = 0;

slideShowImages[currentImageCounter].style.display = "block";
setInterval(nextImage, nextImageDelay)
function nextImage() {
    slideShowImages[currentImageCounter].style.display = "none ";
    currentImageCounter = (currentImageCounter + 1) % slideShowImages.length;
    slideShowImages[currentImageCounter].style.display = "block";
}
//Get the button
var my_button = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        my_button.style.display = "block";
    } else {
        my_button.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Modal for LOGIN/SIGNUP part
var modalBtn = document.querySelector(".modal-btn");
var modalBg = document.querySelector(".modal-bg");
var modalCl = document.querySelector(".modal-close");

modalBtn.addEventListener("click", function () {
    modalBg.classList.add("bg-active");
});

modalCl.addEventListener("click", function () {
    modalBg.classList.remove("bg-active");
});

// OTP part
var modalBtn1 = document.querySelector(".modal-btn1");
var modalBg1 = document.querySelector(".modal-bg1");
var modalCl1 = document.querySelector(".modal-close1");

modalBtn1.addEventListener("click", function () {
    modalBg1.classList.add("bg-active1");
});

modalCl1.addEventListener("click", function () {
    modalBg1.classList.remove("bg-active1");
});

var userArr = JSON.parse(localStorage.getItem("userData")) || [];
function Register() {
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;

    let userProfile = {
        emailAddress: email,
        password: pass,
    };

    userArr.push(userProfile);
    localStorage.setItem("userData", JSON.stringify(userArr));
}

// var regUser = JSON.parse(localStorage.getItem("userData"));
// console.log(regUser)
function login() {
    let email = document.getElementById("user-email").value;
    let pass = document.getElementById("user-password").value;

    for (var i = 0; i < userArr.length; i++) {
        if (userArr[i].emailAddress === email && userArr[i].password === pass) {
            alert("Login Successful");
            window.location.href = "afterLogin.html"
            return true;
        }
    }
    for (var i = 0; i < userArr.length; i++) {
        if (userArr[i].emailAddress != email || userArr[i].password != pass) {
            alert("Invalid Credentials");
            return true;
        }
    }
}