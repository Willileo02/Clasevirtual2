// Eventos DOM (Document Objet Model)
document
.getElementById("Producto-formulario")
.addEventListener("submit", function(evento){
// evaluar el comportamiento del formulario

evento.preventDefault(); // "prevenDefault" para guardar sin refrescar en la pagina

// Obtener los valores del formulario
const nombre = document.getElementById("nombre").value,
     precio = document.getElementById("precio").value,
     año = document.getElementById("año").value;

     //crear un nuevo objeto "producto"
     const producto = new Product (nombre,precio,año);

     //Crear un nuevo usuario de interfaz
     const ui = new UI();

     //Input de validacion de usuario
     if(nombre === "" || precio === "" || año === ""){
         ui.showMessage("Por favor insertar datos");
     } 

     //Guardar producto
     ui.addProducto(producto);
     ui.showMessage("Producto agregado");
     ui.resetForm();
});

document.getElementById("producto-lista").addEventListener("click", (e) =>{
    const ui = new UI();
    ui.deleteProducto(e.target);
    e.preventDefault();
})
class Product{
    constructor(nombre,precio,año){
        this.nombre = nombre;
        this.precio =precio;
        this.año =año;
    }
}
class UI{
    addProducto(producto){
        const producLista = document.getElementById("producto-lista");
        const elemento = document.createElement("div");
        elemento.innerHTML = `
        <div class="tarjeta textro margen4">
        <div class="tarjeta-body">
            <strong>producto</strong> : ${producto.nombre} -
                <strong>precio</strong>: ${producto.precio} -
                <strong>año</strong>: ${producto.año} -
                <a href="#" class="btn btn-error" name="eliminar">Eliminar</a>
        </div>
    </div>
    `;
 
    producLista.appendChild(Element); //appendchild elemento fijo
    //resetear valores
} 
    resetForm(){
        document.getElementById("Producto-formulario").reset();       
    }

    deleteProducto(elemento){
        if (element.nombre==="eliminar" ){
            element.parentElement.parentElement.remove();
            this.showMessage("El producto se a eliminado")
        }
    }
    showMessage(mensaje,cssClass){
        const div = document.createElement("div");
        div.className = `alert alert-${cssClass} `;
        div.appendChild(document.createTextNode(mensaje));
        //Mostrar en el DOM
        const contenido = document.querySelector(".conteiner");
        const app = document.querySelector("#App");
        
        // insert message in the interfaz of user
        
    }

    }