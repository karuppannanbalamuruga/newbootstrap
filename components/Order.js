import React from 'react'
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

const Order = () => {
  return (
    <ListGroup as="ol" numbered>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">1. Margherita</div>
          Cras justo odio
        </div>
        <Badge bg="danger" pill>
          3
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">2. Cheese Pizza</div>
          Cras justo odio
        </div>
        <Badge bg="danger" pill>
          4
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">3. Fajita</div>
          Cras justo odio
        </div>
        <Badge bg="danger" pill>
          1
        </Badge>
      </ListGroup.Item>
    </ListGroup>
  )
}

export default Order
