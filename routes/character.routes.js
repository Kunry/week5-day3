const router = require('express').Router();
const AxiosIH = require('../connect/axios.connect');
const axiosCharacter = new AxiosIH();

router.get('/characters', (req, res, next) => {
  axiosCharacter
    .getCharacters()
    .then((characters) => {
      console.log(characters);
      res.json(characters);
    })
    .catch((err) => next(err));
});

router.get('/characters/:id', (req, res, next) => {
  axiosCharacter
    .getCharacter(req.params.id)
    .then((character) => {
      console.log(character);
      res.json(character);
    })
    .catch((err) => next(err));
});

router.get('/characters/delete/:id', (req, res, next) => {
  axiosCharacter
    .deleteCharacter(req.params.id)
    .then((response) => {
      console.log(response);
      res.json(response);
    })
    .catch((err) => next(err));
});

router.post('/characters', (req, res, next) => {
  const { name, occupation, debt, weapon } = req.body;
  axiosCharacter
    .createCharacter({ name, occupation, debt, weapon })
    .then((character) => {
      console.log(character);
      res.json(character);
    })
    .catch((err) => next(err));
});

router.post('/characters/:id', (req, res, next) => {
  const { name, occupation, debt, weapon } = req.body;
  axiosCharacter
    .editCharacter(req.params.id, { name, occupation, debt, weapon })
    .then((character) => {
      console.log(character);
      res.json(character);
    })
    .catch((err) => next(err));
});

module.exports = router;
