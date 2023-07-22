"use strict";
//////////////////////////////////////////////////////////////////////
// For menu
//////////////////////////////////////////////////////////////////////
const navLinks = document.querySelector(".wrapper-nav");
const mobileMenu = document.querySelector(".mobile-menu");
const openMenuIcon = mobileMenu.querySelector(".icon-menu");
const closeMenuIcon = mobileMenu.querySelector(".icon-close-menu");
const overlay = document.querySelector(".overlay");

// Mobile menu show/hide
mobileMenu.addEventListener("click", toggleMenu);

// Hide menu when clicking outside navLinks or on a menu link
document.addEventListener("click", function (event) {
	if (!navLinks.contains(event.target) && !mobileMenu.contains(event.target)) {
		hideMenu();
	}
});

// Handle clicks on menu links
navLinks.addEventListener("click", function (event) {
	if (event.target.tagName === "A") {
		// event.target.tagName returns CAPITALIZED tag name, that's why we want "A" instead of "a"
		console.log(event.target.tagName);
		hideMenu();
	}
});

// Toggle menu visibility
function toggleMenu() {
	navLinks.classList.toggle("visible");
	openMenuIcon.classList.toggle("hidden");
	closeMenuIcon.classList.toggle("hidden");
	overlay.classList.toggle("hidden");
}

// Hide menu
function hideMenu() {
	navLinks.classList.remove("visible");
	openMenuIcon.classList.remove("hidden");
	closeMenuIcon.classList.add("hidden");
}

//////////////////////////////////////////////////////////////////////
// For sections
//////////////////////////////////////////////////////////////////////
const bookmark = document.querySelector(".bookmark");

bookmark.addEventListener("click", function () {
	bookmark.classList.toggle("bookmark--active");
	const bookmarkText = bookmark.querySelector(".bookmark-text");

	if (bookmark.classList.contains("bookmark--active")) {
		bookmarkText.textContent = "Bookmarked";
	} else {
		bookmarkText.textContent = "Bookmark";
	}
});

//////////////////////////////////////////////////////////////////////
// For dialog
//////////////////////////////////////////////////////////////////////

// big dialog window with all support options
const btnShowModal = document.querySelector(".btn--modal");
const iconCloseModal = document.querySelector(".icon-close-dialog");
const dialog = document.querySelector(".dialog--back-project");
const btnsSelectReward = document.querySelectorAll(".btn--select-reward");

btnShowModal.addEventListener("click", function () {
	dialog.showModal();
});

iconCloseModal.addEventListener("click", function () {
	dialog.close();
});

dialog.addEventListener("click", (e) => {
	const dialogDimensions = dialog.getBoundingClientRect();
	if (
		e.clientX < dialogDimensions.left ||
		e.clientX > dialogDimensions.right ||
		e.clientY < dialogDimensions.top ||
		e.clientY > dialogDimensions.bottom
	) {
		dialog.close();
	}
});

btnsSelectReward.forEach((btn) =>
	btn.addEventListener("click", function () {
		dialog.showModal();
	})
);

//////////////////////////////////////////////////////////////////////
// For selected back
//////////////////////////////////////////////////////////////////////
const dots = document.querySelectorAll(".dot");
const products = document.querySelectorAll(".product");
const donates = document.querySelectorAll(".donate");

// remove active class from all elements
function removeActive() {
	products.forEach((item) => {
		item.classList.remove("product--active");
	});

	dots.forEach((dot) => {
		dot.classList.remove("dot-fill");
	});

	donates.forEach((donate) => {
		donate.classList.add("hidden");
	});
}

// add active class to clicked product
function addActive(e) {
	removeActive();

	const product = e.currentTarget;

	if (product.classList.contains("product--unavailable")) return;
	product.classList.add("product--active");

	const dot = product.querySelector(".dot");
	dot.classList.add("dot-fill");

	const donate = product.querySelector(".donate");
	donate.classList.remove("hidden");
}

products.forEach((item) => {
	item.addEventListener("click", addActive);
});

// modal window after click continue in selected support option
const modalThanks = document.querySelector(".modal-thanks");
const buttonDonate = document.querySelectorAll(".btn--donate");
const buttonGotIt = document.querySelector(".btn--got-it");

buttonDonate.forEach((button) =>
	button.addEventListener("click", function () {
		dialog.close();
		modalThanks.showModal();
	})
);

buttonGotIt.addEventListener("click", function () {
	modalThanks.close();
});

//////////////////////////////////////////////////////////////////////
// For inputs
//////////////////////////////////////////////////////////////////////
function limitInputToThreeDigits(input) {
	if (input.value.length > 3) {
		input.value = input.value.slice(0, 3);
	}
}
