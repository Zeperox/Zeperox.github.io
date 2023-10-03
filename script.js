var buttonHome = document.getElementById("buttonHome");
var buttonProjects = document.getElementById("buttonProjects");
// var buttonHome = document.getElementById("buttonHome");

// Get a reference to the section you want to scroll to
var home = document.getElementById("home");
var projects = document.getElementById("projects");

var offset = 70;

// Add a click event listener to the button
buttonHome.addEventListener("click", function() {
    // Scroll to the section with the specified offset
    window.scrollTo({
        top: home.offsetTop - offset,
        behavior: "smooth" // "smooth" for smooth scrolling
    });
});

buttonProjects.addEventListener("click", function() {
    // Scroll to the section with the specified offset
    window.scrollTo({
        top: projects.offsetTop - offset,
        behavior: "smooth" // "smooth" for smooth scrolling
    });
});