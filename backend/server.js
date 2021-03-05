const express = require('express');
const redis = require('redis');
const app = express();
const axios = require('axios');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const PORT = process.env.PORT || 3001;
const REDIS_PORT = process.env.REDIS_PORT || 6379;

const client = redis.createClient(REDIS_PORT);

// PERMISIONS

app.name = 'API';
app.use('/static', express.static('public'));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));

app.use(cookieParser());
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3003'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
    'Access-Control-Allow-Headers',
    'Authorization, X-API-KEY, Origin, X-Requested-with, Content-Type, Accept, Access-Control-Allow-Request-Method'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});

//ROUTES

app.get('/search', cache, async (req, res, next) => {
  try {
    console.log('Fetching Data from API...');
    const { q } = req.query;
    const resp = await axios.get(
      `https://api.mercadolibre.com/sites/MLA/search?q=${q}`
    );
    const products = resp.data.results.map((e) => {
      return {
        id: e.id,
        title: e.title,
        price: e.price,
        currency: e.currency_id,
        image: e.thumbnail,
        condition: e.condition,
        stock: e.available_quantity,
        link: e.permalink,
      };
      console.log('soy', products);
    });

    // Set to Redis
    client.setex(q, 1440, JSON.stringify(products));
    //          key, expire, cache

    console.log('success');
    res.status(200).send(products);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
});

// Cache
function cache(req, res, next) {
  const { q } = req.query;
  console.log('Fetching Data from CACHE...');

  client.get(q, (err, products) => {
    if (err) throw err;

    if (products !== null) {
      res.send(products);
    } else {
      next();
    }
  });
}

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
