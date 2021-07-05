module.exports = app => {
    const moovies = require("../controllers/moovie.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Movie
    router.post("/", moovies.create);
  
    // Retrieve all Movie
    router.get("/", moovies.findAll);
  
    // Retrieve all published Movie
    router.get("/published", moovies.findAllPublished);
  
    // Retrieve a single Movie with id
    router.get("/:id", moovies.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", moovies.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", moovies.delete);
  
    // Delete all Tutorials
    router.delete("/", moovies.deleteAll);
  
    app.use('/api/moovies', router);
  };