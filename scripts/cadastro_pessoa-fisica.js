// TELA DE CADASTRO
const form = document.getElementById('form');
const name = document.getElementById('name');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('password-confirmation');

form.addEventListener("submit", (event) => {
    event.preventDefault();
    checkForm();
});

name.addEventListener("blur", () => {
    checkName();
});
username.addEventListener("blur", () => {
    checkUsername();
});
email.addEventListener("blur", () => {
    checkEmail();
});
phone.addEventListener("blur", () => {
    checkPhone();
});
password.addEventListener("blur", () => {
    checkPassword();
});
passwordConfirmation.addEventListener("blur", () => {
    checkPasswordConfirmation();
});

function checkName() {
    const nameValue = name.value;
    if (nameValue === "") {
        errorInput(name, "Campo não preenchido!")
    }
    else {
        const formItem = name.parentElement;
        formItem.className = "form-content";
    }
}

function checkUsername() {
    const usernameValue = username.value;
    if (usernameValue === "") {
        errorInput(username, "Campo não preenchido!")
    }
    else if (usernameValue.length < 5) {
        errorInput(username, "O nome de usuário deve ter no mínimo 5 caracteres.")
    }
    else {
        const formItem = username.parentElement;
        formItem.className = "form-content";
    }
}

function checkEmail() {
    const emailValue = email.value;
    if (emailValue === "") {
        errorInput(email, "Campo não preenchido!")
    }
    else {
        const formItem = email.parentElement;
        formItem.className = "form-content";
    }
}

function checkPhone() {
    const phoneValue = phone.value;
    if (phoneValue === "") {
        errorInput(phone, "Campo não preenchido!");
    }
    else if (phoneValue.length < 11 || phoneValue.length > 11) {
        errorInput(phone, "Telefone inválido!");
    }
    else {
        const formItem = phone.parentElement;
        formItem.className = "form-content";
    }
}

function checkPassword() {
    const passwordValue = password.value;
    if (passwordValue === "") {
        errorInput(password, "Campo não preenchido!");
    }
    else if (passwordValue.length < 8) {
        errorInput(password, "A senha precisa ter no mínimo 8 caracteres.");
    }
    else {
        const formItem = password.parentElement;
        formItem.className = "form-content";
    }
}

function checkPasswordConfirmation() {
    const passwordConfirmationValue = passwordConfirmation.value;
    const passwordValue = password.value;
    if (passwordConfirmationValue === "") {
        errorInput(passwordConfirmation, "Campo não preenchido!");
    }
    else if (passwordValue !== passwordConfirmationValue) {
        errorInput(passwordConfirmation, "As senhas digitadas são diferentes!");
    }
    else {
        const formItem = passwordConfirmation.parentElement;
        formItem.className = "form-content";
    }
}

function checkForm() {
    checkName();
    checkUsername();
    checkEmail();
    checkPhone();
    checkPassword();
    checkPasswordConfirmation();

    const formItems = form.querySelectorAll(".form-content");
    const isValid = [...formItems].every((item) => {
        return item.className === "form-content";   // verifica se cada item da lista apresenta a classe 'form-content'
    });
    if (isValid) {
        alert("Cadastro realizado com sucesso!\nSeja bem-vindo(a) ao SeaConnect :)");
    }
}

function errorInput(input, msg) {
    const formItem = input.parentElement;
    const textMsg = formItem.querySelector('a');
    textMsg.innerText = msg;
    formItem.className = "form-content error"
}