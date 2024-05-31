function category(id, name) {
    this.id = id;
    this.name = name;
}

function product(id, name, /*desc,*/ category, price, stock, onSale, salePrice, available,img) {
    this.id = id;
    this.name = name;
    // this.desc = desc;
    this.category = [category];
    this.price = price;
    this.stock = stock;
    this.onSale = onSale;
    this.salePrice = salePrice;
    this.available = available;
    this.img = img;
}

const categorias = [
    new category(1, "Guitarras Acúsicas"),
    new category(2, "Guitarras Eléctricas"),
    new category(3, "Guitarras Electroacústicas"),
];


const catalog = [
    new product(1, "Guitarra acústica Ibanez GA3 - Ambar", categorias[0], 169900, 5, false, 0, true, "../img/1110198-1.webp"),
    new product(2, "Guitarra acústica Admira Alba", categorias[0], 152990, 8, false, 0, true, "../img/1110198-1.webp"),
    new product(3, "Guitarra eléctrica Gibson Les Paul Tribute Satin Tobacco Burst", categorias[1], 1699900, 3, true, 1579900, true, "../img/1110198-1.webp"),
    new product(4, "Guitarra eléctroacústica Takamine Folk GLD12E NS - Madera Clara", categorias[2], 349900, 5, false, 0, true, "../img/1110198-1.webp"),
];

// const guitarras = new Map();

// guitarras.set(1, new product(1, "Guitarra acústica Ibanez GA3 - Ambar", categorias[0], 169900, 5, false, 0, true, "../img/img/1110198-1.webp"));
// guitarras.set(2, new product(2, "Guitarra acústica Admira Alba", categorias[0], 152990, 8, false, 0, true, "../img/img/1110198-1.webp"));
// guitarras.set(3, new product(3, "Guitarra eléctrica Gibson Les Paul Tribute Satin Tobacco Burst", categorias[1], 1699900, 3, true, 1579900, true, "../img/img/1110198-1.webp"));
// guitarras.set(4, new product(4, "Guitarra eléctroacústica Takamine Folk GLD12E NS - Madera Clara", categorias[2], 349900, 5, false, 0, true, "../img/img/1110198-1.webp"));



function user(id, nombre, email,blablabla){

}

// buscar session en javascript

const listaUsuarios = [
    new user(1, "admin", "admin@email.com", null)
];