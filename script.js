// Lightbox functionality
const lightContainer = document.getElementById('lightbox');
const lightImg = document.getElementById('lightbox-img');
const closeLightbox = document.getElementById('close-btn');

document.querySelectorAll('.thumbnail').forEach(thumb => {
    thumb.onclick = () => {
        lightImg.src = thumb.dataset.full;
        lightContainer.classList.add('show');
    };
});

closeLightbox.onclick = () => {
    lightContainer.classList.remove('show');
};