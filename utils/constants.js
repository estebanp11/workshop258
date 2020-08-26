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
  {
    idVenta: 1, nombre: 'Leidy', email: "leidy@prueba.com", plan: 'Viaje ida y vuelta a Cartagena', costo: 10000
  },
  {
    idVenta: 2, nombre: 'Mafe', email: "Mafe@prueba.com", plan: 'Viaje ida y vuelta a Cartagena', costo: 10000
  },
  {
    idVenta: 2, nombre: 'Esteban', email: "Esteban@prueba.com", plan: 'Viaje ida y vuelta a Cartagena', costo: 10000
  }
];

module.exports = {
  URLS,
  usuarios,
  paquetes,
  ventas
}