

function catDisplay(categoryId = 0, onSale = false) {
    let catalogTitle = "";
    let filteredCatalog = [];
    let innerHTML = "";

    // Si no se especifican filtros devuelve la lista completa
    if (categoryId == 0) {
        catalogTitle = "Todas las guitarras";
        filteredCatalog = catalog;
    } else {
        catalogTitle = `${categorias.find(cat => cat.id === categoryId)}`;
        filteredCatalog = catalog.filter(cat => cat.category.id === categoryId);
        // catalog.forEach(cat => { if (cat.category.id == categoryId) filteredCatalog.push(cat); });
    }

    // obtener solo las ofertas
    if (onSale) {
        catalogTitle = `Ofertas`;
        filteredCatalog = filteredCatalog.filter(cat => cat.onSale);
        // catalog.forEach(cat => { if (cat.onSale) saleCatalog.push(cat); });
    }

    innerHTML += `<h2 class="mt-2">${catalogTitle}</h2>`;
    innerHTML += filteredCatalog.map(prod => renderProduct(prod)).join('');

    // array.forEach(prod => {
    //     innerHTML += renderProduct(prod);
    // });

    console.log(catalogTitle);
    console.log(filteredCatalog);
    console.log(innerHTML);
    return innerHTML;
}

//TODO: comprimir luego de dar formato
function renderProduct(prod) {
    return `
    <div class="col-3 my-3">
    <div class="card">
        <div class="card-body">
            <img src="${prod.img}" width="100%">
            <span>${prod.name}</span>
        </div>
        <div class="card-footer">
            <div class="row">
                <div class="precio-antes col-5">${prod.onSale ? money(prod.price) : ""}</div>
                <div class="precio-oferta col-7">${prod.onSale ? money(prod.salePrice) : money(prod.price)}</div>
            </div>
            <button class="btn btn-primary btn-sm mt-2"><i
                    class="bi bi-bag"></i>Comprar</button>
        </div>
    </div>
    </div>`;
}

function money(price) {
    return "$" + new Intl.NumberFormat('es-CL').format(price)
}