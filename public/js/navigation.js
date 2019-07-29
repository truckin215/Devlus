const progress = document.getElementById("progress"),
    navBar = document.getElementById("links"),
    linkCount = document.getElementsByTagName("li"),
    oneLink = navBar.offsetWidth / linkCount.length;

progress.offsetWidth = Math.ceil(oneLink) + "px";
linkCount[0].classList.add("active");

function red(pos, link) {
    for (var i = 0; i < linkCount.length; i++) {
        linkCount[i].classList.remove("active");
    }
    progress.style.width = oneLink * pos + "px";
    link.classList.add("active");
}

// RELOAD ON RESIZE
window.onresize = function() {
    location.reload();
};
