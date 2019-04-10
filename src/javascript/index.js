import "../sass/index.scss";

window.onload = function() {
  var titleActive = document.querySelector(".accordion-head");
  titleActive.classList.add("active");

  var contentActive = document.querySelector(".accordion-content");
  contentActive.classList.add("active");

  document.onclick = function(event) {
    var target = event.target || event.srcElement;

    if (target.parentNode.classList.contains("accordion-head")) {
      var title = target.parentNode;
      var content = title.nextElementSibling;

      if (title.classList.contains("active")) {
        title.classList.remove("active");
        content.classList.remove("active");
      } else {
        var titles = document.querySelectorAll(".accordion-head");
        var contents = document.querySelectorAll(".accordion-content");

        for (var i = 0; i < titles.length; i++) {
          titles[i].classList.remove("active");
        }

        for (var i = 0; i < contents.length; i++) {
          contents[i].classList.remove("active");
        }

        title.classList.add("active");
        content.classList.add("active");
      }
    }
  };
};
