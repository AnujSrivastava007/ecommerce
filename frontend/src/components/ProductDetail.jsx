import React, { useEffect, useState } from 'react'
import { Col, ListGroup, ListGroupItem } from 'react-bootstrap';

const ProductDetail = ({match}) => {
  const [product,setProduct] = useState({});

  useEffect(()=>{
    const fetchProduct = async ()=> {
      const {data} = await axios.get(`/api/products/${match.params.id}`);
      setProduct(data);
    }
    fetchProduct();
  },[]);
  
  return (
    <>
        <a href='/' className='btn btn-dark my-3'>Go Back</a>
        <Row>
            <Col md={6}>
              <Image src={product.image} alt={product.name} fluid />
            </Col>
            <Col md={3}>
              <ListGroup variant='flush'>
                <ListGroupItem>
                  <h3>{product.name}</h3>
                </ListGroupItem>
                <ListGroupItem>
                  {product.rating}
                  {product.numReviews} reviews  
                </ListGroupItem>
                <ListGroupItem>Price: ${product.price}</ListGroupItem>
                <ListGroupItem>
                  Description: {product.description}
                </ListGroupItem>
              </ListGroup>
            </Col>
        </Row>
    </>
  )
}

export default ProductDetail;