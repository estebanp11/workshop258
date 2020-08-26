const URLS = {
  API_BASE: '/api',
  USERS: '/usuarios',
  PACKAGES: '/paquetes',
  VENTAS: '/ventas'
};

const usuarios = [
  {email:'admin@admin.com', nombre: 'admin', apellido: '', clave: 'admin', rol:1}
];

const paquetes = [
  {
      idPaquete: 1, paquete: 'Básico', precio: 1000000, descripcion: 'Viaje ida y vuelta a Cartagena'
  }
];

const ventas = [ 
];

module.exports = {
  URLS,
  usuarios,
  paquetes,
  ventas
}