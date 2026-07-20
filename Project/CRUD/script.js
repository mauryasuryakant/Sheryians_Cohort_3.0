const createBtn = document.querySelector("#create")
const formDiv = document.querySelector(".form")
const closeBtn = document.querySelector("#close")

const form = document.querySelector("form")

createBtn.addEventListener("click", () => {
    formDiv.style.display = "flex"
})

closeBtn.addEventListener("click", () => {
    formDiv.style.display = "none"
})

form.addEventListener("submit", (e) => {
    event.preventDefault();

    let productName = e.target[0].value;
    let productDescription = e.target[1].value;
    let productNumber = e.target[2].value;
    let productImageUrl = e.target[3].value;
})

