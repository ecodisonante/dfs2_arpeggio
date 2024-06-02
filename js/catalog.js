

function catDisplay(categoryId = 0, onSale = false) {
    let catalogTitle = "";
    let filteredCatalog = [];
    let innerHTML = "";
    let user = JSON.parse(sessionStorage.getItem('user'));
    let edit = user && user.isAdmin;

    // Si no se especifican filtros devuelve la lista completa
    if (categoryId == 0) {
        catalogTitle = "Todas las guitarras";
        filteredCatalog = catalog;
    } else {
        catalogTitle = `${categorias.find(cat => cat.id === categoryId)}`;
        filteredCatalog = catalog.filter(cat => cat.category.id === categoryId);
    }

    // obtener solo las ofertas
    if (onSale) {
        catalogTitle = `Ofertas`;
        filteredCatalog = filteredCatalog.filter(cat => cat.onSale);
    }

    // Generar innerHTML
    innerHTML += `<h2 class="mt-2">${catalogTitle}</h2>`;

    innerHTML += filteredCatalog.map(prod => renderProduct(prod, edit)).join('');

    // console.log(catalogTitle);
    return innerHTML;
}

function addToChart(id) {
    let user = JSON.parse(sessionStorage.getItem('user'));

    if (!user) {
        Swal.fire({
            icon: "info",
            title: "Iniciar Sesión",
            text: "Necesitas entrar a tu cuenta para poder comprar",
            showCancelButton: true,
            confirmButtonText: "Ingresar",
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = "login.html";
            } else {
                //TODO agregar a carrito
                return;
            }
        });
    }
}

function edit(id) {
    //TODO

}


function renderProduct(prod, edit = false) {
    //TODO: comprimir luego de dar formato

    return `
    <div class="col-3 my-3">
    <div class="card">
        <div class="card-body">
            <img src="../img/gtrs/${prod.img}" width="100%">
            <span>${prod.name}</span>
        </div>
        <div class="card-footer">
            <div class="row">
                <div class="precio-antes col-5">${prod.onSale ? money(prod.price) : ""}</div>
                <div class="precio-oferta col-7">${prod.onSale ? money(prod.salePrice) : money(prod.price)}</div>
            </div>
                <button class="btn btn-${edit ? "success" : "primary"} btn-sm mt-2" onclick="${edit ? "edit" : "addToChart"}(${prod.id})">
                    <i class="bi bi-${edit ? "pencil" : "bag"} mx-2"></i>${edit ? "Editar" : "Comprar"}</button>
            </div>
        </div>
    </div>`;
}

function money(price) {
    return "$" + new Intl.NumberFormat('es-CL').format(price)
}