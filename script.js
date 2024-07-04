const next = document.getElementById("next")
const prev = document.getElementById("prev")
const carouselElement = document.querySelectorAll(".carouselElement")

let count = 1

function updateSlide() {
  carouselElement.forEach((element) => {
    element.style.transform = `translateX(-${count * 100}%)`
  })
  if (count === carouselElement.length - 1) {
    count = 0
  } else if (count === 0) {
    count = carouselElement.length - 1
  }

}

prev.addEventListener("click", updateSlide)
next.addEventListener("click", updateSlide)




