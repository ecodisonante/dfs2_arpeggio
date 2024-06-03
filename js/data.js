function category(id, name) {
    this.id = id;
    this.name = name;
}

function product(id, name, brand, category, price, stock, onSale, salePrice, available, img) {
    this.id = id;
    this.name = name;
    this.brand = brand;
    this.category = [category];
    this.price = price;
    this.stock = stock;
    this.onSale = onSale;
    this.salePrice = salePrice;
    this.available = available;
    this.img = img;
}

function user(username, nombre, apepat, apemat, direccion, email, password, isAdmin = false) {
    this.username = username;
    this.nombre = nombre;
    this.apepat = apepat;
    this.apemat = apemat;
    this.direccion = direccion;
    this.email = email;
    this.password = password;
    this.activo = true;
    this.tempPass = null;
    this.isAdmin = isAdmin;
}


var categorias = [
    new category(1, "Guitarras Acúsicas"),
    new category(2, "Guitarras Eléctricas"),
    new category(3, "Guitarras Electroacústicas"),
];


var catalog = [
    new product(180442, "Guitarra acústica Vizcaya ARCG44 - Black", "Vizcaya", categorias[0], 59990, 10, false, 0, true, "180442.jpg"),
    new product(180447, "Guitarra acústica Vizcaya ARCG34 3/4 - Natural", "Vizcaya", categorias[0], 54990, 10, true, 40990, true, "180447.jpg"),
    new product(180467, "Guitarra acústica Vizcaya ARCG44 - Sunburst", "Vizcaya", categorias[0], 59990, 10, true, 49990, true, "180467.jpg"),
    new product(180477, "Guitarra acústica Vizcaya ARCG34 - cuerdas de nylon", "Vizcaya", categorias[0], 54990, 10, false, 0, true, "180477.jpg"),
    new product(174782, "Guitarra acústica Vizcaya con cuerdas de nylon ARCG39-RB", "Vizcaya", categorias[0], 69990, 10, false, 0, true, "174782.jpg"),
    new product(175590, "Guitarra clásica Takamine GC1 - color natural (NAT)", "Takamine", categorias[0], 234990, 10, false, 0, true, "175590.jpg"),
    new product(180432, "Guitarra acústica Vizcaya Castilla - Natural", "Vizcaya", categorias[0], 59990, 10, true, 54990, true, "180432.jpg"),
    new product(173677, "Guitarra acústica Vizcaya ARCG44 - Dark Blue Sunburst", "Vizcaya", categorias[0], 59990, 10, false, 0, true, "173677.jpg"),
    new product(175899, "Guitarra clásica Vizcaya ARCG39 color sunburst (SB)", "Vizcaya", categorias[0], 69990, 10, false, 0, true, "175899.jpg"),
    new product(180437, "Guitarra acústica Vizcaya ARCG44 - Natural", "Vizcaya", categorias[0], 59990, 10, false, 0, true, "180437.jpg"),
    new product(167776, "Guitarra acústica Vizcaya ARCG44 - Dark Red Sunburst", "Vizcaya", categorias[0], 59990, 10, false, 0, true, "167776.jpg"),
    new product(189719, "Pack de guitarra acústica Admira Alba Nylon", "Admira", categorias[0], 179900, 10, true, 152990, true, "189719.jpg"),
    new product(189710, "Guitarra acústica Admira Malaga Nylon", "Admira", categorias[0], 299990, 10, false, 0, true, "189710.jpg"),
    new product(189709, "Guitarra acústica Admira Luna Nylon", "Admira", categorias[0], 239990, 10, false, 0, true, "189709.jpg"),
    new product(189708, "Guitarra acústica Admira Juanita Nylon", "Admira", categorias[0], 219990, 10, false, 0, true, "189708.jpg"),
    new product(189711, "Guitarra acústica Admira Paloma Nylon", "Admira", categorias[0], 199990, 10, false, 0, true, "189711.jpg"),
    new product(189343, "Guitarra acústica Vizcaya FC-36 3/4 - Natural", "Vizcaya", categorias[0], 59990, 10, false, 0, true, "189343.jpg"),
    new product(189346, "Guitarra acústica Vizcaya FC-39 con cutaway 4/4 - Natural", "Vizcaya", categorias[0], 69990, 10, false, 0, true, "189346.jpg"),
    new product(189345, "Guitarra acústica Vizcaya FC39 4/4 con Funda - Natural", "Vizcaya", categorias[0], 69900, 10, false, 0, true, "189345.jpg"),
    new product(167408, "Guitarra acústica Ibanez GA3 - Ámbar", "Ibanez", categorias[0], 169900, 10, false, 0, true, "167408.jpg"),
    new product(167774, "Guitarra clásica Vizcaya ARCG34 3/4 - color violeta", "Vizcaya", categorias[0], 54990, 10, false, 0, true, "167774.jpg"),
    new product(180482, "Guitarra acústica Vizcaya ARCG34 3/4 - Dark Blue Sunburst", "Vizcaya", categorias[0], 54990, 10, false, 0, true, "180482.jpg"),
    new product(189707, "Guitarra acústica Admira A6 Nylon", "Admira", categorias[0], 524990, 10, false, 0, true, "189707.jpg"),
    new product(189706, "Guitarra acústica Admira A1 Nylon", "Admira", categorias[0], 369990, 10, false, 0, true, "189706.jpg"),
    new product(182704, "Guitarra acústica Takamine folk GD11M-NS - color natural", "Takamine", categorias[0], 229900, 10, false, 0, true, "182704.jpg"),

    new product(178528, "Guitarra eléctroacústica Ibanez GA3ECE - Amber", "Ibanez", categorias[1], 209900, 10, false, 0, true, "178528.jpg"),
    new product(176936, "Guitarra eléctroacústica Takamine Folk GLD12E NS - Madera Clara", "Takamine", categorias[1], 349900, 10, false, 0, true, "176936.jpg"),
    new product(176930, "Guitarra eléctroacústica Takamine Folk GLN11E NS - Caoba", "Takamine", categorias[1], 349900, 10, false, 0, true, "176930.jpg"),
    new product(178774, "Guitarra eléctroacústica Ibanez AAD50CE - Gloss Natural Low", "Ibanez", categorias[1], 319990, 10, false, 0, true, "178774.jpg"),
    new product(167741, "Guitarra electroacústica Takamine GC1CE - con cutaway - color natural (NAT)", "Takamine", categorias[1], 339900, 10, false, 0, true, "167741.jpg"),
    new product(169139, "Guitarra eléctroacústica Ibanez TCY10E - Black", "Ibanez", categorias[1], 279990, 10, false, 0, true, "169139.jpg"),
    new product(169141, "Guitarra electroacústica Ibanez GA5TCE - color amber (AM)", "Ibanez", categorias[1], 319900, 10, false, 0, true, "169141.jpg"),
    new product(167743, "Guitarra electroacústica Takamine GC3CE-NAT - con cutaway - color natural (NAT)", "Takamine", categorias[1], 439990, 10, false, 0, true, "167743.jpg"),
    new product(176652, "Guitarra Eléctroacustica PRS SE Parlour P20 - Negro", "Prs", categorias[1], 669900, 10, true, 534990, true, "176652.jpg"),
    new product(177025, "Guitarra eléctroacústica Takamine Folk GLD11E NS - Caoba", "Takamine", categorias[1], 349900, 10, false, 0, true, "177025.jpg"),
    new product(176943, "Guitarra eléctroacústica Takamine Folk GLN12E NS - Madera Clara", "Takamine", categorias[1], 349900, 10, false, 0, true, "176943.jpg"),
    new product(174554, "Pack de guitarra eléctroacústica Freeman Classic EAGLE - Natural", "Freeman", categorias[1], 199990, 10, false, 0, true, "174554.jpg"),
    new product(169656, "Guitarra electroacústica Takamine GD30CE-12 - con cutaway - 12 cuerdas - color negro", "Takamine", categorias[1], 479900, 10, false, 0, true, "169656.jpg"),
    new product(169687, "Guitarra electroacústica Takamine folk GD51CE - color brown sunburst gloss (BSB)", "Takamine", categorias[1], 469900, 10, false, 0, true, "169687.jpg"),
    new product(169705, "Guitarra electroacústica Takamine GN93CE - color natural", "Takamine", categorias[1], 639900, 10, false, 0, true, "169705.jpg"),
    new product(169704, "Guitarra electroacústica Takamine GN75CE - color wine red", "Takamine", categorias[1], 629900, 10, false, 0, true, "169704.jpg"),
    new product(169706, "Guitarra eléctroacústica Takamine GY93E - Natural", "Takamine", categorias[1], 629900, 10, false, 0, true, "169706.jpg"),
    new product(181427, "Guitarra eléctroacústica Freeman FRCG44CEQ - Natural", "Freeman", categorias[1], 99990, 10, true, 79990, true, "181427.jpg"),
    new product(167648, "Pack de guitarra electroacústica Freeman FRCG44EQ - Natural", "Freeman", categorias[1], 199900, 10, true, 159990, true, "167648.jpg"),
    new product(173004, "Guitarra eléctroacústica Ibanez TCM50 - Vintage Brown Sunburst", "Ibanez", categorias[1], 299990, 10, false, 0, true, "173004.jpg"),
    new product(169707, "Guitarra electroacústica Takamine GX18CENS Taka-Mini 3/4 - incluye funda", "Takamine", categorias[1], 399900, 10, false, 0, true, "169707.jpg"),
    new product(167464, "Guitarra electroacústica Freeman FRCG44CEQ - Black", "Freeman", categorias[1], 99990, 10, false, 0, true, "167464.jpg"),
    new product(176204, "Guitarra eléctroacústica Ibanez AEG50N - Black", "Ibanez", categorias[1], 299900, 10, false, 0, true, "176204.jpg"),
    new product(177228, "Guitarra electroacústica Takamine GX11ME-NS NEX - color natural", "Takamine", categorias[1], 379900, 10, false, 0, true, "177228.jpg"),

    new product(179630, "Guitarra eléctrica Gibson Les Paul Standard '50s - Tobacco Burst", "Gibson", categorias[2], 3499900, 10, false, 0, true, "179630.jpg"),
    new product(177446, "Guitarra eléctrica Ibanez SA260FM - Violin Sunburst", "Ibanez", categorias[2], 399900, 10, false, 0, true, "177446.jpg"),
    new product(181605, "Guitarra eléctrica Gibson Les Paul Classic Heritage Cherry Sunburst", "Gibson", categorias[2], 3228990, 10, true, 2999900, true, "181605.jpg"),
    new product(179589, "Guitarra eléctrica Gibson Les Paul Studio - Wine Red", "Gibson", categorias[2], 2199900, 10, false, 0, true, "179589.jpg"),
    new product(167426, "Guitarra eléctrica Ibanez RG350DXZ - White", "Ibanez", categorias[2], 599900, 10, false, 0, true, "167426.jpg"),
    new product(169167, "Guitarra eléctrica Ibanez SA260FM - Transparent Gray Burst", "Ibanez", categorias[2], 399900, 10, false, 0, true, "169167.jpg"),
    new product(169287, "Guitarra eléctrica Ibanez AZES40 - Black", "Ibanez", categorias[2], 329900, 10, false, 0, true, "169287.jpg"),
    new product(176132, "Guitarra eléctrica Ibanez AZES31 - Vermilion", "Ibanez", categorias[2], 319900, 10, false, 0, true, "176132.jpg"),
    new product(172982, "Pack de guitarra eléctrica LTD EC-10 - Blue", "Ltd", categorias[2], 349900, 10, false, 0, true, "172982.jpg"),
    new product(169313, "Guitarra eléctrica Ibanez AZES40 - Purist Blue", "Ibanez", categorias[2], 329900, 10, false, 0, true, "169313.jpg"),
    new product(180183, "Guitarra eléctrica Ibanez JEMJR Signature Steve Vai - White", "Ibanez", categorias[2], 499900, 10, false, 0, true, "180183.jpg"),
    new product(169392, "Guitarra eléctrica Ltd EC1000 (LEC1000) SD color amber sunburst (ASB)", "Ltd", categorias[2], 1239990, 10, false, 0, true, "169392.jpg"),
    new product(176185, "Guitarra eléctrica LTD EC401- Black", "Ltd", categorias[2], 999990, 10, false, 0, true, "176185.jpg"),
    new product(167724, "Guitarra eléctrica LTD EC401 - Olympic White", "Ltd", categorias[2], 999900, 10, false, 0, true, "167724.jpg"),
    new product(181613, "Guitarra eléctrica Gibson Les Paul Tribute Satin Tobacco Burst", "Gibson", categorias[2], 1699900, 10, false, 0, true, "181613.jpg"),
    new product(175752, "Pack de guitarra eléctrica Freeman Full Rock Stratocaster - Black", "Freeman", categorias[2], 199900, 10, true, 179900, true, "175752.jpg"),
    new product(176177, "Guitarra eléctrica LTD EC256 - Black Satin", "Ltd", categorias[2], 549900, 10, false, 0, true, "176177.jpg"),
    new product(177178, "Guitarra eléctrica Ibanez GRG170DX - Black Night", "Ibanez", categorias[2], 289990, 10, false, 0, true, "177178.jpg"),
    new product(176173, "Guitarra eléctrica Ltd EC256 - color See Thru Purple Sunburst", "Ltd", categorias[2], 579900, 10, true, 549900, true, "176173.jpg"),
    new product(182969, "Guitarra eléctrica Ltd EC-256 - color black", "Ltd", categorias[2], 579900, 10, false, 0, true, "182969.jpg"),

];


var listaUsuarios = [
    new user("admin", "Admin", null, null, null, "admin@email.com", "Secret.123", true),
    new user("ecodisonante", "Francisco", "Valdés", "Flores", "Mi casa", "ecodisonante@gmail.com", "Secret.123"),
];