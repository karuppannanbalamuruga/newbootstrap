import React from 'react'
import {Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

const Menu = () => {
    const [modalShow, setModalShow] = React.useState(false);

    function MyVerticallyCenteredModal(props) {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Modal heading
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Centered Modal</h4>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide} className='text-danger'>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      }


  return (
    <section id='menu' className='bg-light'>
        <Container>
            <div className='text-center'>
                <h3 className='my-3 py-5 text-danger'> Treat yourself with our Everybody Menu <i class="bi bi-tiktok"></i></h3>
            </div>
            <Row className='justify-content-center align-items-center'>
                <Col md={6} lg={4} >
                    <>
                    
                    <Card className='m-3'>
                    <Card.Img variant="top" src={require('../assets/pizza1.jpeg')} />
                    <Card.Body>  
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <div className='text-center'>
                    <Button variant="danger" onClick={() => setModalShow(true)}>Add to Basket</Button>
                    </div>
                    </Card.Body>
                    </Card>


                   <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
                    </>
                </Col>
                <Col md={6} lg={4} >
                    <Card className='m-3'>
                    <Card.Img variant="top" src={require('../assets/pizza2.jpeg')} />
                    <Card.Body>  
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <div className='text-center'>
                    <Button variant="danger" onClick={() => setModalShow(true)}>Add to Basket</Button>
                    </div>
                    </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} >
                    <Card className='m-3'>
                    <Card.Img variant="top" src={require('../assets/pizza5.jpeg')} />
                    <Card.Body>  
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <div className='text-center'>
                    <Button variant="danger" onClick={() => setModalShow(true)}>Add to Basket</Button>
                    </div>
                    </Card.Body>
                    </Card>
                </Col>
            
            
               <Col md={6} lg={4} >
                    <Card className='m-3'>
                    <Card.Img variant="top" src={require('../assets/pizza3.jpeg')} />
                    <Card.Body>  
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <div className='text-center'>
                    <Button variant="danger" onClick={() => setModalShow(true)}>Add to Basket</Button>
                    </div>
                    </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} >
                    <Card className='m-3'>
                    <Card.Img variant="top" src={require('../assets/pizza6.jpeg')} />
                    <Card.Body>  
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <div className='text-center'>
                    <Button variant="danger" onClick={() => setModalShow(true)}>Add to Basket</Button>
                    </div>
                    </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} >
                    <Card className='m-3'>
                    <Card.Img variant="top" src={require('../assets/pizza7.jpeg')} />
                    <Card.Body>  
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <div className='text-center'>
                    <Button variant="danger" onClick={() => setModalShow(true)}>Add to Basket</Button>
                    </div>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Menu
