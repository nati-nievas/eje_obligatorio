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
    // Por ejemplo, mostrar los datos en la consola
    console.log('Nombre:', nombre);
    console.log('Apellido:', apellido);
    console.log('Correo:', mail);
    console.log('Cantidad:', cantidad);
    console.log('Categoría:', categoria);
  
    // Realizar la validación
    // ... Lógica de validación ...
  
    // Si la validación es exitosa, se realiza alguna acción adicional
    if (validacionExitosa) {
      // Realizar acciones adicionales, como enviar los datos a través de una API, mostrar un mensaje, etc.
    }
  }





    // if (formulario.nombre.value.trim().length == 0) {
        // alert("Debe ingresar un nombre");
        // return false;
    // }
    // if (formulario.apellido.value.trim().length == 0) {
        // alert("Debe ingresar Apellido");
        // return false;
    // }
    // const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // if (!re.test(formulario.mail.value)) {
        // alert("Debe ingresar un mail valido.");
        // return false;
    // }
    // if (formulario.cantidad.value == 0) {
        // alert("Debe ingresar un numero.");
        // return false;
    // }
    



