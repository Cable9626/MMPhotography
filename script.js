const images = document.querySelectorAll('.lightbox-trigger');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

// Function to change image with fade
function changeImage(index) {
    lightboxImg.classList.add("fade-out");

    setTimeout(() => {
        lightboxImg.src = images[index].src;
        lightboxImg.classList.remove("fade-out");
    }, 200);
}

// Open Lightbox
images.forEach((img, index) => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
        currentIndex = index;
    });
});

// Next image
nextBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= images.length) currentIndex = 0;
    changeImage(currentIndex);
});

// Previous image
prevBtn.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) currentIndex = images.length - 1;
    changeImage(currentIndex);
});

// Close when clicking background
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {

    if (lightbox.style.display === "flex") { // Only if lightbox is open

        if (e.key === "ArrowRight") {
            currentIndex++;
            if (currentIndex >= images.length) currentIndex = 0;
            changeImage(currentIndex);
        }

        if (e.key === "ArrowLeft") {
            currentIndex--;
            if (currentIndex < 0) currentIndex = images.length - 1;
            changeImage(currentIndex);
        }

        if (e.key === "Escape") {
            lightbox.style.display = "none";
        }

    }

});