const container = document.querySelectorAll(".carousel-content");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const dotsContainer = document.querySelector(".dots-container");

let currentIndex = 0;

for (let i = 0; i < container.length; i++) {
  const dot = document.createElement("div");
  dot.setAttribute("class", "dots");
  dotsContainer.append(dot);
}

const dots = document.querySelectorAll(".dots");
dots.forEach((item, index) => {
  if (index == currentIndex) {
    item.style.backgroundColor = "blue";
  } else {
    item.style.backgroundColor = "rgb(0, 255, 247)";
  }
});

dots.forEach((item, index)=>{
    item.addEventListener('click', ()=>{
        currentIndex = index;
        if(index == currentIndex){
            
        }
    })
})

window.addEventListener("load", () => {
  setInterval(() => {
    container[currentIndex].style.display = "none";
    currentIndex++;
    dots.forEach((item, index) => {
      if (index == currentIndex) {
        item.style.backgroundColor = "blue";
      } else {
        item.style.backgroundColor = "white";
      }
      if (currentIndex >= container.length) {
        currentIndex = 0;
        container[currentIndex].style.display = "block";
        item.style.backgroundColor = "blue";
      } else {
        container[currentIndex].style.display = "block";
      }
    });
  }, 2000);
});

nextBtn.addEventListener("click", () => {
  container[currentIndex].style.display = "none";
  currentIndex++;
  dots.forEach((item, index) => {
    // console.log(index);
    if (index == currentIndex) {
      item.style.backgroundColor = "blue";
    } else {
      item.style.backgroundColor = "rgb(0, 255, 247)";
    }
    if (currentIndex >= container.length) {
      currentIndex = 0;
      container[currentIndex].style.display = "block";
      item.style.backgroundColor = "blue";
    } else {
      container[currentIndex].style.display = "block";
    }
  });
});

prevBtn.addEventListener("click", () => {
  container[currentIndex].style.display = "none";
  decrement(currentIndex);
  dots.forEach((item, index) => {
    if (index == currentIndex) {
      item.style.backgroundColor = "blue";
    } else {
      item.style.backgroundColor = "rgb(0, 255, 247)";
    }
    if (currentIndex == 0) {
      currentIndex = 0;
      container[currentIndex].style.display = "block";
      item.style.backgroundColor = "blue";
    } else {
      container[currentIndex].style.display = "block";
    }
  });
});

function decrement(index){
    if(index == 0){
        // do nothing
    }else{
        currentIndex--;
    }
}
