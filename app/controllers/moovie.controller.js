const db = require("../models");
const Moovie = db.tmovies;
const Op = db.Sequelize.Op;

// Create and Save a new Movie
exports.create = (req, res) => {
    // Validate request
    if (!req.body.judul) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Movie
    const moovie = {
      judul: req.body.judul,
      rilis: req.body.rilis,
      durasi: req.body.durasi,
      genre: req.body.genre,
      sutradara: req.body.sutradara,
      pemain: req.body.pemain,
      deskripsi: req.body.deskripsi,
      foto: req.body.foto,
      rating: req.body.rating
    };
  
    // Save Movie in the database
    Moovie.create(moovie)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Movie."
        });
    });
};

// Retrieve all Movies from the database.
exports.findAll = (req, res) => {
    const judul = req.query.judul;
    var condition = judul ? { judul: { [Op.like]: `%${judul}%` } } : null;
    Moovie.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Movie."
        });
    });
};

// Find a single Movie with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Moovie.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Movie with id=" + id
        });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;
  Moovie.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Movie was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Movie with id=${id}. Maybe Movie was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
          message: "Error updating Movie with id=" + id
      });
  });
};

// Delete a Movie with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Moovie.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Movie was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Movie with id=${id}. Maybe Movie was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
            message: "Could not delete Movie with id=" + id
        });
    });
};

// Delete all Movie from the database.
exports.deleteAll = (req, res) => {
    Moovie.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Movies were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all movies."
        });
    });
};

//Find all published Movies
exports.findAllPublished = (req, res) => {
    Moovie.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving movies."
        });
    });
};