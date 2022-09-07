const router = require('express').Router();
const axios = require('axios');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

// router.get('/', (req, res, next) => {
//   let pokemons;
//   axios
//     .get('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
//     .then((response) => {
//       pokemons = response.data.results;

//       return Promise.all(
//         pokemons.map((pokemon) => {
//           return axios.get(pokemon.url);
//         })
//       );

//       // const bulbasur = pokemons[0];
//       // axios.get(bulbasur.url)
//       // .then((responseBulbasur) => {
//       //   const bulbasurDetail = responseBulbasur.data;
//       //   pokemons[0] = { ...pokemons[0], ...bulbasurDetail };
//       //   console.log('POKEMONS -> ', pokemons);
//       //   res.render('pokemon/list', { pokemons });
//       // })
//     })
//     .then((resultsPokemons) => {
//       console.log(resultsPokemons);
//       const pokemonsDetails = pokemons.map((pokemon, index) => {
//         return { ...pokemon, ...resultsPokemons[index].data };
//       });
//       res.render('pokemon/list', { pokemons: pokemonsDetails });
//     })

//     .catch((err) => {
//       next(err);
//     });
// });

module.exports = router;
