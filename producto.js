const input = document.querySelector("#inputProducto");
const button = document.querySelector("#buton");
const producto = document.querySelector(".producto-container");
const crear = document.querySelector("#butonCrear");
const actualizar = document.querySelector("#butonAtualizar")
const eliminar = document.querySelector("#butonEliminar")

crear.addEventListener('click', e => {
    e.preventDefault();
    registrarProducto(input.value);
})

actualizar.addEventListener('click', e => {
    e.preventDefault();
    actualizarProducto(input.value);
})

eliminar.addEventListener('click', e => {
    e.preventDefault();
    eliminarProducto(input.value);
})

button.addEventListener('click', (e) => {
    e.preventDefault();
    traerProducto(input.value);
})



function traerProducto(producto){
    fetch(`https://fakestoreapi.com/products/${producto}`)
    .then(res => res.json())
    .then(data => {
        mostrarProducto(data);
    })
}
function mostrarProducto(producto){
    const img = document.getElementById("imgproducto");
    img.src = producto.image;

    const nombreproducto = document.getElementById("nombreproducto");
    nombreproducto.textContent = producto.title;

    const precio= document.getElementById("precio");
    precio.textContent = producto.price;

    const descripcion= document.getElementById("descripcion");
    descripcion.textContent= producto.description;
}

function registrarProducto(){
    fetch(`https://fakestoreapi.com/products/`,{
            method:"POST",
            body:JSON.stringify(
                {
                    title: 'test product',
                    price: 13.5,
                    description: 'lorem ipsum set',
                    image: 'https://i.pravatar.cc',
                    category: 'electronic'
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
}

function actualizarProducto(producto){
    fetch(`https://fakestoreapi.com/products/${producto}`,{
            method:"PUT",
            body:JSON.stringify(
                {
                    title: 'test product',
                    price: 13.5,
                    description: 'lorem ipsum set',
                    image: 'https://i.pravatar.cc',
                    category: 'electronic'
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
}

function eliminarProducto(producto){
    fetch(`https://fakestoreapi.com/products/${producto}`,{
            method:"DELETE"
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
}