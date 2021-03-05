import React from 'react';
import { Card } from 'react-bootstrap';
import './Product.css'

const Product = ({ product }) => {
  console.log("------>", product)
  return (
    <a href={product.link} target="_blank" rel="noreferrer" className="text-decoration-none text-dark" >

      <Card className="my-3 p-3 rounded card text-decoration-none">
        <Card.Img src={product.image} variant="top" id='img-card' />


        <Card.Body className="warpper">
          <Card.Title as="div">
            <strong>{product.title}</strong>
          </Card.Title>


          <Card.Text as="div" className="position-relative text-uppercase">
            <div className="my-3 text-success font-weight-bold">{product.condition}</div>
          </Card.Text>

          <Card.Text as="div" >
            <div className="my-3 text-info">
              {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
            </div>
          </Card.Text>

          <Card.Text as="h3" className='ml-3' >
            ${product.price + "  " + product.currency}

          </Card.Text>
        </Card.Body>
      </Card>
    </a>
  );
};

export default Product;
