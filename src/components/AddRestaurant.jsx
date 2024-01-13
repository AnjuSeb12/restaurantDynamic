import React, { useState } from 'react'
import { Col, Container, Form, Row, Button, Alert } from 'react-bootstrap'
import "./AddRestaurant.css";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





function AddRestaurant() {
    const [restaurantName, setRestaurantName] = useState('');
    const [restaurantAddress, setRestaurantAddress] = useState('');
    const [restaurantNeighborhood, setRestaurantNeighborhood] = useState('');
    const [validated, setValidated] = useState(false);
    const [show, setShow] = useState(false);
    const handleRestaurantName = (e) => {
        setRestaurantName(e.target.value);
    }
    const handleRestaurantAddress = (e) => {
        setRestaurantAddress(e.target.value);
    }
    const handleRestaurantNeighborhood = (e) => {
        setRestaurantNeighborhood(e.target.value);
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
        } else {
            const formData = {
                restaurantName,
                restaurantAddress,
                restaurantNeighborhood

            }
            setShow(true);
            toast.info("Restaurant Added Successfully!!",{
                position:"top-left",
                theme: "colored",
            });

            console.log(formData);
            // try {
            //     const result=axios.post('',formData)
            // } catch (error) {
            //     console.log(error.message);

            // }
        }
        setValidated(true);
    }
    console.log("Restaurant Name:", restaurantName);
    console.log("Restaurant Address:", restaurantAddress);
    console.log("Restaurant Neighborhood:", restaurantNeighborhood);
    return (
        <Container>
            <Row>
                <Col className='mt-3 mb-3'>
                <ToastContainer />
                    <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Restaurant Name:</Form.Label>
                            <Form.Control type="text" placeholder="Sample Restaurant Name" onChange={(e) => handleRestaurantName(e)} required />
                            <Form.Control.Feedback type='invalid'>Please enter restaurant name</Form.Control.Feedback>
                            <Form.Control.Feedback type='valid'>Restaurant name looks good</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Restaurant Address:</Form.Label>
                            <Form.Control type="text" placeholder="Sample Restaurant Address" onChange={(e) => handleRestaurantAddress(e)} required />
                            <Form.Control.Feedback type='invalid'>Please enter restaurant address</Form.Control.Feedback>
                            <Form.Control.Feedback type='valid'>successfully Entered</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Restaurant Neighborhood:</Form.Label>
                            <Form.Control type="text" placeholder="Sample Restaurant Neighborhood" onChange={(e) => handleRestaurantNeighborhood(e)} required />
                            <Form.Control.Feedback type='invalid'>Please enter restaurant name</Form.Control.Feedback>
                            <Form.Control.Feedback type='valid'>Successfully Entered</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Restaurant Photograph:</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Add Restaurant
                        </Button>
                    </Form>
                    {show &&  <Alert variant='success'>
                        Restaurant added successfully!!!
                    </Alert>
                    }
                    


                </Col>
            </Row>
        </Container>
    )
}

export default AddRestaurant