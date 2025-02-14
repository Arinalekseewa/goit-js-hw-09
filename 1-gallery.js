import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{S as g}from"./assets/vendor-CgTBfC_f.js";const o=[{preview:"../img/img-1.webp",original:"./img/img-1-large.webp",description:"Brain Storm"},{preview:"./img/img-2.webp",original:"./img/img-2-large.webp",description:"Bulb"},{preview:"./img/img-3.webp",original:"./img/img-3-large.webp",description:"Phone"},{preview:"./img/img-4.webp",original:"./img/img-4-large.webp",description:"Loft Office"},{preview:"./img/img-5.webp",original:"./img/img-5-large.webp",description:"Coworking"},{preview:"./img/img-6.webp",original:"./img/img-6-large.webp",description:"Office"},{preview:"./img/img-7.webp",original:"./img/img-7-large.webp",description:"Notebook"},{preview:"./img/img-8.webp",original:"./img/img-8-large.webp",description:"Working Woman"},{preview:"./img/img-9.webp",original:"./img/img-9-large.webp",description:"Meeting"}],e=document.querySelector("ul.gallery");if(e){const r=o.map(i=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${i.original}">
          <img class="gallery-image" 
               src="${i.preview}" 
               data-source="${i.original}" 
               alt="${i.description}" />
        </a>
      </li>`).join("");e.innerHTML=r,new g(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8,showCounter:!0})}else console.error("Галерея не знайдена!");
//# sourceMappingURL=1-gallery.js.map
