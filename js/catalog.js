

function catDisplay(categoryId = 0, onSale = false) {
    let catalogTitle = "";
    let filteredCatalog = [];
    let innerHTML = "";
    let user = JSON.parse(sessionStorage.getItem('user'));
    let edit = user && user.isAdmin;
    var persistedCatalog = JSON.parse(localStorage.getItem("catalog"));

    // Si no se especifican filtros devuelve la lista completa
    if (categoryId == 0) {
        catalogTitle = "Todas las guitarras";
        filteredCatalog = persistedCatalog;
    } else {
        catalogTitle = `${categorias.find(cat => cat.id === categoryId)}`;
        filteredCatalog = persistedCatalog.filter(cat => cat.category.id === categoryId);
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
    let persistedCatalog = JSON.parse(localStorage.getItem("catalog"));
    let item = persistedCatalog.find(p => p.id === id);

    if (!item) {
        Swal.fire({
            icon: "error",
            title: "No disponible",
            text: "Lo sentimos, el producto que intenta comprar ya no está disponible.",
        });
        return;
    }

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
                return;
            }
        });
    }

    if (user.isAdmin) {
        Swal.fire({
            icon: "error",
            title: "Usuario Admin",
            text: "Lo sentimos, los administradores no pueden comprar directamente en el portal.",
        });
        return;
    }

    let carrito = JSON.parse(sessionStorage.getItem('userChart'));
    if (!carrito || carrito.username !== user.username) {
        carrito = new userChart(user.username, [], 0, 0);
    }

    carrito.productos.push(item);


    sessionStorage.setItem("userChart", JSON.stringify(carrito));

    Swal.fire({
        icon: "success",
        title: "Producto Agregado",
        showCancelButton: true,
        confirmButtonText: "Ver mi carrito",
        cancelButtonText: "Seguir comprando"
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = "chart.html";
        } else {
            return;
        }
    });

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