let username = document.querySelector("#username");
let password = document.querySelector("#password");
let message = document.querySelector("#message");

let btn = document.querySelector("button");

btn.addEventListener("click", () => {
    alert(`Username : ${username.value}
        \nPassword : ${password.value}
        \nMessage : ${message.value}`);
});