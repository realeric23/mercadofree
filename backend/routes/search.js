const { Router } = require('express');
const router = Router();
const axios = require('axios');

router.get('/search', async (req, res) => {
  const myQuery = req.query.query;
  const response = await axios.get(
    `https://api.mercadolibre.com/sites/MLA/search?q=${myQuery}`
  );
  res.send(response.data.results);
  console.log(response);
});

module.exports = router;
