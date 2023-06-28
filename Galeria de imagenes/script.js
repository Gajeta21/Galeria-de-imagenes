const thumbnails = document.querySelectorAll('.thumbnail');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const closeBtn = document.querySelector('.close');

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', function() {
    const imageURL = this.getAttribute('src');
    lightboxImage.setAttribute('src', imageURL);
    lightbox.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', function() {
  lightbox.style.display = 'none';
});
