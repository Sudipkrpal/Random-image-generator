const imgContEl = document.querySelector(".image-container");
const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", () => {
  newImgNo = 4;
  addnewImg();
});

function addnewImg() {
  for (let i = 0; i < newImgNo; i++) {
    const newImgEl = document.createElement("img");
    newImgEl.src = `https://picsum.photos/300?${Math.floor(
      Math.random() * 2000
    )}`;
    imgContEl.appendChild(newImgEl);
  }
}
