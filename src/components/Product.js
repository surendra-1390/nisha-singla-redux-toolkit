import { useState,useEffect } from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Product = ()=>{
    const [products,getProducts]= useState([]);

    useEffect(()=>{
        //api
        fetch('https://fakestoreapi.com/products')
        .then(data => data.json())
        .then(result =>getProducts(result))
    });

    const cards = products.map(product =>(

        <div column = "col-md-3">
      <Card key ={product.id} style={{marginBottom:"10px"}}>
        <div className="text-center">
      <Card.Img variant="top" src={product.image} style={{width:'100px',height:"130px"}}/>
      </div>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          {product.description}
        </Card.Text>
        <Card.Text>
          INR : {product.price}
        </Card.Text>
        
      </Card.Body>
      <Card.Footer style={{background :"white"}}>
      <Button variant="primary" >Add to Cart</Button>
      </Card.Footer>
    </Card>
        </div>
    ))
    return(
        <>
        <h1>Product Dashboard</h1>
        <div className="row">
            {cards}
        </div>
        </>
    )
}
export default Product;