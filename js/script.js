// Smooth Scrolling Logic

const links = document.querySelectorAll(".navbar ul a");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop; //get the top position of elem in px

  scroll({
    top: offsetTop,
    behavior: "smooth",
  });
}

// Display More Content
const loadmore = document.querySelector("#explore-all");
let currentItems = 2;
loadmore.addEventListener("click", (e) => {
  e.preventDefault();
  const elementList = [
    ...document.querySelectorAll(".deals__deals .deals__img-container"),
  ];
  if (e.target.textContent == "Explore All") {
    for (let i = currentItems; i < currentItems + 2; i++) {
      if (elementList[i]) {
        elementList[i].style.display = "block";
      }
    }
    currentItems += 2;

    // Load more button will become ShowLess
    if (currentItems >= elementList.length) {
      event.target.textContent = "Show Less";
    }
  } else {
    for (let item of elementList) {
      item.style.display = "none";
    }
    elementList[0].style.display = "block";
    elementList[1].style.display = "block";
    e.target.textContent = "Explore All";
    currentItems = 2;
  }
});

// Scroll to top
// document.getElementById("scrollTop").addEventListener("click", () => {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// });
