

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

    if (!validationMessage && ["required", "password", "email", "username"].includes(validation)) {
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
    const userList = JSON.parse(localStorage.getItem("listaUsuarios")); 
    let username = form["login-username"].value.trim().toLowerCase();
    let usuario = userList.find(u => u.username === username);

    if (!usuario || usuario.password !== form["login-password"].value)
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Credenciales Incorrectas",
        });
    else {
        sessionStorage.setItem('user', JSON.stringify(usuario));
        window.location.href = "index.html";
    }
}

function submitRegister(form) {
    let userList = JSON.parse(localStorage.getItem("listaUsuarios")); 
    let success = true;

    let nombre = form["nombre"].value.trim();
    let apepat = form["apepat"].value.trim();
    let apemat = form["apemat"].value.trim();
    let direccion = form["direccion"].value.trim();
    let email = form["reg-email"].value.trim();
    let username = form["reg-username"].value.trim().toLowerCase();
    let password = form["reg-password"].value;

    let existe = userList.find(u => u.username === username);
    if (existe) {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Ya hay alguien registrado con ese Nombre de Usuario"
        });
        success = false;
    }

    existe = userList.find(u => u.email === email);
    if (existe) {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Ya hay alguien registrado con ese Correo"
        });
        success = false;
    }

    if (success) {
        let nuevo = new user(username, nombre, apepat, apemat, direccion, email, password, false);
        userList.push(nuevo);

        localStorage.setItem("listaUsuarios", JSON.stringify(userList));

        Swal.fire({
            icon: "success",
            title: "Usuario Registrado",
            text: "Te enviaremos un correo de confirmación",
            //TODO: eliminar pista
            footer: `<i class="text-sm">psst!! - no necesitas revisarlo</i>`,
        }).then(() => {
            window.location.href = "login.html";
        });
    }

}

function submitPassRecovery(form) {
    const userList = JSON.parse(localStorage.getItem("listaUsuarios")); 

    let username = form["rec-username"].value.trim().toLowerCase();
    let email = form["rec-email"].value;
    let usuario = userList.find(u => u.username === username);
    let message;

    //TODO: eliminar pista
    if (!usuario) message = "No existe el usuario registrado"
    else if (usuario.email !== email) message = "El usuario y correo no coinciden"
    else message = `Tu password es "${usuario.password}"`

    Swal.fire({
        icon: "success",
        title: "Correo Enviado",
        text: "Si tus datos son correctos, enviaremos un email con tu contraseña",
        //TODO: eliminar pista
        footer: `<i class="text-sm">psst!! - ${message}</i>`,
    }).then(() => {
        window.location.href = "login.html";
    });
}