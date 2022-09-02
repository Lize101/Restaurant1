
const smallMenu = document.querySelector(".smallMenu");

const verticalMenu = () => {
    const links = document.getElementById("links");
    if (links.style.display === "block") {
        links.style.display = "none";
    } else {
        links.style.display = "block";
    }
}


