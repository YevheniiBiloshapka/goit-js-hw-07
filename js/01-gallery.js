import { galleryItems } from "./gallery-items.js";
/* Создай галерею с возможностью клика по её элементам и просмотра полноразмерного изображения 
в модальном окне. Посмотри демо видео работы галереи.

Выполняй это задание в файлах 01-gallery.html и 01-gallery.js. Разбей его на несколько подзадач:

* 1. Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
* 2. Реализация делегирования на div.gallery и получение url большого изображения.
* 3. Подключение скрипта и стилей библиотеки модального окна basicLightbox. Используй CDN сервис jsdelivr 
* и добавь в проект ссылки на минифицированные (.min) файлы библиотеки.
* 4. Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
* 5. Замена значения атрибута src элемента <img> в модальном окне перед открытием. 
*6. Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox. */

const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", openModalWindow);

const cardImg = createImgCard(galleryItems);

gallery.insertAdjacentHTML("beforeend", cardImg);
function createImgCard(items) {
  return items
    .map(({ preview, description, original }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

function openModalWindow(event) {
  event.preventDefault();
  const imageEl = event.target.classList.contains("gallery__image");
  if (!imageEl) {
    return;
  }
  basicLightbox
    .create(
      `<img src = "${event.target.dataset.source}" alt="${event.target.alt}" width="800" height="600" />`
    )
    .show();
}
