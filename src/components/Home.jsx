
import React, { useState } from 'react'
import { Card, Col, Container, Row,Button } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';





function Home() {
  
    
    // const [count,setCount]=useState(10);
    const restaurants=useSelector((state) => state.data.restaurants);
    
    // console.log("count no:9----->",count);
    // const updateCount = () =>{
    //   setCount(40);
    //   console.log("count no:12----->",count)
   
    // }
    
  return (
    <Container>
       {/* <button onClick={updateCount}>Update</button>  */}
    <Row>
        {restaurants && restaurants.map((res,index) => (
         <Col md={4} className='mt-3' key={index}>
         <Card >
         <Card.Img variant="top" src={res.photograph} />
         <Card.Body>
           <Card.Title>{res.name}</Card.Title>
           <Card.Text>
             Some quick example text to build on the card title and make up the
             bulk of the card's content.
           </Card.Text>
           <Button as={Link} to={`/details/${res.id}`}  variant="primary">More Info</Button>
         </Card.Body>
       </Card>
         </Col>
         

      ))}
    
     
    
    </Row>
  </Container>
  )
}

export default Home