"use strict";

const navLinks = document.querySelector(".wrapper-nav");
const openMenuIcon = document.querySelector(".icon-menu");
const closeMenuIcon = document.querySelector(".icon-close-menu");
const mobileMenu = document.querySelector(".mobile-menu");

mobileMenu.addEventListener("click", function () {
	console.log("click");
	navLinks.classList.toggle("visible");
	openMenuIcon.classList.toggle("hidden");
	closeMenuIcon.classList.toggle("hidden");
});
