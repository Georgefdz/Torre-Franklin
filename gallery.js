window.addEventListener('DOMContentLoaded', (event) => {
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const myList = document.getElementById('myList');
    let isMarginLarge = false;  // A flag to keep track of the current state

    hamburgerMenu.addEventListener('click', () => {
        document.querySelector('#myList').style.paddingTop = '5%';
        myList.classList.toggle('show');
        if (isMarginLarge) {
            document.querySelector('.corte').style.marginTop = '20%';
            isMarginLarge = false;
        } else {
            document.querySelector('.corte').style.marginTop = '70%';
            isMarginLarge = true;
        }
    });

    const homeBtn2 = document.getElementById('homeBtn2');
    homeBtn2.addEventListener('click', () => {
        window.location.href = 'index.html';
    });

    const galleryBtn2 = document.getElementById('galleryBtn2');
    galleryBtn2.addEventListener('click', () => {
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
        document.querySelector('.cont-1').style.gridTemplateRows = "20vh 20vh 20vh";
        defaultImage.style.display = 'none'; // Hide the default image
        displayImage.src = item.dataset.imgSrc; // Sets the image source
        displayImage.style.display = 'block'; // Makes the image visible
        displayImage.style.marginTop = '25%';
      });
    });
});

hamburgerMenu.addEventListener('click', () => {
    dropdownMenu.innerHTML = myList.innerHTML;
    dropdownMenu.style.display = dropdownMenu.style.display === 'none' ? 'block' : 'none';
});
