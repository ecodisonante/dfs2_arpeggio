

// Crear listener para todos los campos form-control
document.addEventListener('DOMContentLoaded', function () {
    const formControls = document.querySelectorAll('.form-control');
    formControls.forEach(function (input) {
        input.addEventListener('blur', validateField);
        input.addEventListener('change', clearValidation);
    });
});


function validateField(event) {
    console.log(event)

    let input = event.target;
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
        if (pass.value != repass.value) validationMessage =  "Las contraseñas no coinciden";
    }

    input.setCustomValidity(validationMessage);
    input.reportValidity();
}

function clearValidation(event){
    event.target.setCustomValidity("");
    event.target.reportValidity();
}
