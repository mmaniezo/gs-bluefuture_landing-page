// TELA DE CADASTRO
const form = document.getElementById('form');
const name = document.getElementById('name');
const cnpj = document.getElementById('cnpj');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('password-confirmation');

form.addEventListener("submit", (event) => {
    event.preventDefault();
    checkForm();
});

name.addEventListener("blur", () => {
    checkName();
});
cnpj.addEventListener("blur", () => {
    checkCNPJ();
});
email.addEventListener("blur", () => {
    checkEmail();
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

function checkCNPJ() {
    const cnpjValue = cnpj.value;
    if (cnpjValue === "") {
        errorInput(cnpj, "Campo não preenchido!")
    }
    else if (cnpjValue.length < 14 || cnpjValue.length > 14) {
        errorInput(cnpj, "CNPJ inválido!")
    }
    else {
        const formItem = cnpj.parentElement;
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
    checkCNPJ();
    checkEmail();
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