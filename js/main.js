const firstImg = document.querySelector("#first-img");
const secondImg = document.querySelector("#second-img");
const thirdImg = document.querySelector("#third-img");
const fourthImg = document.querySelector("#fourth-img");
const fifthImg = document.querySelector("#fifth-img");

firstImg.style.visibility = "hidden";
secondImg.style.visibility = "hidden";
thirdImg.style.visibility = "hidden";
fourthImg.style.visibility = "hidden";
fifthImg.style.visibility = "hidden";

const firstImgWP = new Waypoint({
  element: firstImg,
  handler: function (direction) {
    if (direction === "down") {
      firstImg.classList.add("animate__animated", "animate__fadeInRight");
      firstImg.style.setProperty("--animate-duration", "1.75s");
      firstImg.style.visibility = "visible";
    }
  },
  offset: "bottom-in-view",
});

const secondImgWP = new Waypoint({
  element: secondImg,
  handler: function (direction) {
    if (direction === "down") {
      secondImg.classList.add("animate__animated", "animate__fadeInLeft");
      secondImg.style.setProperty("--animate-duration", "1.75s");
      secondImg.style.visibility = "visible";
    }
  },
  offset: "bottom-in-view",
});
const thirdImgWP = new Waypoint({
  element: thirdImg,
  handler: function (direction) {
    if (direction === "down") {
      thirdImg.classList.add("animate__animated", "animate__fadeInUp");
      thirdImg.style.setProperty("--animate-duration", "1.75s");
      thirdImg.style.visibility = "visible";
    }
  },
  offset: "bottom-in-view",
});

const fourthImgWP = new Waypoint({
  element: fourthImg,
  handler: function (direction) {
    if (direction === "down") {
      fourthImg.classList.add("animate__animated", "animate__fadeInUp");
      fourthImg.style.setProperty("--animate-duration", "1.75s");
      fourthImg.style.visibility = "visible";
    }
  },
  offset: "bottom-in-view",
});

const fifthImgWP = new Waypoint({
  element: fifthImg,
  handler: function (direction) {
    if (direction === "down") {
      fifthImg.classList.add("animate__animated", "animate__fadeInRight");
      fifthImg.style.setProperty("--animate-duration", "1.75s");
      fifthImg.style.visibility = "visible";
    }
  },
  offset: "bottom-in-view",
});
// ----------------------------------------------------
// display on button push
const thanksDiv = document.querySelector("#on-button");
const button = document.querySelector("#margin-here > button");

button.addEventListener("click", () => {
  thanksDiv.style.display = "flex";
});

// ----------------------------------------------------
// burger
document.addEventListener("DOMContentLoaded", function () {
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener("click", function () {
        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});
