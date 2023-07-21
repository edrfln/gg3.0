const express = require("express");
const router = express.Router();

module.exports = router;

router.post("/post", (req, res) => {
  const Movie = new Movie({
    title: req.body.title,
    year: req.body.year,
  });

  try {
    const movieToSave = movie.save();
    res.status(200).json(movieToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
