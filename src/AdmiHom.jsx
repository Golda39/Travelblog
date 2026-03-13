import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';


function AdmiHom() {
    const pink=useNavigate()
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
                                <Link to="/addview"
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
            <div id="gun">
               <center> <p
                style={{
                    color:"white",
                    fontFamily:"Algerian",
                    fontSize:"75px",
                    paddingTop:"15%",
                }}>Welcome! ADMIN.</p>
                </center>
            </div>
    </div>
  )
}

export default AdmiHom
