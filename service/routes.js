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
  serviceUsers.setModel(usuarios);
  //app.get(`${URLS.API_BASE}${URLS.USERS}/:id?`, md.auth.authUser, service.get);
  //app.get(`${URLS.API_BASE}${URLS.PACKAGES}/:id?`, md.auth.authUser, service.get);
  //app.get(`${URLS.API_BASE}${URLS.VENTAS}/:id?`, md.auth.authUser, service.get);
  //app.get(`${URLS.API_BASE}${URLS.PAQUETES}/:id?`, md.auth.authUser, service.get);
  app.post(`${URLS.API_BASE}${URLS.USERS}`, serviceUsers.postUser);
  app.get(`${URLS.API_BASE}${URLS.USERS}`, serviceUsers.getUsers);
};

module.exports = {
  setRoutes,
};
