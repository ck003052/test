document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll("img");

  for (const image of images) {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(responce => responce.json())
      .then(data => {
        image.src = data.message
        image.height = auto;
        image.width = auto;
      })
  }
})