import React from 'react'
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

function RestaurentCard({restaurent}) {
    console.log(restaurent);
  return (
    <Link style={{textDecoration:"none",color:"white"}} to={`view-restaurent/${restaurent.id}`} >
         <Card className='mb-2'>
      <Card.Img variant="top" className='p-3' src={restaurent.photograph} />
      <Card.Body>
        <Card.Title>{restaurent.name}</Card.Title>
        <Card.Text>
         {restaurent.neighborhood}
        </Card.Text>
      </Card.Body>
    </Card>
    </Link>
  )
}

export default RestaurentCard