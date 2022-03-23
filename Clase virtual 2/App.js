//Eventos DOM (Document object model)
document
.getElementById("formulario-producto")
.addEventListener("submit", function (e){
// evaluar el comportamiento del formulario 

evento.preventDefault(); //el prevent para guardar sin refrescar en la pagina

//Obtener los valores del formulario

const nombre = document.getElementById("nombre").value,
 precio = document.getElementById("precio").value,
 año = document.getElementById("año").value;

 //Crear un nuevo objeto "producto"
 const product = new Product(nombre, precio, año);

 //Crear un nuevo usuario de interfaz
 const ui = new UI();

 //Input de validadcion de usuario

 if(nombre === "" || precio === "" || año === "" ){
    ui.showMessage("Por favot insertar datos");
 }

 //Guardar producto
 ui.addProducto(product);
 ui.showMessage("Producto agregado");
 ui.resetForm();
});

document.getElementById("producto-lista").addEventListener("click", (e) => {
    const ui = new UI();
    ui.deleteProducto(e.target);
    e.preventDefault();
});

//
class Producto{
    constructor(nombre, precio, año){
        this.nombre = nombre;
        this.precio = precio;
        this.año = año;
    }
}

//Clase Usuario Interfaz

class UI{
    addProducto(producto){
        const productoLista = document.getElementById("producto-lista");
        const elemento = document.createElement("div");
        elemento.innerHTML = `
        <div class="tarjeta texto margen4">
        <div class="tarjeta-body">
        <strong>Producto</strong> : ${producto.nombre} -
        <strong>Precio</strong> : ${producto.precio} -
        <strong>Año</strong> : ${producto.año} - 
        <a href="#" class="btn btn-error" name = "eliminar">Eliminar</a>
        </div>
        </div>
        `;

  
        productoLista.appendChild(element); // appendchild = objeto fijo
        //Reservar  valores de formulario

     

     }
     resetForm() {
        document.getElementById("formulario-producto").reset();
    }

    deleteProducto(elemento) {
        if(elemento.nombre === "eliminar"){
            element.parentElement.parentElement.remove();
            this.showMessage("El producto se a eliminado")
        }
    }
    showMessage(mensaje, cssClass){
        const div = document.createElement("div");
        div.className = `alert alert-${cssClass}`;
        div.appendChild(document.createTextNode(mensaje));
   
        const contenido = document.querySelector(".container");
        const app = document.querySelector("#App");

        //Insertar mensaje en el interfaz de usuario
   
   
    }
  
  
    }