function validar(event, form) {
    // Prevenir el envío del formulario
    event.preventDefault();
    
    
    
    // Obtener valores de los campos
    const nombre = form.nombre.value;
    const apellido = form.apellido.value;
    const mail = form.mail.value;
    const cantidad = form.cantidad.value;
    const categoria = form.categoria.value;
  
    // Realizar acciones con los datos
   
    if (nombre == ""){
       return alert("Debe ingresar nombre");
    } 
    if(apellido == ""){
        return alert ("Debe ingresar apellido");
    }
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
     if (!re.test(form.mail.value)) {
         alert("Debe ingresar un mail valido.");
         return false;
         }

    if(cantidad == ""){
        return alert("Debe seleccionar cantidad de tickets")
    }
    if(categoria == ""){
        return alert("Debe seleccionar categoria");
    }
    else {
       const cant= parseInt(cantidad)
       const cat= parseFloat(categoria)
       const resultado = (cantidad*200*categoria)
       console.log(cant+cat);
       document.getElementById("totalApagar").innerHTML= resultado;
       
     };
    
    
    
    
    console.log('Nombre:', nombre);
    console.log('Apellido:', apellido);
    console.log('Correo:', mail);
    console.log('Cantidad:', cantidad);
    console.log('Categoría:', categoria);
  }





  



