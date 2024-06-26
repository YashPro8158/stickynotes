let note = document.getElementById("note");
let topnav = document.getElementById("topnav");
let bottomnav = document.getElementById("bottomnav");
let boldbtn = document.getElementById("bold")
let italicbtn = document.getElementById("italic")
let underlinebtn = document.getElementById("underline")
let cutbtn = document.getElementById("cut")
let closenote = document.getElementById("closenote");
let sticky = document.getElementById("sticky");
let coloroptions = document.getElementById("coloroptions");
let coloroptionbox = document.getElementById("coloroption");
let addsticky = document.getElementById("addsticky");
coloroptions.addEventListener("click", function () {
    coloroptionbox.style.top = "0%"
})
coloroptionbox.addEventListener("click", function () {
    coloroptionbox.style.top = "-20%"
})
boldbtn.addEventListener("click", function () {
    note.style.fontWeight = "bolder";
})
italicbtn.addEventListener("click", function () {
    note.style.fontStyle = "italic";
})
underlinebtn.addEventListener("click", function () {
    note.style.textDecoration = "underline";
})
cutbtn.addEventListener("click", function () {
    note.style.textDecoration = "line-through";
})

// Color Option Click Effects
let yellow = document.getElementById("yellow")
yellow.addEventListener("click", function () {
    topnav.style.background = "#f0932b";
    note.style.background = "#f6e58d";
    bottomnav.style.background = "#f6e58d";
})

let green = document.getElementById("green")
green.addEventListener("click", function () {
    topnav.style.background = "#00b894";
    note.style.background = "#55efc4";
    bottomnav.style.background = "#00b894";
})

let pink = document.getElementById("pink")
pink.addEventListener("click", function () {
    topnav.style.background = "#be2edd";
    note.style.background = "#fd79a8";
    bottomnav.style.background = "#be2edd";
})

let purple = document.getElementById("purple")
purple.addEventListener("click", function () {
    topnav.style.background = "#4834d4";
    note.style.background = "#a29bfe";
    bottomnav.style.background = "#4834d4";
})


let blue = document.getElementById("blue")
blue.addEventListener("click", function () {
    topnav.style.background = "#1e85ca";
    note.style.background = "#74b9ff";
    bottomnav.style.background = "#1e85ca";
})

let gray = document.getElementById("gray")
gray.addEventListener("click", function () {
    topnav.style.background = "#535c68";
    note.style.background = "#b2bec3";
    bottomnav.style.background = "#535c68";
})
let charcoal = document.getElementById("charcoal")
charcoal.addEventListener("click", function () {
    topnav.style.background = "#2d3436";
    note.style.background = "#636e72";
    bottomnav.style.background = "#2d3436";
    note.ariaPlaceholder.style.color = "white";
})


closenote.addEventListener("click", function () {
    sticky.style.display = "none";
    addsticky.style.display = "block";
})
addsticky.addEventListener("click", function () {
    sticky.style.display = "block";
})