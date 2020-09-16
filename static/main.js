// fetch('/api/autores?user=admin')
//   .then(res => res.json())
//   .then(res => console.warn(res));

function login() {
  const correo = document.getElementById("correoLogin").value;
  const clave = document.getElementById("contrasenaLogin").value;

  if (correo && clave) {
    var url = '/api/login';
    var data = { correo: correo, clave: clave };

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
  }
  else {
    alert("Debe ingresar todos los datos");
  }
}

function openLogin() {
  window.location.href = 'login.html';
}

function saveUser(e) {
  e.preventDefault(); //evita que se refresque la página
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const email = document.getElementById("correo").value;
  const clave = document.getElementById("contrasena").value;

  if (nombre && apellido && email && clave) {
    var url = '/api/usuarios';
    var data = { nombre, apellido, email, clave };
    //var data = { nombre: nombre, apellido: apellido, correo: correo, clave: clave }; proyeccion datos

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(response => console.log('Success:', response))
      .catch(error => console.error('Error:', error));

  }
  else {
    alert("Debe ingresar todos los datos");
  }

}


const botLogin = document.getElementById("openlogin");
botLogin.addEventListener("click", openLogin);

const botInsert = document.getElementById("saveUser");
botInsert.addEventListener("click",(e)=>saveUser(e));