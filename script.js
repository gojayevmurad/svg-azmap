let paths = document.querySelectorAll("path");
let box = document.querySelector(".box");
let svg = document.querySelector("svg");

window.addEventListener("mousemove", (e) => {
  box.style.top = e.clientY + 20 + "px";
  box.style.left = e.clientX + 20 + "px";
});

paths.forEach((path) => {
  path.addEventListener("mouseenter", (e) => {
    box.classList.remove("hide");
    let name = e.target.getAttribute("name");
    box.innerHTML = name;
    path.style.fill = "green";
  });

  path.addEventListener("mouseleave", (e) => {
    path.style.fill = "";
  });
});

svg.addEventListener("mouseleave", () => {
  box.classList.add("hide");
});
