import React,{useState} from 'react'
import {Col, Container, Row, Image, Button } from 'react-bootstrap'

import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

const Pick = () => {
    const [show, setShow] = useState(false);
  return (
    <section id='musttry' className='my-3'>
        <div className='text-center my-5 py-3'>
            <h2 className='text-danger'><i class="bi bi-search-heart"></i> Pick of the week!</h2>
        </div>
        <Container>
            <Row className='align-items-center'>
                <Col md={7}>
                    <Image src={require('../assets/pizza4.jpeg')} fluid={true} alt='pizza' rounded></Image>
                </Col>
                <Col md={5}>
                    <div className='p-3'>
                        <h2>Double Cheese Fajita</h2>
                        <p className='lead text-muted'>Lorem ipsum dolor sit amet consectetur adipiscing elit. Earum magnam facilis consequatur corporis provident distinctio culpaiure quasi vero dicta,laborum fugiat vitae ducimus soluta.</p>
                        <Button onClick={()=>setShow(true)} variant='danger'><i class="bi bi-basket2-fill"></i> Buy Now</Button>
                    </div>
                </Col>
            </Row>
            <ToastContainer
          className="p-3 position-fixed bottom-0 end-0"
          position={'bottom-end'}
          style={{ zIndex: 1 }}
        >
          <Toast onClose={()=>setShow(false)} show={show} delay={3000} autohide>
            <Toast.Header closeButton={false}>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Added!</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>item added to cart.</Toast.Body>
          </Toast>
        </ToastContainer>
        </Container>
    </section>
  )
}

export default Pick
