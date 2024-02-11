const popup = document.querySelector(".popup")

window.onload = () => setTimeout(() => {
    popup.classList.add("active");
}, 1000);

document.addEventListener("click", () => {
    popup.classList.remove("active")
})