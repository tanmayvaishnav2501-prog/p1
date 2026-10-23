// Display a welcome message
window.addEventListener("load", function () {
    console.log("Welcome to ABC College of Technology!");
});

// Smooth navigation and section highlighting
document.querySelectorAll("center a").forEach(function (link) {
    link.addEventListener("click", function () {
        const sectionName = this.textContent.trim();

        if (sectionName === "Home") {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    });
});

// Interactive course list
document.querySelectorAll("body > ul li").forEach(function (course) {
    course.style.cursor = "pointer";

    course.addEventListener("click", function () {
        const courseName = this.textContent.trim();

        alert("You selected: " + courseName);
    });
});

// Highlight latest news when clicked
document.querySelectorAll("body > ol li").forEach(function (news) {
    news.style.cursor = "pointer";

    news.addEventListener("click", function () {
        this.classList.toggle("selected-news");

        if (this.classList.contains("selected-news")) {
            this.style.backgroundColor = "#d9f3ff";
        } else {
            this.style.backgroundColor = "";
        }
    });
});

