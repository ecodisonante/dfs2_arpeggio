
// navegacion
function display(content) {
    let contentId = content.getAttribute("data-target");
    let contentArr = document.getElementsByTagName("section");

    [...contentArr].forEach(element => { element.className = "d-none"; });
    document.getElementById(contentId).className = "container d-inline";
}
