import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ViewRestaurent from './ViewRestaurent';
import { ListGroup, ListGroupItem } from 'react-bootstrap';


function RestOp({operate}) {
console.log(operate);
const [show,setShow]=useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Button className='my-3' variant='dark' onClick={handleShow}>Operating Hours
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Operating Hours</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item>Monday:{operate.Monday}</ListGroup.Item>
          <ListGroup.Item>Tuesday:{operate.Tuesday}</ListGroup.Item>
          <ListGroup.Item>Wednesday:{operate.Wednesday}</ListGroup.Item>
          <ListGroup.Item>Thursday:{operate.Thursday}</ListGroup.Item>
          <ListGroup.Item>Friday:{operate.Friday}</ListGroup.Item>
          <ListGroup.Item>Saturday:{operate.Saturday}</ListGroup.Item>
          <ListGroup.Item>Sunday:{operate.Sunday}</ListGroup.Item>
           </ListGroup>
      </Modal.Body>
    </Modal>
  </>
  )
}

export default RestOp
