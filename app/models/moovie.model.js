module.exports = (sequelize, Sequelize) => {
    const Moovie = sequelize.define("tmovies", {
      judul: {
        type: Sequelize.STRING
      },
      rilis: {
        type: Sequelize.INTEGER
      },
      durasi: {
        type: Sequelize.STRING
      },
      genre: {
        type: Sequelize.STRING
      },
      sutradara: {
        type: Sequelize.STRING
      },
      pemain: {
        type: Sequelize.STRING
      },
      deskripsi: {
        type: Sequelize.STRING
      },
      foto: {
        type: Sequelize.STRING
      },
      rating: {
        type: Sequelize.STRING
      }
    });
  
    return Moovie;
  };