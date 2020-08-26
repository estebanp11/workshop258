
/**
 * Middlewares
 */
const md = require('./../middleware');


/**
 * Service
 */
const { Service } = require('./service');

/**
 * CONSTANTS
 */
const { URLS, autores,paquetes,ventas } = require('./../utils/constants');


const setRoutes = (app) => {
  // Author
  const serviceUser = new Service();
  const servicePackages = new Service();
  const serviceSales = new Service();
  //service.setModel(autores);
  //app.get(`${URLS.API_BASE}${URLS.AUTHORS}/:id?`, md.auth.authUser, service.get);

  // PACKAGES
  servicePackages.setModel(paquetes);
  app.get(`${URLS.API_BASE}${URLS.PACKAGES}/:id?`, servicePackages.get);
  //app.post(`${URLS.API_BASE}${URLS.PACKAGES}`,servicePackages.packagePost);
  //app.put(`${URLS.API_BASE}${URLS.PACKAGES}/:id?`, servicePackages.get);
  //app.delete(`${URLS.API_BASE}${URLS.PACKAGES}/:id?`, servicePackages.get);

  // SALES 
  serviceSales.setModel(ventas);
  app.get(`${URLS.API_BASE}${URLS.VENTAS}/:id?`, serviceSales.getSales);
};


module.exports = {
  setRoutes
}