const { Router } = require('express');
const router = Router();
const axios = require('axios');

router.get('/api/search', async (req, res) => {
  const myQuery = req.query.query;
  const response = await axios.get(
    `https://api.mercadolibre.com/sites/MLA/search?q=${myQuery}`
  );
  res.send(response.data.results);
});

module.exports = router;
