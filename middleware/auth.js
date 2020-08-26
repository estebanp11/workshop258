/**
 * Generic Error
 */

const { usuarios } = require("./../utils/constants");

const authUser = (req, res, next) => {
  const { query } = req;
  const { email, clave } = query;

  const usuario = usuarios.find(
    (el) => el.email === email && el.clave === clave
  );

  if (user) {
    next();
  } else {
    res.status(403);
    res.send("error in auth");
  }
};

module.exports = {
  authUser,
};
