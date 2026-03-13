import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';


function Sidebar() {
  return (
    <Container fluid className='p-0'>
      <Row className='g-0 align-items-start'>
        <Col xs={12} md={3} 
        style={{
          width:"200px",
    backgroundColor:"rgb(103 143 155)",
     padding:"20px",
     height:"100vh"
     }}>
       <div className="d-flex flex-column gap-3">
      <Link
          to="/add"
          style={{
            textDecoration: "none",
            color: "white",
            fontWeight: "bold",
            fontSize: "18px",
            fontFamily:"sans-serif",
            backgroundColor: "rgb(103 143 155)",
            padding: "12px",
            borderRadius: "10px"
          }}
        >
          Add Blog
        </Link>
            <Link to="/viewblog"
             style={{
              textDecoration:"none",
              color:"white",
              fontFamily:"sans-serif",
              fontWeight:"bold",
              fontSize:"18px",
               backgroundColor: "rgb(103 143 155)",
            padding: "12px",
            borderRadius: "10px"
            }}>View Blog</Link>
            </div>
        </Col>
                

   
        <Col xs={12} md={9} ></Col>
        </Row>
        </Container>
  )
}

export default Sidebar
