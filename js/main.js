document.addEventListener("DOMContentLoaded", function () {
  var carousels = document.querySelectorAll(".carousel");
  carousels.forEach(function (car) {
    var slides = car.querySelectorAll(".c-slide");
    var dots = car.querySelector(".c-dots");
    var current = 0;

    if (slides.length > 0) {
      slides.forEach(function (_, i) {
        var d = document.createElement("button");
        d.type = "button";
        d.setAttribute("aria-label", "Слайд " + (i + 1));
        if (i === 0) d.classList.add("active");
        d.addEventListener("click", function () { go(i); });
        dots.appendChild(d);
      });

      function go(i) {
        current = (i + slides.length) % slides.length;
        slides.forEach(function (s, j) {
          s.classList.toggle("active", j === current);
        });
        dots.querySelectorAll("button").forEach(function (d, j) {
          d.classList.toggle("active", j === current);
        });
      }

      var prev = car.querySelector(".c-prev");
      var next = car.querySelector(".c-next");
      prev.addEventListener("click", function () { go(current - 1); });
      next.addEventListener("click", function () { go(current + 1); });

      window.setInterval(function () { go(current + 1); }, 6000);
    }
  });

  var burger = document.querySelector(".burger");
  var nav = document.querySelector(".nav");
  if (burger && nav) {
    burger.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
      });
    });
  }

  if (location.hash) {
    var target = document.querySelector(location.hash);
    if (target) {
      window.setTimeout(function () {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 60);
    }
  }

  var els = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("revealed");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach(function (el) { io.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add("revealed"); });
  }
});