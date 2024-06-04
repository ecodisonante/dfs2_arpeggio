var logo;

document.addEventListener('DOMContentLoaded', function () {

    // Persistir datos de prueba si no estan cargados
    if (!localStorage.getItem("catalog")) localStorage.setItem("catalog", JSON.stringify(catalog));
    if (!localStorage.getItem("listaUsuarios")) localStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios));
    logo = document.getElementById('bar-logo');
    window.addEventListener('scroll', changeLogoColor);

    // Mostrar ofertas en el inicio
    document.getElementById("home").click();
});

// navegacion
function display(content) {
    let user = JSON.parse(sessionStorage.getItem('user'));

    let contentId = content.getAttribute("data-target");
    let contentArr = document.getElementsByTagName("section");

    [...contentArr].forEach(element => { element.className = "d-none"; });

    if (["ofertas", "catalogo", "cat-1", "cat-2", "cat-3"].includes(contentId)) {
        let catNum = contentId.startsWith("cat-") ? parseInt(contentId.replace("cat-", "")) : 0;
        let content = catDisplay(catNum, contentId == "ofertas");
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



