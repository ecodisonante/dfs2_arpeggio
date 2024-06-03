var logo;

document.addEventListener('DOMContentLoaded', function () {

    // Persistir datos de prueba si no estan cargados
    if (!localStorage.getItem("catalog")) localStorage.setItem("catalog", JSON.stringify(catalog));
    if (!localStorage.getItem("listaUsuarios")) localStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios));
    logo = document.getElementById('bar-logo');

    window.addEventListener('scroll', changeLogoColor);
});

// navegacion
function display(content) {
    let user = JSON.parse(sessionStorage.getItem('user'));

    let contentId = content.getAttribute("data-target");
    let contentArr = document.getElementsByTagName("section");

    [...contentArr].forEach(element => { element.className = "d-none"; });

    if (contentId == "ofertas" || contentId == "catalogo") {
        let content = catDisplay(0, contentId == "ofertas");
        document.getElementById("items").innerHTML = content;
        contentId = "catalogo";
    }

    if (contentId == "login") {
        if (user) window.location.href = "user.html";
        else window.location.href = "login.html";
    }

    if (contentId == "logout") {
        sessionStorage.removeItem("user");
        sessionStorage.removeItem("userChart");
        window.location.href = "index.html";
    }

    document.getElementById(contentId).className = "d-inline";
}


function changeLogoColor() {
    if (window.scrollY > 130) {
        logo.className = "bar-logo-on";
    } else {
        logo.className = "bar-logo-off";
    }
}



