"use strict";

const navLinks = document.querySelector(".wrapper-nav");
const openMenuIcon = document.querySelector(".icon-menu");
const closeMenuIcon = document.querySelector(".icon-close-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const bookmark = document.querySelector(".bookmark");

// MOBILE MENU MECHANICS
mobileMenu.addEventListener("click", function () {
	console.log("click");
	navLinks.classList.toggle("visible");
	openMenuIcon.classList.toggle("hidden");
	closeMenuIcon.classList.toggle("hidden");
});

// BOOKMARK MECHANICS
bookmark.addEventListener("click", function () {
	bookmark.classList.toggle("bookmark--active");
	const bookmarkText = bookmark.querySelector(".bookmark-text");

	if (bookmark.classList.contains("bookmark--active")) {
		bookmarkText.textContent = "Bookmarked";
	} else {
		bookmarkText.textContent = "Bookmark";
	}
});
