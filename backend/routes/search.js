const { Router } = require('express');
const router = Router();
const axios = require('axios');

router.get('/search', async (req, res) => {
  const myQuery = req.query.query;
  await axios
    .get(`https://api.mercadolibre.com/sites/MLA/search?q=${myQuery}`)
    .then((response) => {
      res.send(response.data.results);
    });
});

module.exports = router;
