document.addEventListener('DOMContentLoaded', function () {

    // Crear listener para todos los campos form-control
    const formControls = document.querySelectorAll('.form-control');
    formControls.forEach(function (input) {
        input.addEventListener('blur', function (event) { validateField(event.target); });
        input.addEventListener('keypress', function (event) { clearValidation(event.target); });
    });

    // crear listener para todos los submit
    document.addEventListener('submit', validateSubmit);

    let user = JSON.parse(sessionStorage.getItem('user'));
    if (user.isAdmin) document.getElementById('chart-nav').classList = "d-none";
    else document.getElementById('chart-nav').classList = "d-inline";


    loadProfile();
});


// Cargar datos de usuario
function loadProfile() {
    let user = JSON.parse(sessionStorage.getItem('user'));
    document.getElementById('nombre').value = user.nombre;
    document.getElementById('apepat').value = user.apepat;
    document.getElementById('apemat').value = user.apemat;
    document.getElementById('direccion').value = user.direccion;
    document.getElementById('email').value = user.email;
    document.getElementById('username').value = user.username;
    document.getElementById('password').value = user.password;
}


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
        submitUpdate(event.target);
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
        let pass = document.getElementById("password");
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

function submitUpdate(form) {
    let userList = JSON.parse(localStorage.getItem("listaUsuarios"));
    let user = JSON.parse(sessionStorage.getItem('user'));
    let persisted = userList.find(u => u.username === user.username);

    persisted.nombre = form["nombre"].value.trim();
    persisted.apepat = form["apepat"].value.trim();
    persisted.apemat = form["apemat"].value.trim();
    persisted.direccion = form["direccion"].value.trim();
    persisted.password = form["password"].value;

    localStorage.setItem("listaUsuarios", JSON.stringify(userList));
    sessionStorage.setItem("user", JSON.stringify(persisted));

    Swal.fire({
        icon: "success",
        title: "Usuario Actualizado",
    }).then(() => {
        window.location.href = "index.html";
    });
}
