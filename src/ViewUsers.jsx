import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';


function ViewUsers() {
  const [users, setUsers] = useState([]);
    const pink=useNavigate()

  useEffect(() => {

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);

  }, [])
  function deleteUser(index){

const updatedUsers = users.filter((u,i)=> i !== index);

setUsers(updatedUsers);

localStorage.setItem("users", JSON.stringify(updatedUsers));

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
      <div id="pro">
        <center>
          <h1 style={{
            color: "white",
            fontSize: "48px",
            paddingTop: "1%",
            fontFamily: "sans-serif",
            fontWeight: "bold"
          }}>Our Amazing Team 💫</h1>
          <p style={{
            color: "white",
            fontSize: "20px"
          }}>
            We’re not just a team — we’re a family working together to create something wonderful.
          </p>
        </center>

        <Container style={{ marginTop: "3%" }}>
          <Row className='justify-content-center g-4'>
            {users.length === 0 ? (
              <h4 className='text-center text-light'>No Users Found</h4>

            ) : (

              users.map((u, index) => (
      <Col md={4} key={index}>
      <center>
      <Card style={{ width: '18rem',
        backgroundColor:"rgba(106, 113, 114, 0.34)",
        borderRadius:"15px"
      }} className='main'><br></br>
      <center><Card.Body>
        <Card.Title ><h5 style={{
          color:"#ffeb99"
        }}>Name: {u.user}</h5></Card.Title>
        <Card.Title><h5 style={{
          color:"#ffeb99"
        }}>Password: {u.password}</h5></Card.Title>

        <Card.Text className='text-light'>
          A creative and dedicated team member who brings passion and positivity to every project.
        </Card.Text>
        <Button
variant="success"
onClick={()=>deleteUser(index)}
>
Delete
</Button>
      </Card.Body>
      </center>
    </Card>
    </center>
    </Col>
      ))
            )}
            
          </Row>
        </Container>
        <center>
          <section style=
            {{
              backgroundColor: "#11111074",
              marginTop: "6%", borderRadius: "10px", width: "30rem"
            }}>
            <p style={{
              color: "white", paddingTop: "2%", paddingBottom: "5%"
            }}>📞 Contact Us: travelblog@gmail.com | 📍 Chennai, India</p>

          </section>
        </center>
      </div>
    </div>
  )
}

export default ViewUsers
