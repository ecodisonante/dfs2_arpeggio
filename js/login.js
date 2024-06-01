

document.addEventListener('DOMContentLoaded', function () {

    // Crear listener para todos los campos form-control
    const formControls = document.querySelectorAll('.form-control');
    formControls.forEach(function (input) {
        input.addEventListener('blur', function (event) { validateField(event.target); });
        input.addEventListener('keypress', function (event) { clearValidation(event.target); });
    });

    // crear listener para todos los submit
    document.addEventListener('submit', validateSubmit);
});

// Validar campos y continuar sumbit
function validateSubmit(event) {
    event.preventDefault();

    // Validar todos los campos del form antes de hacer submit
    let isFormValid = true;
    const inputs = event.target.querySelectorAll('.form-control');

    console.log(inputs);

    inputs.forEach(input => {
        validateField(input);
        isFormValid = isFormValid && input.checkValidity();
    });

    // de momento se simulara el submit
    if (isFormValid) {
        switch (event.target.id) {
            case "loginForm":
                submitLogin(event.target);
                break;
            case "registerForm":
                submitRegister(event.target);
                break;
            case "passRecoveryForm":
                submitPassRecovery(event.target);
                break;
        }
    }
}

// validar campo segun "data-val"
function validateField(input) {
    let validation = input.dataset.val
    let fieldName = input.labels[0].innerHTML.replace(":", "");
    let validationMessage = "";

    if (!validationMessage && ["required", "password", "email"].includes(validation)) {
        if (!input.value) validationMessage = `El campo ${fieldName} es requerido`;
    }

    if (!validationMessage && validation == "password") {
        const passValidator = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/

        if (input.value.length > 18 || input.value.length < 6) validationMessage = "Contraseña debe tener entre 6 y 18 caracteres";
        else if (!passValidator.test(input.value)) validationMessage = "Contraseña debe tener mayúsculas, minúsculas y números";
    }

    if (!validationMessage && validation == "email") {
        const emailValidator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailValidator.test(input.value)) validationMessage = `Debe ingresar un email valido`;
    }

    if (!validationMessage && validation == "repass") {
        let pass = document.getElementById("reg-password");
        if (pass.value != repass.value) validationMessage = "Las contraseñas no coinciden";
    }

    input.setCustomValidity(validationMessage);
    input.reportValidity();
}

// limpiar mensaje cuando se modifica
function clearValidation(input) {
    input.setCustomValidity("");
    input.reportValidity();
}


function submitLogin(form) {
    let uName = form["login-username"].value.trim().toLowerCase();
    let usuario = listaUsuarios.find(u => u.username === uName);

    if (!usuario || usuario.password !== form["login-password"].value)
        Swal.fire({ icon: "error", title: "Error", text: "Credenciales Incorrectas" });

    else {
        sessionStorage.setItem('user', uName);
        window.location.href = "index.html";
    }
}

function submitRegister(form) {
    //TODO
}

function submitPassRecovery(form) {
    //TODO
}