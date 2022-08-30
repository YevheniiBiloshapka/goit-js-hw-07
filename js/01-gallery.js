import { galleryItems } from "./gallery-items.js";
/* Создай галерею с возможностью клика по её элементам и просмотра полноразмерного изображения 
в модальном окне. Посмотри демо видео работы галереи.

Выполняй это задание в файлах 01-gallery.html и 01-gallery.js. Разбей его на несколько подзадач:

* 1. Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
* 2. Реализация делегирования на div.gallery и получение url большого изображения.
* 3. Подключение скрипта и стилей библиотеки модального окна basicLightbox. Используй CDN сервис jsdelivr 
* и добавь в проект ссылки на минифицированные (.min) файлы библиотеки.
* 4. Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
5. Замена значения атрибута src элемента <img> в модальном окне перед открытием. 
6. Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox. */

// const { preview, original, description } = galleryItems;

const gallery = document.querySelector(".gallery");
const cardImg = createImgCard(galleryItems);

gallery.insertAdjacentHTML("beforeend", cardImg);
gallery.addEventListener("click", galleryImageClick);

function createImgCard(items) {
  return items
    .map(({ preview, description }) => {
      return `<img
        class="gallery__image"
		
        src="${preview}"
        alt="${description}"
        width="320px"
      />`;
    })
    .join("");
}

function galleryImageClick(event) {
  const imageEl = event.target.classList.contains("gallery__image");
  if (!imageEl) {
    return;
  }
  // ! -------------------------------------
  createModalWindow(event.target);
}

function createModalWindow(elementName) {
  const newElement = elementName;
  newElement.classList.remove("gallery__image");
  newElement.classList.add("gallery__link");
  newElement.src = `${original}`;

  basicLightbox.create(newElement).show();
  //   `<img width="1400" height="900" src="https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg">`
  console.log(newElement);
}
