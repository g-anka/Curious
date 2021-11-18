const body = document.querySelector("body");
const inputs = document.querySelectorAll("input");
const allRadioBtns = document.querySelector(".radio-btns")

allRadioBtns.addEventListener("click", ()=> {
    Array.from(inputs).map((e)=> {
        if (e.checked == true) {
            body.style.backgroundColor = e.value;
        }
    })
})