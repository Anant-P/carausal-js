

const displayImg = document.getElementById("DisplayImg") // slectes display img element
const allImgEl = document.querySelectorAll(".thumb") // selects all .thumb className images element
const srcList = Array.from(allImgEl).map(eachItem => eachItem.src) // create a list of selected images element src(path) list


// initial variable
let currentIndex = 0;
// let intervelId 



// show img to display image
function ShowImg(index) {
    displayImg.src = srcList[index]

    // border add remove 

      allImgEl.forEach(eachItem=>eachItem.classList.remove("active"))
     allImgEl[index].classList.add("active")

}

// image auto play
// function autoChangeImg() {
//     intervelId = setInterval(() => {

//         if (currentIndex < srcList.length - 1) {
//             ShowImg(currentIndex += 1)
//         }
//         if (currentIndex === srcList.length - 1) {
//             currentIndex = -1
//         }
//     }, 3000);
// }

// autoChangeImg()


// tubnail click to show img
allImgEl.forEach((thumb, index) => {
    thumb.addEventListener("click", () => {
        // clearInterval(intervelId)
        ShowImg(index)
        // autoChangeImg()
        currentIndex = index
    })
})

// image button control prev and next
 function prevClick() {
     if (currentIndex > 0) {
//         // clearInterval(intervelId)
        ShowImg(currentIndex -= 1)   
//         // autoChangeImg()
        }}







// }
function nextClick() {
    if (currentIndex < srcList.length - 1) {
//         clearInterval(intervelId)
       ShowImg(currentIndex += 1)
//         autoChangeImg()
    }

}

//end


