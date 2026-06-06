const displayImg = document.getElementById("DisplayImg");
const allImgEl = document.querySelectorAll(".thumb");

const srcList = Array.from(allImgEl).map(item => item.src);

// Initial variables
let currentIndex = 0;
let intervalId;

// Show image
function ShowImg(index) {
    displayImg.src = srcList[index];

    // Active border
    allImgEl.forEach(item => item.classList.remove("active"));
    allImgEl[index].classList.add("active");
}

// Auto play
function autoChangeImg() {
    intervalId = setInterval(() => {
        currentIndex++;

        if (currentIndex >= srcList.length) {
            currentIndex = 0;
        }

        ShowImg(currentIndex);
    }, 3000);
}

// Start autoplay
ShowImg(currentIndex);
autoChangeImg();

// Thumbnail click
allImgEl.forEach((thumb, index) => {
    thumb.addEventListener("click", () => {
        clearInterval(intervalId);

        currentIndex = index;
        ShowImg(currentIndex);

        autoChangeImg();
    });
});

// Previous button
function prevClick() {
    clearInterval(intervalId);

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = srcList.length - 1;
    }

    ShowImg(currentIndex);
    autoChangeImg();
}

// Next button
function nextClick() {
    clearInterval(intervalId);

    currentIndex++;

    if (currentIndex >= srcList.length) {
        currentIndex = 0;
    }

    ShowImg(currentIndex);
    autoChangeImg();
}
