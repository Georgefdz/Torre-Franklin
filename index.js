window.addEventListener('DOMContentLoaded', (event) => {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.carousel__slide');
    const totalSlides = slides.length;
    let touchStartX = 0;
    let touchEndX = 0;

    slides[currentIndex].classList.add('active'); // Make the first slide active

    function switchSlideToLeft() {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : 0;
        slides[currentIndex].classList.add('active');
    }

    function switchSlideToRight() {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalSlides - 1;
        slides[currentIndex].classList.add('active');
    }

    document.querySelector('#prev').addEventListener('click', switchSlideToRight);
    document.querySelector('#next').addEventListener('click', switchSlideToLeft);

    slides.forEach(slide => {
        slide.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        slide.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            if (touchEndX < touchStartX) {
                switchSlideToLeft();
            }
            if (touchEndX > touchStartX) {
                switchSlideToRight();
            }
        });
    });

    const homeBtn = document.getElementById('homeBtn');
    homeBtn.addEventListener('click', () => {
        window.location.href = 'index.html';
    });

    const galleryBtn = document.getElementById('galleryBtn');
    galleryBtn.addEventListener('click', () => {
        window.location.href = 'gallery.html';
    });

});

window.addEventListener('DOMContentLoaded', (event) => {
    let listItems = document.querySelectorAll('#myList li');
    let displayImage = document.getElementById('displayImage');
    let defaultImage = document.querySelector('.corte img');
  
    // Show the default image
    defaultImage.style.display = 'block';
    displayImage.style.display = 'none';

    listItems.forEach((item) => {
      item.addEventListener('click', (event) => {
        document.querySelector('.corte').style.gridrow = 2/3;
        document.querySelector('.corte').style.border = 'none';
        document.querySelector('.corte').style.background = 'none';
        defaultImage.style.display = 'none'; // Hide the default image
        displayImage.src = item.dataset.imgSrc; // Sets the image source
        displayImage.style.display = 'block'; // Makes the image visible
      });
    });
});

// select the image
var mapImage = document.querySelector('.map');

// add click event
mapImage.addEventListener('click', function() {
    window.open("https://www.google.com/maps/place/Av.+Benjam%C3%ADn+Franklin+46,+Escand%C3%B3n+I+Secc,+Miguel+Hidalgo,+11800+Ciudad+de+M%C3%A9xico,+CDMX/@19.4068646,-99.1845503,17z/data=!3m1!4b1!4m6!3m5!1s0x85d1ff677bd17055:0x2ca6eb66f37140fb!8m2!3d19.4068596!4d-99.1819754!16s%2Fg%2F11c1yq3n1n?entry=ttu", "_blank");
});

// select the form
var contactForm = document.querySelector('#contactForm');

// add submit event
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    var name = document.querySelector('#name').value;
    var email = document.querySelector('#email').value;
    var message = document.querySelector('#message').value;

    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Message: " + message);
});

const hamburgerMenu = document.getElementById('hamburgerMenu');
const dropdownMenu = document.getElementById('dropdownMenu');
const myList = document.getElementById('myList');

hamburgerMenu.addEventListener('click', () => {
    dropdownMenu.innerHTML = myList.innerHTML;
    dropdownMenu.style.display = dropdownMenu.style.display === 'none' ? 'block' : 'none';
});
