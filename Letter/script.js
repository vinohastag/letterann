const cover = document.getElementById("cover");
const letter = document.getElementById("letter");

document.getElementById("openBtn").addEventListener("click", () => {
    cover.style.transform = "translateX(-100%)";
    letter.style.transform = "translateX(0)";
});

document.getElementById("backBtn").addEventListener("click", () => {
    cover.style.transform = "translateX(0)";
    letter.style.transform = "translateX(100%)";
});