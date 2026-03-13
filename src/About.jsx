import React from 'react'
import Header from './Header'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Card from 'react-bootstrap/Card';
import abt from './img/abouttravel.jpg'

function About() {
  return (
    <div>
      <div id="abut">
        <Header />
        <center>
          <h1
            style={{
              paddingTop: "160px",
              fontSize: "50px",
              fontFamily: "sans-serif",
              color: "white",
              fontWeight: "bold"
            }}>About Our Travel Blog</h1>
          <p
            style={{
              color: "white",
              fontSize: "20px",
              paddingTop: "10px"

            }}>Inspiring wanderlust and connecting travelers around the globe 🌍 It will help for our Minding Relaxing !</p>
        </center>
      </div>
      <div style={{
        background: "radial-gradient(circle,#399ab9, #77f1f6)",
        height:"63vh"
      }} >
        <Container >
          <Row >
            <Col sm={6}>
              <img src={abt}
                style={{
                  width: "85%",
                  marginTop: "8%",
                  borderRadius:"15px"
                }}></img>
            </Col >
            <Col sm={6}>
              <h2
              style={{
                marginTop:"12%",
                paddingBottom:"15px",
                fontFamily:"sans-serif",
                color:"#ff5a5f",
                fontWeight:"bold"
              }}>Who We Are</h2>

              <p style={{
                fontSize:"17px",
                fontFamily:"sans-serif"
              }}>We are a team of passionate explorers, photographers, and storytellers dedicated to sharing the beauty of the world with you. Our mission is to inspire adventure, encourage responsible travel, and connect cultures through real experiences.</p>

              <p
              style={{
                fontSize:"16px",
                fontFamily:"sans-serif"
              }}>Whether you’re planning your first trip or your hundredth, our stories, tips, and guides will help you make the most of your journey.</p>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <center>
        <h1 style={{
          paddingTop:"5%",
          fontFamily:"sans-serif",
          fontWeight:"bold"
        }}>Get in Touch</h1>
        <p>Have questions, suggestions, or want to collaborate? We’d love to hear from you!</p>
      </center>
      <Container style={{
        marginTop:"5%"
      }}>
      <Row>
       
        <Col sm={4}>
         <center>
         <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title style={{color:"#ff5a5f"
        }}>Email Us</Card.Title>
        <Card.Text>
         <a href="https://chatgpt.com/" 
         style={{textDecoration:"none",
            color:"black"
         }}> travelblog@gmail.com</a>
        </Card.Text>
      </Card.Body>
    </Card>
    </center>
        </Col>
        <Col sm={4}>
        <center>
         <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title style={{color:"#ff5a5f"
        }}>Call Us</Card.Title>
        <Card.Text>
         <a href >+916472692123</a>
        </Card.Text>
      </Card.Body>
    </Card></center>
        </Col>
        <Col sm={4}>
        <center>
         <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title style={{color:"#ff5a5f"
        }}>Follow Us</Card.Title>
        <Card.Text>
          <a href="https://www.instagram.com/"
          style={{
            textDecoration:"none",
            color:"black"
          }}>Instagram | <a href="https://www.facebook.com/" 
          style={{
            textDecoration:"none",
            color:"black"
          }}>Facebook | <a href="https://x.com/" 
           style={{
            textDecoration:"none",
            color:"black"
         }}>Twitter</a></a></a>
        </Card.Text>
      </Card.Body>
    </Card>
    </center>
        </Col>
        
      </Row>
      </Container>
      </div>
      
    </div>
  )
}

export default About
