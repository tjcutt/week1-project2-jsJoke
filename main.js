// Knock Knock JS Code:

// replace .hide within the HTML
 document.getElementById("joke-part2").classList.add("hide");
 document.getElementById("button2").classList.add("hide");
 document.getElementById("joke-part3").classList.add("hide");
 document.getElementById("button3").classList.add("hide");
 document.getElementById("ghost-photo").classList.add("hide");

// When user clicks first button, show second part
document.getElementById("button1").addEventListener("click", function() {
  document.getElementById("joke-part2").classList.add("show");
  document.getElementById("button2").classList.add("show");
  document.getElementById("joke-part1").classList.add("hide");
  document.getElementById("button1").classList.add("hide");
});

document.getElementById("button2").addEventListener("click", function() {
  document.getElementById("joke-part3").classList.add("show");
  document.getElementById("joke-part2").classList.remove("show");
  document.getElementById("button2").classList.remove("show");
  setTimeout(function () {document.getElementById("button3").classList.add("show");
}, 2000);
});
// When adding this element of code the photo appears immediately and not when it is called (i.e., when clicking the button)
// document.getElementById("button3").addEventListener("click", function() {
//   document.getElementById("ghost-photo").classList.add("show");
//   document.getElementById("joke-part3").classList.remove("show");
//   document.getElementById("button3").classList.remove("show");
//   )}
