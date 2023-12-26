/*Multiple Buttons for Activities*/
function show(id) { 
    var x = document.getElementById(id);
        if (x.className == 'hide') {
            x.className = '';
        }

        else if (x.className == '') {
            x.className = 'hide';
        }
}

// Common code for both sets of pictures
function navigateImages(imageArray, imageElement, nextButton, prevButton) {
    let index = 0;

    function nextIndex() {
        index++;
        if (index >= imageArray.length) {
            index = 0;
        }
    }

    function prevIndex() {
        index--;
        if (index < 0) {
            index = imageArray.length - 1;
        }
    }

    function updateImage() {
        imageElement.setAttribute('src', imageArray[index]);
    }

    nextButton.addEventListener('click', () => {
        nextIndex();
        updateImage();
    });

    prevButton.addEventListener('click', () => {
        prevIndex();
        updateImage();
    });

    updateImage(); // Initialize with the first image
}

// MNight Images
const mnight = document.querySelector('img#mnight-image');
const mnightNextBtn = document.querySelector('#next-mnight');
const mnightPrevBtn = document.querySelector('#prev-mnight');
const mnightImages = [
    "img\\mnight\\ending-image-.jpeg",
    "img\\mnight\\behind-the-scenes.jpeg",
    "img\\mnight\\dahlia-and-normala.jpeg",
    "img\\mnight\\dancers.jpeg",
    "img\\mnight\\final-pic.jpeg",
    "img\\mnight\\folklore-1.jpeg",
    "img\\mnight\\hefiz-and-kat.jpeg",
    "img\\mnight\\Politics-1.png",
    "img\\mnight\\night-market.jpeg",
    "img\\mnight\\ain-dayanaa-and-alya.jpeg",
    "img\\mnight\\folklore-2.jpeg",
    "img\\mnight\\insta-makeup.jpeg",
    "img\\mnight\\MicrosoftTeams-image-71.png",
    "img\\mnight\\props-team.jpg",
    "img\\mnight\\the-people.jpeg",
    "img\\mnight\\zack-and-ata.jpeg"
];
navigateImages(mnightImages, mnight, mnightNextBtn, mnightPrevBtn);

// Sports Images
const sports = document.querySelector('img#sports-image');
const sportsNextBtn = document.querySelector('#next-sports');
const sportsPrevBtn = document.querySelector('#prev-sports');
const sportsImages = [
    "img\\sotong_gmaes\\P1024470.JPG",
    "img\\sotong_gmaes\\P1024324.JPG",
    "img\\sotong_gmaes\\P1024364.JPG",
    "img\\sotong_gmaes\\P1024420.JPG",
    "img\\sotong_gmaes\\P1024430.JPG",
    "img\\sotong_gmaes\\P1024495.JPG",
    "img\\sotong_gmaes\\P1024502.JPG",
    "img\\sotong_gmaes\\P1024561.JPG",
    "img\\sotong_gmaes\\P1024571.JPG",
    "img\\sotong_gmaes\\P1024577.JPG",
    "img\\sotong_gmaes\\P1024598.JPG",
    "img\\sotong_gmaes\\P1024640.JPG",
    "img\\sotong_gmaes\\P1024703.JPG",
    "img\\sotong_gmaes\\P1034767.JPG"
];
navigateImages(sportsImages, sports, sportsNextBtn, sportsPrevBtn);

// Socials Images
const socials = document.querySelector('img#socials-image');
const socialsNextBtn = document.querySelector('#next-socials');
const socialsPrevBtn = document.querySelector('#prev-socials');
const socialsImages = [

    "img\\socials\\P1034793.JPG",
    "img\\socials\\P1034786.JPG",
    "img\\socials\\P1034787.JPG",
    "img\\socials\\P1034795.JPG",
    "img\\socials\\P1034797.JPG",
    "img\\socials\\P1034798.JPG",
    "img\\socials\\P1034800.JPG",
    "img\\socials\\P1034806.JPG"

];
navigateImages(socialsImages, socials, socialsNextBtn, socialsPrevBtn);

// Family System Images
const fs = document.querySelector('img#fs-image');
const fsNextBtn = document.querySelector('#next-fs');
const fsPrevBtn = document.querySelector('#prev-fs');
const fsImages = [

    // edit image source here 
    "img\\mnight\\gambar.jpg",

];
navigateImages(fsImages, fs, fsNextBtn, fsPrevBtn);

// Jom Makan Card Images
const jm = document.querySelector('img#jm-image');
const jmNextBtn = document.querySelector('#next-jm');
const jmPrevBtn = document.querySelector('#prev-jm');
const jmImages = [

    // edit image source here 
    "img\\jom_makan.jpeg",

];
navigateImages(jmImages, jm, jmNextBtn, jmPrevBtn);
