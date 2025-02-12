document.getElementById("menu-btn").addEventListener("click", function () {
    let sidebar = document.getElementById("sidebar");
    if (sidebar.classList.contains("hidden")) {
        sidebar.classList.remove("hidden");
        sidebar.classList.add("visible");
    } else {
        sidebar.classList.remove("visible");
        sidebar.classList.add("hidden");
    }
});
