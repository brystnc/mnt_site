const headerBtn = document.getElementById("header_btn");
const navbar = document.getElementById("navbar");

headerBtn.addEventListener("click", () => {
  navbar.classList.toggle("hidden");
  if (navbar.classList.contains("hidden")) {
    document.body.style.position = "fixed";
  } else {
    document.body.style.position = "fixed";
    document.body.style.top = `-${window.scrollY}px`;
    const scrollY = document.body.style.top;
    document.body.style.position = "";
    document.body.style.top = "";
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
  }
});

document.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
