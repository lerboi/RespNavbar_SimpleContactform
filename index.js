console.log("connected to js")

//click on icon to toggle add class to navbar__toggle
const menu = document.querySelector(".navbar__icon")
menu.addEventListener("click", () => {
    const navtoggle = document.querySelector(".navbar__toggle")
    navtoggle.classList.toggle("toggle")
})