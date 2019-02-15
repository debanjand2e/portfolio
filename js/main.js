function loadImage(id, targetId) {
  var el = document.getElementById(id);
  var targetEl = targetId ? document.getElementById(targetId) : el;
  var imageToLoad;
  if (el.dataset.image) {
    imageToLoad = el.dataset.image;
  } else if (typeof el.currentSrc === "undefined") {
    imageToLoad = el.src;
  } else {
    imageToLoad = el.currentSrc;
  }
  if (imageToLoad) {
    var img = new Image();
    img.src = imageToLoad;
    img.onload = function() {
      targetEl.classList.add("is-loaded");
    };
  }
}

document.addEventListener("DOMContentLoaded", function() {
  loadImage("wallpaper");
  loadImage("pictureImage", "picture");
});

(function() {
  function typeWriter(text, n) {
    if (n < text.length) {
      document.querySelector(".test").innerText = text.substring(0, n + 1);
      n++;
      setTimeout(function() {
        typeWriter(text, n);
      }, 50);
    }
  }

  var text = document.querySelector(".test").getAttribute("data-text");

  setTimeout(function() {
    typeWriter(text, 0);
  }, 500);
})();
