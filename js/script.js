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
	overlay.classList.add("hidden");
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
