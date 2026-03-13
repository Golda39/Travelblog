import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Link, useNavigate } from 'react-router-dom';

function Adminlogin() {
    const[dommy,setDommy]=useState({adusername:"",adpassword:" "})
    const user="admin"
    const passw="admin123"
    const film=useNavigate()
    function win(e)
    {
setDommy({
    ...dommy,[e.target.name]:e.target.value
})
    }
    function high(e)
    {
        e.preventDefault();
          if(dommy.adusername===" "||dommy.adpassword===" ")
        {
            alert("Please Fill the Form.")
        }
       else  if(dommy.adusername===user&&dommy.adpassword===passw){
            alert("Admin Login Successfully!.")
            film("/admihom")
        }
        else{
          alert("Invalid username or password")
        }

    }
  return (
    
       <div id="login"><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br>
      <Container
        style={{
          display: "flex",
          justifyContent: "center"
        }}>
        <Card style={{
          width: '22rem',
          height: '25rem',
          backgroundColor: "rgba(31, 61, 83, 0.84)",
          border: "none",
          borderRadius: "5%"
        }} className='no'>
          <br></br>
          <Card.Body>
            <center><Card.Title> <h3 className='text-light'
              style={{
                fontWeight: "bold",
                fontFamily: "candara"
              }}>
              Admin Login</h3><br></br></Card.Title></center>
            <Card.Text>
              <form onSubmit={high}>
                <label htmlFor="text">
                  <h6 className='text-light ms-4'> Username</h6>
                </label><br></br>
                <input type="text" placeholder='  Enter username' className='input' name='adusername' onChange={win} 
                  style={{
                    backgroundColor: "rgba(252, 248, 248, 0.18)",
                    width: "82%",
                    marginLeft: "7%",
                    border:"none"
                  }}>
                </input><br></br>
                <label htmlFor="text"><br></br>
                  <h6 className='text-light ms-4'> Password</h6>
                </label><br></br>
                <input type="password" placeholder='  Enter password' className='input' name='adpassword' onChange={win}
                  style={{
                    backgroundColor: "rgba(252, 248, 248, 0.18)",
                    width: "82%",
                    marginLeft: "7%",
                    border:"none"
                  }}>
                </input>
                <Button type="submit"
                  style={{
                    backgroundColor: "#00b4d8",
                    width: "82%",
                    fontWeight: "bold",
                    border: "none", marginTop: "10%"
                  }}
                  className='ms-4 me-4'>
                 Sign in</Button>
              </form>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
   
  )
}

export default Adminlogin
