import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import wold from './img/world3.png'
import bea from './img/beach.jpeg'
import mount from './img/Mountain.jpeg'
import cit from './img/city.jpeg'
import Header from './Header';

function Home() {
    return (
        <div>
            
        <div id="hom">
        <Header/>
            <center> <p
                style={{
                    marginTop: "300px",
                    fontSize: "65px",
                    color: "white",
                    fontWeight: "bold",
                    fontFamily: "sans-serif"
                }}>Discover. Travel. Live.</p>
                <p
                    style={{
                        marginTop: "5px",
                        color: "white",
                        fontFamily: "sans-serif",
                        fontSize: "25px"
                    }}>Your next great adventure begins here <img style={{
                        width: "30px"
                    }}
                        src={wold} /></p></center>
</div>
<div>
   <center> <h1 
    style={{
        marginTop:"75px",
       fontWeight:"bold"
    }}>Popular Destinations</h1>
    <p
    style={{
        marginTop:"25px"
    }}>Find inspiration from top-trending locations across the world.</p>
    </center>
    <center>
     <Container 
     style={{
        marginTop:"75px",
        marginBottom:"75px"
        }}>
      <Row className='justify content-between gap-3'>
        <Col>
        <Card 
        style={{
             width: '20rem',
             borderRadius:"15px"
             }} >
      <Card.Img variant="top" src={bea} 
      style={{
        height:"213px",
        borderTopLeftRadius:"15px",
        borderTopRightRadius:"15px"
      }}/>
      <Card.Body>
        <Card.Title>Maldives</Card.Title>
        <Card.Text
        style={{
        }}>
          Crystal-clear waters and endless sunsets await you.  
        </Card.Text>
      </Card.Body>  
    </Card>
    </Col>
    
   <Col>
     <Card 
     style={{
         width: '20rem',
         borderRadius:"15px" 
         }} >
      <Card.Img variant="top" src={mount} 
      style={{
        borderTopLeftRadius:"15px",
        borderTopRightRadius:"15px"
      }}/>
      <Card.Body>
        <Card.Title>Swiss Alps</Card.Title>
        <Card.Text>
         Adventure through breathtaking snowy peaks.
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    <Col>
      <Card 
      style={{
         width: '20rem',
         borderRadius:"15px" 
         }} >
      <Card.Img variant="top" src={cit} 
      style={{
        borderTopLeftRadius:"15px",
        borderTopRightRadius:"15px"
      }}/>
      <Card.Body>
        <Card.Title>Tokyo</Card.Title>
        <Card.Text 
        style={{
            paddingBottom:"24px"
        }}>
          Where tradition meets futuristic wonder.
        </Card.Text>
      </Card.Body>
    </Card>
   </Col>
      </Row>
    </Container>
    
</center>
</div>
<center>
<section style={{
    backgroundColor:"#ff8286",
    height:"25vh"
}}><br></br>
        <p style={{
            fontSize:"25px",
            color:"white"
        }}>"Jobs fill your pockets, but adventures fill your soul."</p>
        <p style={{
            fontSize:"25px",
            color:"white",
            paddingBottom:"45px"
        }}> -- Jamie Lyn Beatty</p>
    </section>
    </center>
        </div>
    )
}

export default Home
