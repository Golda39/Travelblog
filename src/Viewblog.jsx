import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Link, useNavigate } from 'react-router-dom'
import Header from './Header';

function Viewblog() {
const core=useNavigate()
const[blogs,setBlogs]=useState([]);
useEffect(()=>{
  const storedBlogs=JSON.parse(localStorage.getItem("blogs"))||[];
  setBlogs(storedBlogs);
},[]);
function handleDelete(index){
  const updatedBlogs=blogs.filter((_,i)=>i!==index);
  setBlogs(updatedBlogs);
  localStorage.setItem("blogs",JSON.stringify(updatedBlogs))
}
  
  function code()
  {
    localStorage.removeItem("username")
    localStorage.removeItem("password")
    localStorage.removeItem("confirmpass")
    core("/")
  }
  return (
    
    <div>
      <Header/>
   <div id="view">

  <h1 className="text-center pt-4">My Travel Blogs</h1><br></br>
  {
    blogs.length>0?(
      blogs.map((item,index)=>(
     <Row className="justify-content-center mt-4" key={index}>

    <Col xs={11} sm={10} md={9} lg={10} xl={8} className="d-flex justify-content-center">

      <Card
        className="shadow"
        style={{
          width: "100rem",
          borderRadius: "15px"
        }}
      >
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          {item.content}<br/>{item.location}<br/>{item.date}<br/>
          {item.image&&(<img src={item.image} alt="blog" className="img-fluid mt-2"/>
        )}
        </Card.Text>
        <Button variant="danger" onClick={()=>handleDelete(index)}>Delete</Button>
      </Card.Body>
    </Card>
    </Col>
    </Row>
      ))
    ):(
      <h5>No blogs yet added!</h5>
    )}

</div>
    </div>
  )
}

export default Viewblog
