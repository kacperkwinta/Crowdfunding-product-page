"use strict";

console.log(123);

const navLinks = document.querySelector(".wrapper-nav");
const openMenuIcon = document.querySelector(".icon-menu");
const closeMenuIcon = document.querySelector(".icon-close-menu");

openMenuIcon.addEventListener("click", function () {
	console.log("click");
	navLinks.classList.toggle("visible");
	openMenuIcon.classList.add("hidden");
	closeMenuIcon.classList.toggle("hidden");
});
