const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;
const gap = 20;

function updateSlider() {
    const slideWidth = slides[0].offsetWidth + gap;
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

    prevBtn.style.display = currentIndex === 0 ? "none" : "block";
}

nextBtn.addEventListener("click", () => {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateSlider();
});

prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = slides.length - 1;
    }
    updateSlider();
});

updateSlider();

function goMenu(){
    window.location.href="menu.html";
}
