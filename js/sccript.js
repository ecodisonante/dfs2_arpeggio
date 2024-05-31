
// navegacion
function display(content) {
    let contentId = content.getAttribute("data-target");
    let contentArr = document.getElementsByTagName("section");

    [...contentArr].forEach(element => { element.className = "d-none"; });

    if (contentId == "ofertas" || contentId == "catalogo") {
        let content = catDisplay(0, contentId == "ofertas");
        document.getElementById("items").innerHTML = content;
        contentId = "catalogo";
    }

    document.getElementById(contentId).className = "d-inline";
}



