class Service {
  constructor() {
    this.setModel = this.setModel.bind(this);
    this.get = this.get.bind(this);
    this.getUsers = this.getUsers.bind(this);
    this.postUser = this.postUser.bind(this);
    this.model = [];
  }

  setModel(arr) {
    if (Array.isArray(arr)) {
      this.model = arr;
    } else {
      throw "param should be Array";
    }
  }

  setModel(arr) {
    if (Array.isArray(arr)) {
      this.model = arr;
    } else {
      throw "param should be Array";
    }
  }

  get(req, res) {
    const {
      params: { id: idParam },
    } = req;
    const id = parseFloat(idParam);
    if (id) {
      const finded = this.model.find((el) => el.id === id);
      if (!!finded) {
        res.status(200).json(finded);
      } else {
        res.status(404).send("id no encontrado");
      }
    } else {
      res.status(200).json(this.model);
    }
  }

  getUsers(req, res) {
    const {
      params: { id: idParam },
    } = req;
    const id = parseFloat(idParam);
    if (id) {
      const finded = this.model.find((el) => el.id === id);
      if (!!finded) {
        res.status(200).json(finded);
      } else {
        res.status(404).send("id no encontrado").json(this.model);
      }
    } else {
      res.status(200).json(this.model);
    }
  }

  postUser(req, res) {
    const {
      body: {
        email: emailUser,
        nombre: nombreUser,
        apellido: apellidoUser,
        clave: claveUser,
        rol: rolUser,
      },
    } = req;

    console.log(emailUser);
    console.log(nombreUser);
    console.log(this.model);

    if (
      emailUser == null ||
      nombreUser == null ||
      apellidoUser == null ||
      claveUser == null ||
      rolUser == null
    ) {
      res.status(404).send("La información no es correcta");
    } else {
      const finded = this.model.find((el) => el.email === emailUser);

      if (finded) {
        res.status(200).send("usuario ya existe");
      } else {
        this.model.push(req.body);
        res.status(200).send("Usuario creado");
      }
    }
  }
}

module.exports = {
  Service,
};
