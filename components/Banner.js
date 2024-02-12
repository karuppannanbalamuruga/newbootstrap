import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';


const Banner = () => {
  return (
    <Container>
        <Row className='justify-content-center align-items-center'>
            <Col lg={8}>
            <Carousel>
                <Carousel.Item interval={2000}>
                    <img className='d-block w-100'
                         src={require('../assets/pizza2.jpeg')}
                         alt='First folder'
                         />
                        <Carousel.Caption>
                        <h3>Margherita</h3>
                        <p className='d-none d-sm-block'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                <img className='d-block w-100'
                         src={require('../assets/pizza1.jpeg')}
                         alt='First folder'
                         />
                        <Carousel.Caption>
                        <h3>Cheese Pizza</h3>
                        <p className='d-none d-sm-block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                <img className='d-block w-100'
                         src={require('../assets/pizza3.jpeg')}
                         alt='First folder'
                         />
                        <Carousel.Caption>
                        <h3>Pepporoni</h3>
                        <p className='d-none d-sm-block'>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
            </Carousel>
            </Col>
        </Row>
        <div className='text-center'>
        <h2 className='disply-5 mt-4'>Pizza for Every occasion!</h2>
        <p className='lead text-muted'>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
        </div>

        
    </Container>
  )
}

export default Banner
