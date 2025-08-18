const profileWrap = document.querySelector(".profileWrap");
const headerTitle = document.querySelector(".headerTitle");

profileWrap.addEventListener("mouseenter", () => {
	headerTitle.classList.add("hide");
});

profileWrap.addEventListener("mouseleave", () => {
	headerTitle.classList.remove("hide");
});
