window.addEventListener('DOMContentLoaded', (event) => {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.carousel__slide');
    const totalSlides = slides.length;

    slides[currentIndex].classList.add('active'); // Make the first slide active

    document.querySelector('#prev').addEventListener('click', () => {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalSlides - 1;
        slides[currentIndex].classList.add('active');
    });

    document.querySelector('#next').addEventListener('click', () => {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : 0;
        slides[currentIndex].classList.add('active');
    });

    document.getElementById('homeBtnn').onclick = function () {
        location.href = 'index.html';
    };
});

window.addEventListener('DOMContentLoaded', (event) => {
    let listItems = document.querySelectorAll('#myList li');
    let displayImage = document.getElementById('displayImage');
  
    listItems.forEach((item) => {
      item.addEventListener('click', (event) => {
        displayImage.src = item.dataset.imgSrc; // Sets the image source
        displayImage.style.display = 'block'; // Makes the image visible
      });
    });
  });

const homeBtn = document.getElementById('homeBtnn');
const galleryBtn = document.getElementById('galleryBtn');

homeBtn.addEventListener('click', () => {
    window.location.href = 'index.html';
    console.log('home');
});

galleryBtn.addEventListener('click', () => {
    window.location.href = 'gallery.html';
    console.log('gallery');
});


// select the image
var mapImage = document.querySelector('.map');

// add click event
mapImage.addEventListener('click', function() {
    window.location.href = "https://www.google.com/maps/place/Av.+Benjam%C3%ADn+Franklin+46,+Escand%C3%B3n+I+Secc,+Miguel+Hidalgo,+11800+Ciudad+de+M%C3%A9xico,+CDMX/@19.4068646,-99.1845503,17z/data=!3m1!4b1!4m6!3m5!1s0x85d1ff677bd17055:0x2ca6eb66f37140fb!8m2!3d19.4068596!4d-99.1819754!16s%2Fg%2F11c1yq3n1n?entry=ttu";
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