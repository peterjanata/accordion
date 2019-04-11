import "../sass/index.scss";

function activeOnLoad() {
  const titleTab = document.querySelector(".accordion-head");
  const contentTab = document.querySelector(".accordion-content");
  titleTab.classList.add("active");
  contentTab.classList.add("active");
}

function showTarget(targetTitle, targetContent) {
  targetTitle.classList.add("active");
  targetContent.classList.add("active");
}

function hideTarget(targetTitle, targetContent) {
  targetTitle.classList.remove("active");
  targetContent.classList.remove("active");
}

function hideAll() {
  const allTitles = document.querySelectorAll(".accordion-head");
  const allContents = document.querySelectorAll(".accordion-content");

  for (
    let i = 0, y = 0;
    i < allTitles.length, y < allContents.length;
    i++, y++
  ) {
    allTitles[i].classList.remove("active");
    allContents[y].classList.remove("active");
  }
}

window.onload = function() {
  if (document.querySelector(".accordion")) {
    activeOnLoad();
  }
};

document.addEventListener(
  "click",
  function(event) {
    const target = event.target || event.srcElement;

    if (target.parentNode.classList.contains("accordion-head")) {
      let targetTitle = target.parentNode;
      let targetContent = targetTitle.nextElementSibling;

      if (targetTitle.classList.contains("active")) {
        hideTarget(targetTitle, targetContent);
      } else {
        hideAll();
        showTarget(targetTitle, targetContent);
      }
    }
  },
  true
);

document.addEventListener(
  "keyup",
  function(event) {
    let targetTitle = event.target || event.srcElement;
    let targetContent = targetTitle.nextElementSibling;

    if (targetTitle.classList.contains("accordion-head")) {
      if (targetTitle.classList.contains("active")) {
        hideTarget(targetTitle, targetContent);
      } else {
        hideAll();
        showTarget(targetTitle, targetContent);
      }
    }
  },
  true
);
