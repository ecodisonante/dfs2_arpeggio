document.addEventListener('DOMContentLoaded', function () {

    // Persistir datos de prueba si no estan cargados
    if (!localStorage.getItem("catalog")) localStorage.setItem("catalog", JSON.stringify(catalog));
    if (!localStorage.getItem("listaUsuarios")) localStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios));

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
        window.location.href = "index.html";
    }

    document.getElementById(contentId).className = "d-inline";
}



