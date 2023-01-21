import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryRefs = document.querySelector(".gallery");
console.log(galleryRefs);

function addGalleryItems(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    )
    .join("");
  // console.log(galleryItems);
}

// galleryRefs.innerHTML = galleryItems;

galleryRefs.insertAdjacentHTML("beforeend", addGalleryItems(galleryItems));

galleryRefs.addEventListener("click", openModal);

// function openModal(event) {
//   event.preventDefault();

//   if (!event.target.classList.contains("IMG")) {
//     return;
//   }

//   const instance = basicLightbox.create(`
//     <img src="${event.target.dataset.source}" width="800" height="600">
// `);

//   instance.show();

//   close(instance);
// }

function openModal(event) {
  event.preventDefault();
  // Перевірка чи клік містить картинку
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  // Відкриття
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);
  instance.show();
  // Закриття
  document.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
}
