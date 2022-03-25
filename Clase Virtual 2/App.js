document
.getElementById("producto-formulario");
addEventListener("submit", function(evento)
{
    evento.preventDefault();

    //Obtener los valores del formulario
    const nombre= document.getElementById("nombre").value,
          precio= document.getElementById("precio").value,
          año= document.getElementById("año").value;

    //Crear un nuevo objeto (Es para ingresar productos)
    const producto = new Producto (nombre, precio, año);
    
    //Crear un nuevo usuario de interfaz
    const ui = new UI();


    //Input para la validación de los datos
    if (nombre === " " || precio === " " || año === " " )
    {
        ui.showMessage("Por favor insertar datos");  
    }

    //Guardar datos
    ui.addProduct(producto),
    ui.showMessage("Producto Agregado"); 
    ui.resetFrom();
});

document.getElementById("producto-lista").addEventListener("click", (evento) =>{
     const ui = new UI();
     ui.deleteProducto(evento.target);
     e.preventDefault();
});


//Clase Producto

class Producto
{
    constructor(nombre, precio, año)
    {
        this.nombre = nombre;
        this.precio = precio;
        this.año = año;
    }
}


//Clase Usuario interfaz

class UI
{
  addProduct(producto)
  {
      const productoLista = document.getElementById("producto-lista");
      const elemento = document.createElement("div");
      elemento.innerHTML=`
      <div class="tarjeta texto margen4" id="info">
            <div class="tarjeta-body">
            <strong> Producto </strong> :  ${producto.nombre} -
            <strong> Precio </strong> :  ${producto.precio} -
            <strong> Año </strong> :  ${producto.año} - <br>
            <a href="" class="btn btn-danger" id="btneli" name="eliminar" > Eliminar  </a> 
            </div>
            </div>
            `;
            window.alert("Producto agregado");

productoLista.appendChild(elemento); //appendChild es un elemento fijo
}
//resetear datos de formulario
resetFrom()
{
document.getElementById("producto-formulario").reset();
}

deleteProducto(elemento)
{
    if(elemento.nombre === "eliminar")
    {
        this.showMessage("El Producto se ha Eliminado");
        elemento.parentElement.parentElement.remove();
    }
}

showMessage(mensaje, cssClass)
{
  const div = document.createElement("div");
  div.className = `alert alert-${cssClass}`;
  div.appendChild(document.createTextNode(mensaje));



//Mostrar en el DOM
const contenido = document.querySelector("container")
const app = document.querySelector("#App")
    //Insertar mensaje en el interfaz usuario
    container.insertBefore(div, app);

    //Remover el mensaje luego de tres segundos

    setTimeout(function ()
    {
        document.querySelector(".alert").remove();
    }, 3000);

}
}