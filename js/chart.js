document.addEventListener('DOMContentLoaded', function () {

    // si no hay usuario ir a login
    if (!sessionStorage.getItem('user')) window.location.href = "login.html";

    // crear listener para todos los submit
    // document.addEventListener('submit', validateSubmit);

    chartDisplay();
});


function chartDisplay() {
    let innerHTML = "";
    let user = JSON.parse(sessionStorage.getItem('user'));
    var carrito = JSON.parse(sessionStorage.getItem("userChart"));

    calculaTotales(carrito);
    if(carrito.total === 0) {
        Swal.fire({
            icon: "info",
            title: "Aun no has comprado nada. Revisa nuestras ofertas",
        }).then(() => {
            window.location.href = "index.html";
        });
    }

    // Generar innerHTML
    innerHTML += `<tr><th></th><th>Producto</th><th>Precio</th><th></th></tr>`;
    innerHTML += carrito.productos.map((prod, index) => renderProduct(prod, index)).join('');
    innerHTML += `<tr class="fs-4"><th colspan="2" class="pe-5 text-end">TOTAL</th><th>${money(carrito.total)}</th></tr>`;
    innerHTML += `<tr class="fs-5"><th colspan="2" class="pe-5 text-end">DESCUENTOS</th><th>${money(carrito.descuentos)}</th></tr>`;

    // console.log(catalogTitle);
    document.getElementById("chart-table").innerHTML = innerHTML;
}

function edit(id) {
    //TODO

}


function removeFromChart(id) {
    let carrito = JSON.parse(sessionStorage.getItem("userChart"));
    let index = carrito.productos.findIndex(p => p.id === id);
    let eliminado = carrito.productos.splice(index);

    sessionStorage.setItem("userChart", JSON.stringify(carrito));
    chartDisplay();
}

function calculaTotales(carrito) {
    carrito.total = 0;
    carrito.descuentos = 0;

    carrito.productos.forEach(item => {
        carrito.total += item.onSale ? item.salePrice : item.price;
        carrito.descuentos += item.onSale ? (item.price - item.salePrice) : 0;
    });
}

function renderProduct(prod, index) {
    //TODO: comprimir luego de dar formato

    return `
        <tr>
            <td>${index + 1}</td>
            <td>
                <table class="table table-borderless align-middle">
                    <tr>
                        <td width="15%"><img src="img/gtrs/${prod.img}" class="chart-img"></td>
                        <td width="85%">${prod.name}</td>
                    </tr>
                </table>
            </td>
            <td>
                <div class="precio-oferta">${prod.onSale ? money(prod.salePrice) : money(prod.price)}</div>
                <div class="precio-antes text-right">${prod.onSale ? money(prod.price) : ""}</div>
            </td>
            <td>
                <span class="btn btn-danger" onclick="removeFromChart(${prod.id})"><i class="bi bi-trash"></i></span>
            </td>
        </tr>`;
}



function money(price) {
    return "$" + new Intl.NumberFormat('es-CL').format(price)
}