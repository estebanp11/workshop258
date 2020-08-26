/**
 * Middlewares
 */
const md = require("./../middleware");

/**
 * Service
 */
const { Service } = require("./service");

/**
 * CONSTANTS
 */
const { URLS, usuarios, paquetes, ventas } = require("./../utils/constants");

const setRoutes = (app) => {
  const serviceUsers = new Service();
  const servicePackages = new Service();
  const serviceSales = new Service();

  serviceUsers.setModel(usuarios);
  servicePackages.setModel(paquetes);
  serviceSales.setModel(ventas);

  //USERS
  
  app.post(`${URLS.API_BASE}${URLS.USERS}`, serviceUsers.postUser);
  app.get(`${URLS.API_BASE}${URLS.USERS}`, serviceUsers.getUsers);

   // PACKAGES 
   app.get(`${URLS.API_BASE}${URLS.PACKAGES}/:id?`, servicePackages.get);
   //app.post(`${URLS.API_BASE}${URLS.PACKAGES}`,servicePackages.packagePost);
   //app.put(`${URLS.API_BASE}${URLS.PACKAGES}/:id?`, servicePackages.get);
   //app.delete(`${URLS.API_BASE}${URLS.PACKAGES}/:id?`, servicePackages.get);
 
   // SALES    
   app.get(`${URLS.API_BASE}${URLS.VENTAS}/:id?`, serviceSales.getSales);
};

module.exports = {
  setRoutes,
};
