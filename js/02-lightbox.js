import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryRefs = document.querySelector(".gallery");
console.log(galleryRefs);

function addGalleryItems(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<a class="gallery__item" href="${original}">
                <img class="gallery__image" 
                src="${preview}" 
                alt="${description}" />
            </a>`
    )
    .join("");
  // console.log(galleryItems);
}

// galleryRefs.innerHTML = galleryItems;

galleryRefs.insertAdjacentHTML("beforeend", addGalleryItems(galleryItems));

galleryRefs.addEventListener("click", openModal);

function openModal(event) {
  event.preventDefault();

  //

  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  let gallery = new SimpleLightbox(".gallery__item");

  gallery.on("show.simplelightbox", function () {
    const { options } = gallery;

    options.captionsData = "alt";
    options.captionDelay = 250;
  });
}
