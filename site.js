/* Cygnus Strategy — progressive enhancement only.
   Nothing here is required to read the page; JS adds the disclosures,
   the mobile menu, and the single entrance animation. */
(function () {
  "use strict";

  // Wrap each layer body so the 0fr -> 1fr grid transition has one child row.
  document.querySelectorAll(".layer-body").forEach(function (body) {
    var inner = document.createElement("div");
    inner.className = "layer-body-inner";
    while (body.firstChild) inner.appendChild(body.firstChild);
    body.appendChild(inner);
  });

  // Layer disclosures. aria-expanded on the button is the source of truth;
  // the .open class on the <li> drives the transition.
  document.querySelectorAll(".layer-head").forEach(function (head) {
    var layer = head.closest(".layer");
    var body = layer.querySelector(".layer-body");

    // Height is driven in pixels so the transition has two real endpoints,
    // then released to auto so the panel reflows with the viewport.
    body.addEventListener("transitionend", function (e) {
      if (e.propertyName === "height" && layer.classList.contains("open")) {
        body.style.height = "auto";
      }
    });

    head.addEventListener("click", function () {
      var open = head.getAttribute("aria-expanded") === "true";
      head.setAttribute("aria-expanded", String(!open));
      layer.classList.toggle("open", !open);

      if (open) {
        body.style.height = body.scrollHeight + "px";
        requestAnimationFrame(function () {
          requestAnimationFrame(function () {
            body.style.height = "0px";
          });
        });
      } else {
        body.style.height = body.scrollHeight + "px";
      }
    });
  });

  // Mobile menu.
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("sitenav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("open", !open);
    });
    // Close after following an in-page link, so the menu does not cover the target.
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        toggle.setAttribute("aria-expanded", "false");
        nav.classList.remove("open");
      }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("open")) {
        toggle.setAttribute("aria-expanded", "false");
        nav.classList.remove("open");
        toggle.focus();
      }
    });
  }

  document.documentElement.classList.add("js-ready");
})();
