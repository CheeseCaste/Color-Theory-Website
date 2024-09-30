
let bars = document.querySelector("#bars")
let sidebar = document.querySelector(".sidebar")


bars.onclick = function() {
    sidebar.classList.toggle("active");
}