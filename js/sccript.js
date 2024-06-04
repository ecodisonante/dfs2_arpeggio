var logo;

document.addEventListener('DOMContentLoaded', function () {

    // Persistir datos de prueba si no estan cargados
    if (!localStorage.getItem("catalog")) localStorage.setItem("catalog", JSON.stringify(catalog));
    if (!localStorage.getItem("listaUsuarios")) localStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios));
    logo = document.getElementById('bar-logo');
    window.addEventListener('scroll', changeLogoColor);

    // Mostrar ofertas en el inicio
    document.getElementById("home").click();
    document.addEventListener('submit', editSave);
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


function edit(prodId) {
    let contentArr = document.getElementsByTagName("section");
    [...contentArr].forEach(element => { element.className = "d-none"; });

    let prodArray = JSON.parse(localStorage.getItem('catalog'));
    let prodToEdit = prodArray.find(p => p.id === prodId);

    document.getElementById("prod-img").src = `../img/gtrs/${prodToEdit.img}`;
    document.getElementById("prod-id").value = prodToEdit.id;
    document.getElementById("prod-name").value = prodToEdit.name;
    document.getElementById("prod-brand").value = prodToEdit.brand;
    document.getElementById("prod-category").value = prodToEdit.category[0].id;
    document.getElementById("prod-price").value = prodToEdit.price;
    document.getElementById("prod-stock").value = prodToEdit.stock;
    document.getElementById("prod-onsale").checked = prodToEdit.onSale;
    document.getElementById("prod-saleprice").value = prodToEdit.salePrice;
    document.getElementById("prod-available").checked = prodToEdit.available;

    document.getElementById("prod-edit").className = "d-inline";

}


function editSave(event){
    event.preventDefault();

    let prodArray = JSON.parse(localStorage.getItem('catalog'));
    let prodId = parseInt(document.getElementById("prod-id").value);
    let prodToEdit = prodArray.find(p => p.id === prodId);

    prodToEdit.name = document.getElementById("prod-name").value;
    prodToEdit.brand = document.getElementById("prod-brand").value;
    // let newCat = parseInt(document.getElementById("prod-category").value);
    // prodToEdit.category = categorias[newCat - 1];
    prodToEdit.price = document.getElementById("prod-price").value;
    prodToEdit.stock = document.getElementById("prod-stock").value;
    prodToEdit.onSale = document.getElementById("prod-onsale").checked;
    prodToEdit.salePrice = document.getElementById("prod-saleprice").value;
    prodToEdit.available = document.getElementById("prod-available").checked;

    localStorage.setItem("catalog", JSON.stringify(prodArray));


    Swal.fire({
        icon: "success",
        title: "Producto Actualizado",
    }).then(() => {
        window.location.href = "index.html";
    });
}

function changeLogoColor() {
    if (window.scrollY > 130) {
        logo.className = "bar-logo-on";
    } else {
        logo.className = "bar-logo-off";
    }
}



