import React, { useState,useEffect } from 'react'
import RestaurentCard from './RestaurentCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {RestaurentListActions}  from '../Action/restaurentListAction';
import {useDispatch, useSelector} from 'react-redux';


function Restaurentlist() {
    //creating state to hold all restaurent
  // const [allRestaurents,setRestaurent] = useState([])

    //functiion to call api to get all restaurent from db.json
  //   const getRestaurent = async ()=>{
  //       await fetch('/db.json')
  //       .then((data)=>{
  //          data.json()
  //           .then((result)=>{
  //             setRestaurent(result.restaurants)
  //           })
  //       })
  //  }
    const dispatch = useDispatch()
    const result = useSelector(state=>state.restaurentReducer)
    const {restaurentList} = result
    console.log(result);

    useEffect(()=>{
        // getRestaurent()
        dispatch(RestaurentListActions())
    },[])
  return (
    <Row>
    {
        restaurentList.map(item=>(
            <Col sm={12} md={6} lg={4} xl={3}>
            <RestaurentCard restaurent={item} />
            </Col>
        ))
    }
</Row>
    
 
  )
}

export default Restaurentlist