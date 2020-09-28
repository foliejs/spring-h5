window.onload = function () {
    const audio = document.getElementsByTagName("audio")[0];
    audio.autoplay = true;

    const first = document.getElementsByClassName("first")[0];
    const second = document.getElementsByClassName("second")[0];
    const third = document.getElementsByClassName("third")[0];

    first.addEventListener("touchstart", function () {
        first.style.display = "none";
        second.style.display = "block";
        third.style.display = "block";
    }, false)

    setTimeout(function () {
        second.setAttribute("class", "page second fadeout");
        third.setAttribute("class", "page third fadeIn");
    }, 5200)
}