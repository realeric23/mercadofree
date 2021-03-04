import React from 'react';
import { Card } from 'react-bootstrap';
import './Product.css'

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <a href={product.link} target="_blank" rel="noreferrer">
        <Card.Img src={product.image} variant="top" id='img-card' />
      </a>

      <Card.Body>
        <a href={product.link} target="_blank" rel="noreferrer">
          <Card.Title as="div">
            <strong>{product.title}</strong>
          </Card.Title>
        </a>

        <Card.Text as="div">
          <div className="my-3">{product.condition}</div>
        </Card.Text>

        <Card.Text as="div">
          <div className="my-3">
            {product.available_quantity > 0 ? 'In Stock' : 'Out of Stock'}
          </div>
        </Card.Text>

        <Card.Text as="h3">
          ${product.price}
          {product.currency_id}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
