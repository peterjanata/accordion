import "../sass/index.scss";

function activeOnLoad(titleTab, contentTab) {
  var titleTab = document.querySelector(".accordion-head");
  var contentTab = document.querySelector(".accordion-content");
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

function hideAll(allTitles, allContents) {
  var allTitles = document.querySelectorAll(".accordion-head");
  var allContents = document.querySelectorAll(".accordion-content");

  for (var i = 0, y = 0; i < allTitles.length, y < allContents.length; i++, y++) {
    allTitles[i].classList.remove("active");
    allContents[y].classList.remove("active");
  }
}

window.onload = function() {
  if (document.querySelector(".accordion")) {
    activeOnLoad();
  }
};

document.addEventListener('click',function(event){
  var target = event.target || event.srcElement;

  if (target.parentNode.classList.contains("accordion-head")) {
    var targetTitle = target.parentNode;
    var targetContent = targetTitle.nextElementSibling;

    if (targetTitle.classList.contains("active")) {
      hideTarget(targetTitle, targetContent);
    } else {
      hideAll();
      showTarget(targetTitle, targetContent);
    }
  }
}, true);

document.addEventListener('keyup',function(event){
  var targetTitle = event.target || event.srcElement;
  var targetContent = targetTitle.nextElementSibling;

  if (targetTitle.classList.contains("accordion-head")) {
    if (targetTitle.classList.contains("active")) {
      hideTarget(targetTitle, targetContent);
    } else {
      hideAll();
      showTarget(targetTitle, targetContent);
    }
  }
}, true);
