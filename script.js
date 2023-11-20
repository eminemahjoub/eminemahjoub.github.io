let menuVisible = false;

// Function to show or hide the menu
function toggleMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

// Function to handle selection
function selectItem() {
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// Function to apply skills animations
function applySkillsAnimation() {
    var skillsSection = document.getElementById("skills");
    var distanceToSkills = window.innerHeight - skillsSection.getBoundingClientRect().top;
    
    if (distanceToSkills >= 300) {
        let skillsElements = document.getElementsByClassName("progress");
        skillsElements[0].classList.add("javascript");
        skillsElements[1].classList.add("htmlcss");
        skillsElements[2].classList.add("photoshop");
        skillsElements[3].classList.add("wordpress");
        skillsElements[4].classList.add("drupal");
        skillsElements[5].classList.add("communication");
        skillsElements[6].classList.add("teamwork");
        skillsElements[7].classList.add("creativity");
        skillsElements[8].classList.add("dedication");
        skillsElements[9].classList.add("project");
    }
}

// Detect scrolling to apply skills bar animation
window.onscroll = function() {
    applySkillsAnimation();
}
