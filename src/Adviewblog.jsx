import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';


function Adviewblog() {
      const pink=useNavigate()
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
function will()
{
   localStorage.removeItem("currentUser");   // remove login user

  alert("Logout Successful");

  pink("/admin");  
}
  return (
    <div>
       <Navbar expand="lg" className="justify-content-between"
                style={{
                    backgroundColor: "rgb(76 114 128 / 98%)"
                }}>
                <Container>
                    <Navbar.Brand>
                        <h4 style={{
                            color: "white",
                            fontWeight: "bold",
                            fontFamily: "Times New Roman"
                        }}>Travel Blog</h4></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">

                            <Button type='button' className='me-4'
                                style={{
                                    backgroundColor: "#3c638f",
                                    border: "rgb(76 114 128 / 98%)"
                                }}>
                                <Link to="/admihom"
                                    style={{
                                        textDecoration: "none",
                                        backgroundColor: "#3c638f",
                                        color: "white"
                                    }}>Home</Link></Button>

                            <Button type='button' className='me-4'
                                style={{
                                    backgroundColor: "#3c638f",
                                    border: "rgb(76 114 128 / 98%)"
                                }}>
                                <Link to="/viewblog"
                                    style={{
                                        textDecoration: "none",
                                        backgroundColor: "#3c638f",
                                        color: "white"
                                    }}>ViewBlog</Link></Button>
                                     <Button type='button' className='me-4'
                                style={{
                                    backgroundColor: "#3c638f",
                                    border: "rgb(76 114 128 / 98%)"
                                }}>
                                <Link to="/viewusers"
                                    style={{
                                        textDecoration: "none",
                                        backgroundColor: "#3c638f",
                                        color: "white"
                                    }}>View Users</Link></Button>

                            <Button type='button' className='me-4' onClick={will}
                                style={{
                                    backgroundColor: "#3c638f",
                                    color: "white",
                                    border: "rgb(76 114 128 / 98%)"
                                }}>Logout</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    
    <div id="view">

  <h1 className="text-center pt-4">Blogs</h1><br></br>
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

export default Adviewblog
