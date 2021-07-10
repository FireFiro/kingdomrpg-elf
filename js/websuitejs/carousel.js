feather.replace()

const nextEl = document.getElementById("next");
const previousEl = document.getElementById("previous");
const sliderEl = document.getElementById("slider");
//const imgWidth = sliderEl.offsetWidth;
nextEl.addEventListener("click", onNextClick);
previousEl.addEventListener("click", onPreviousClick);

function onNextClick() {
  const imgWidth = sliderEl.offsetWidth;
  sliderEl.scrollLeft += imgWidth;
}
function onPreviousClick() {
  const imgWidth = sliderEl.offsetWidth;
  sliderEl.scrollLeft -= imgWidth;
}

createGallery()
function createGallery() {
    gallery.forEach(e => {
      addEventRPG(e)
    })
}

function addEventRPG(event) {
  document.querySelector("#slider").insertAdjacentHTML(`afterbegin`, `<img class="image" name="${event.name}" date="${event.date}" src="${event.image}" alt="">`)
}

$("document").ready(function () {
  gallery.forEach(gallery => {
  $(".image").mousemove(function (e) {
    let name = $(this).attr("name")
    let date = $(this).attr("date")
    let info = `<p>Название: ${name}</p>
    <p>Дата: ${date}</p>`
    let hover = document.getElementById("hover");
      hover.style.display = "block"
      hover.innerHTML = info
      hover.style.top = (e.pageY - 30) + "px";
      hover.style.left = (e.pageX + 20) + "px";
  });
  $(".image").mouseleave(function () {
      hover.style.display = "none"
  });
  })
});