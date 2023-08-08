const modal = document.querySelector(".modal");
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const close = document.querySelector(".modal__content--close");

function button (button) {
    button.addEventListener("click", () => {
        modal.classList.remove('hidden');
        modal.classList.add('visible');
});
}

button(button1);
button(button2);
button(button3);

close.addEventListener("click", () => {
    modal.classList.remove('visible');
    modal.classList.add('hidden');
});