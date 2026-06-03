const lightbox = document.querySelector("#lightbox");
const lightboxImage = lightbox?.querySelector(".lightbox-image");
const triggers = document.querySelectorAll("[data-lightbox]");

if (lightbox && lightboxImage && triggers.length > 0) {
  triggers.forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      event.preventDefault();

      const image = trigger.querySelector("img");
      if (!image) {
        return;
      }

      lightboxImage.src = trigger.getAttribute("href") || image.src;
      lightboxImage.alt = image.alt;
      lightbox.showModal();
    });
  });

  lightbox.addEventListener("click", (event) => {
    const target = event.target;
    if (target === lightbox) {
      lightbox.close();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox.open) {
      lightbox.close();
    }
  });
}
