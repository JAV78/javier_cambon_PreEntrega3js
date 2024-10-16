const guardarProductosLS = (productos) => {
    localStorage.setItem("productos", JSON.stringify(productos));
}

const cargarProductosLS = () => {
    return JSON.parse(localStorage.getItem("productos")) || [];
}

const asignarProducto = (id) => {
    localStorage.setItem("producto", JSON.stringify(id));
}

const cargarProducto = () => {
    return JSON.parse(localStorage.getItem("idproductos"));
}

const renderProductos = () => {
    const productos = cargarProductosLS();
    let contenidoHTML = "";

    for (const item of productos) {
        contenidoHTML += `
        <div class="card" style="width: 18rem;">
            <a href="producto.html" class="text-decoration-none" onclick="asignarProducto($(item.id)") >
            <img src="${item.imagen}" class="card-img-top" alt="${item.nombre}">
            <div class="card-body text-center text-black">
                <p class="card-text">${item.nombre} <br>$${item.precio}</p>
            </div>
            </a>
        </div>`;
    }

    document.getElementById("contenido").innerHTML = contenidoHTML;
}

const renderProducto = () =>{
    const idProducto = cargarProducto ();
    const productos = cargarProductosLS();
    const producto = productos.find(item => item.id == idProducto)
    console.log(producto);
}
