class Service {
    constructor() {
      this.setModel = this.setModel.bind(this);
      this.get = this.get.bind(this);
      this.model = [];
    }
  
    setModel(arr) {
      if (Array.isArray(arr)) {
        this.model = arr;
      } else {
        throw 'param should be Array'
      }
    }
  
    get(req, res) {
      const { params: { id: idParam } } = req;
      const id = parseFloat(idParam);
      if (id) {
        const finded = this.model.find(el => el.id === id);
        if (!!finded) {
          res
            .status(200)
            .json(finded)
        } else {
          res
            .status(404)
            .send('id no encontrado')
        }
      } else {
        res
          .status(200)
          .json(this.model);
      }
    }
    getSales(req, res) {
        console.log(req);
        const { params: { idVenta: idParam } } = req;
        const idVenta = parseFloat(idParam);
        if (idVenta) {
          const finded = this.model.find(el => el.idVenta === idVenta);
          if (!!finded) {
            res
              .status(200)
              .json(finded)
          } else {
            res
              .status(404)
              .send('id no encontrado')
          }
        } else {
          res
            .status(200)
            .json(this.model);
        }
      }

  };
  
  module.exports = {
    Service
  }