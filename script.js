function $(dom) {
  return document.querySelector(dom);
}
const navBtn = $("#nav-toggle");
const nav = $("#nav-hide");
// const navRm = $("#nav-remove");

navBtn.addEventListener("click", () => {
  const show = nav.classList.toggle("active");
  if (show) {
    navBtn.textContent = "✖";
  } else {
    navBtn.textContent = "𝌆";
  }
});
// navRm.addEventListener("click", () => {
//   nav.classList.remove("active");
// });
