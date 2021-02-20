const bookmark = document.querySelector(".crowdfund__bookmark-cta");
const modal__close = document.querySelector(".modal__close");
const backproject = document.getElementById("back-project");
const body = document.body;

bookmark.addEventListener("click", () => {
	console.log("test :>> ");
	if (bookmark.classList.contains("active")) {
		return bookmark.classList.remove("active");
	}

	bookmark.classList.add("active");
});

backproject.addEventListener("click", (event) => {
	console.log("test 2 :>> ");
	event.preventDefault();
	if (body.classList.contains("show-modal")) {
		body.classList.remove("no-scroll");
		return body.classList.remove("show-modal");
	}

	body.classList.add("no-scroll");
	body.classList.add("show-modal");
});

modal__close.addEventListener("click", (event) => {
	event.preventDefault();
	body.classList.remove("no-scroll");
	return body.classList.remove("show-modal");
});
