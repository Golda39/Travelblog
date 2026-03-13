import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Link, useNavigate } from 'react-router-dom';



function Register() {
  const[mone,setMone]=useState({user:"",password:"",confpassword:""})
  const blur=useNavigate()
  function but(e)
  {
    setMone({
      ...mone,[e.target.name]: e.target.value
    })
  }
  function rgis(e)
  {
     e.preventDefault()

  if(mone.user === "" || mone.password === "" || mone.confpassword === "")
  {
    alert("Fill the form")
    return;
  }

 if(mone.password !== mone.confpassword)
  {
    alert("Passwords do not match")
    return;
  }
  let users = JSON.parse(localStorage.getItem("users")) || [];
 const exists = users.find((u)=>u.user === mone.user)
 if(exists){
    alert("Username already exists");
    return;
  }
  users.push({
    user: mone.user,
    password: mone.password
  });
 localStorage.setItem("users", JSON.stringify(users));

  alert("Registration Successful");

  blur("/");
}



  return (
    
    <div id="login"><br></br><br></br><br></br><br></br><br></br>
      <br></br>
      <Container
        style={{
          display: "flex",
          justifyContent: "center"
        }}>
        <Card style={{
          width: '22rem',
          height: '30rem',
          backgroundColor: "rgba(31, 61, 83, 0.84)",
          border: "none",
          borderRadius: "5%"
        }} className='no'>
          <br></br>
          <Card.Body>
            <center><Card.Title> <h3 className='text-light'style={{fontWeight:"bold"}}>Register User</h3></Card.Title></center>
            <Card.Text>
              <form onSubmit={rgis}>
              <label for="text">
                <h6 className='text-light ms-4 mt-3'> Username</h6>
              </label><br></br>
              <input type="text" className='input' name='user' onChange={but}
                style={{
                  backgroundColor: "rgba(252, 248, 248, 0.18)",
                  width: "82%",
                  marginLeft: "7%"
                }}>
              </input><br></br>
              <label for="text"><br></br>
                <h6 className='text-light ms-4'> Password</h6>
              </label><br></br>
              <input type="text"  className='input' name='password' onChange={but}
                style={{
                  backgroundColor: "rgba(252, 248, 248, 0.18)",
                  width: "82%",
                  marginLeft: "7%"
                }}>
              </input>
               <label for="text"><br></br>
                <h6 className='text-light ms-4'>Confirm Password</h6>
              </label><br></br>
              <input type="text"  className='input' name='confpassword' onChange={but} 
                style={{
                  backgroundColor: "rgba(252, 248, 248, 0.18)",
                  width: "82%",
                  marginLeft: "7%"
                }}>
              </input>
               <Button  type="submit"
              style={{
                backgroundColor: "#00b4d8",
                width: "82%",
                fontWeight: "bold",
                border: "none", marginTop: "10%"
              }}
              className='ms-4 me-4'>
              Register</Button>
               </form>
            </Card.Text>
           <center>
                <p className='text-light'>
                 Already have an account?
                  <a href="/"
                  style={{
                     color:"#90e0ef",
                  textDecoration:"none"
                  }}>  Login</a></p>
              </center>
          </Card.Body>
        </Card>
      </Container>

  </div>
  )
}

export default Register
