import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"; 


const images = [
  {
    preview:
      '../img/img-1.webp',
    original:
      './img/img-1-large.webp',
    description: 'Brain Storm',
  },
  {
    preview:
      './img/img-2.webp',
    original:
      './img/img-2-large.webp',
    description: 'Bulb',
  },
  {
    preview:
      './img/img-3.webp',
    original:
      './img/img-3-large.webp',
    description: 'Phone',
  },
  {
    preview:
      './img/img-4.webp',
    original:
      './img/img-4-large.webp',
    description: 'Loft Office',
  },
  {
    preview:
      './img/img-5.webp',
    original:
      './img/img-5-large.webp',
    description: 'Coworking',
  },
  {
    preview:
      './img/img-6.webp',
    original:
      './img/img-6-large.webp',
    description: 'Office',
  },
  {
    preview:
      './img/img-7.webp',
    original:
      './img/img-7-large.webp',
    description: 'Notebook',
  },
  {
    preview:
      './img/img-8.webp',
    original:
      './img/img-8-large.webp',
    description: 'Working Woman',
  },
  {
    preview:
      './img/img-9.webp',
    original:
      './img/img-9-large.webp',
    description: 'Meeting',
  },
];

const gallery = document.querySelector("ul.gallery");

if (gallery) {
  const markup = images
    .map((image) => `
      <li class="gallery-item">
        <a class="gallery-link" href="${image.original}">
          <img class="gallery-image" 
               src="${image.preview}" 
               data-source="${image.original}" 
               alt="${image.description}" />
        </a>
      </li>`).join("");

  gallery.innerHTML = markup;

  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    overlayOpacity: 0.8,
    showCounter: true,
  });

} else {
  console.error("Галерея не знайдена!");
};
