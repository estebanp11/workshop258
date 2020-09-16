// fetch('/api/autores?user=admin')
//   .then(res => res.json())
//   .then(res => console.warn(res));

function saveUser(){
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const correo = document.getElementById("correo").value;
  const clave = document.getElementById("contrasena").value;
  const rol = 2;

  if (nombre && apellido && correo && contrasena && rol)
  {
       var url = '/api/usuarios';
       var data = {nombre: nombre, apellido: apellido, correo: correo, clave: clave, rol: rol};

        fetch(url, {
        method: 'POST', 
        body: JSON.stringify(data), 
        headers:{
         'Content-Type': 'application/json'
        }
         }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
 }
  else
  {
    alert("Debe ingresar todos los datos");
  }

}