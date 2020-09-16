// fetch('/api/autores?user=admin')
//   .then(res => res.json())
//   .then(res => console.warn(res));

function login(){
  const correo = document.getElementById("correo").value;
  const clave = document.getElementById("contrasena").value;

  if (correo && clave)
  {
       var url = '/api/login';
       var data = {correo: correo, clave: clave};

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

function openLogin(){
  windowlocation.href = 'login.html';
}

function saveUser(){
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const correo = document.getElementById("correo").value;
  const clave = document.getElementById("contrasena").value;
  const rol = 2;

  if (nombre && apellido && correo && clave && rol)
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