const {db,resQuery} = require('./../db');
class Service {
  constructor() {
    this.get = this.get.bind(this);
    this.getUsers = this.getUsers.bind(this);
    this.postUser = this.postUser.bind(this);
    this.getSales = this.getSales.bind(this);
  }

  
  get(req, res) {
    const {
      params: { id: idParam },
    } = req;
    const id = parseFloat(idParam);
    // if (id) {
    //   const finded = this.model.find((el) => el.id === id);
    //   if (!!finded) {
    //     res.status(200).json(finded);
    //   } else {
    //     res.status(404).send("id no encontrado");
    //   }
    // } else {
    //   res.status(200).json(this.model);
    // }
  }

  async getUsers(req, res) {
    const {
      params: { id: idParam },
    } = req;
    const id = parseFloat(idParam);
    const baseQry = `SELECT * FROM ${process.env.DB_NAME}.usuarios`;
    const qry = (id) ? `${baseQry} WHERE idUsuario =${id}`:baseQry;

    try {
      const resData = await resQuery(qry,{type: db.QueryTypes.SELECT});
      console.log(resData);
      res.json(resData);

    } catch (error) {
      res.status(400).send('Error en la consulta');
    }
    // if (id) {
    //   const finded = this.model.find((el) => el.id === id);
    //   if (!!finded) {
    //     res.status(200).json(finded);
    //   } else {
    //     res.status(404).send("id no encontrado").json(this.model);
    //   }
    // } else {
    //   res.status(200).json(this.model);
    // }
  }

  async postUser(req, res) {
    const {
      body: {
        email: emailUser,
        nombre: nombreUser,
        apellido: apellidoUser,
        clave: claveUser
      },
    } = req;

    if (
        Object.values(body).find(val => val === null || val === undefined)
    ) {
      res.status(409).send("La información no es correcta");
    } else {
      const baseQry = `INSERT INTO usuarios(idusuario,email,nombre,apellido,clave,rol) VALUES (null,'${emailUser}','${nombreUser}','${apellidoUser}','${claveUser}',2)`;
      try {
        const resData = await resQuery(baseQry);
        console.log(resData);
        res.json(resData);
  
      } catch (error) {
        res.status(400).send('Error al guardar el usuario');
      }

      // const finded = this.model.find((el) => el.email === emailUser);
      // if (finded) {
      //   res.status(200).send("usuario ya existe");
      // } else {
      //   this.model.push(req.body);
      //   res.status(200).send("Usuario creado");
      // }
    }
  }

  getSales(req, res) {
    const {
      params: { idVenta: idParam },
    } = req;
    const idVenta = parseFloat(idParam);

    if (idVenta) {
      const finded = this.model.find((el) => el.idVenta === idVenta);
      if (!!finded) {
        res.status(200).json(finded);
      } else {
        res.status(404).send("id no encontrado");
      }
    } else {
      res.status(200).json(this.model);
    }
  }
}

module.exports = {
  Service,
};
