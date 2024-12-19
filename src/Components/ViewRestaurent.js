import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Image} from 'react-bootstrap'
import RestOp from './RestOp';
import RestReview from './RestReview';
import { useSelector } from 'react-redux';


function ViewRestaurent() {
    const params = useParams()
    console.log(params.id);
    const [_allRestaurents,setRestaurent] = useState([])

    const getRestaurent = async ()=>{
      await fetch('/restaurents.json')
      .then((data)=>{
        data.json()
        .then((result)=>{
           setRestaurent(result.restaurants)
   })
  })
 }

  useEffect(()=>{
    //getRestaurent()
},[])

const result =useSelector(state=>state.restaurentReducer)
const {restaurentList} = result

 const viewRest = restaurentList.find(item=>item.id==params.id)
 console.log(viewRest);
  return (
    <>
    {
      viewRest ?(
        <Row className='p-3'>
          <Col lg={3} >
          <Image src={viewRest.photograph} fluid/>
          </Col>
          <Col>
          <p>ID: {viewRest.id}</p>
          <h1>{viewRest.name}</h1>
          <h5>Cuisine Type: {viewRest.cuisine_type}</h5>
          <h5>Neighborhood: {viewRest.neighborhood}</h5>
          <h5>Address: {viewRest.address}</h5>
          <RestOp operate= {viewRest.operating_hours}/>
          <br></br>
          <RestReview reviews={viewRest.reviews}/>
          </Col>
        </Row>

      ): 'null'
    }
    </>
    )
}

export default ViewRestaurent