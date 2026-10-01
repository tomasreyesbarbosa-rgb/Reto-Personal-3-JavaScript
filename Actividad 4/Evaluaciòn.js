const productov1 = {
    nombres: "camiseta",
    precio: 100000,
    version: 1,
};

function ActualizarPrecio(productoOrgininal, nuevoPrecio) {
    return {
        ...productoOrgininal,
        ...nuevoPrecio,
        version: productoOrgininal.version + 1,
    };
};

const productov2 = ActualizarPrecio(productov1, { precio: 120000 });

function mostrarHistorial(listaProductos) {
    console.log("=== HISTORIAL DE CAMBIOS DEL PRODUCTO ===");
    listaProductos.forEach((prod, index) => {

        const precioFormateado = `$${prod.precio.toLocaleString('es-CO')}`;

        console.log(`${index + 1}. Versión ${prod.version} - ${prod.nombres}: ${precioFormateado}`);
    });
}

const hisotrial = [productov1, productov2];

mostrarHistorial(hisotrial);