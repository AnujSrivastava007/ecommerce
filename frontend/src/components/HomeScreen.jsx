import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
// import products from "../products";
import Product from "./Product";
import axios from 'axios';


const HomeScreen = () => {
  const [products,setProducts] = useState([]);

  useEffect(()=>{
    const fetchProducts = async ()=> {
      const {data} = await axios.get('/api/products');
      // const data = res.data();
      setProducts(data);
    }
    fetchProducts();
  },[]);
  return (
    <>
      <h1>Latest Product</h1>
      <Row>
        {products.map((product) => (
          <Col >
            <Product key={product._id} product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen; 
