import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [made, setMade] = useState({ user: "", password: "" })
  const red = useNavigate()


  function mean(e) {
    setMade({
      ...made, [e.target.name]: e.target.value
    })
  }

  function blue(e) {
    e.preventDefault();
let users = JSON.parse(localStorage.getItem("users")) || [];
    const validUser = users.find(
      (u) => u.user === made.user && u.password === made.password
    );

    if (validUser) {
       localStorage.setItem("currentUser", JSON.stringify(validUser));

      alert("Login Successfully!.");
      red("/homepg");
    }
    else {
      alert("Invalid Username or Password");
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
            User Login</h3><br></br></Card.Title></center>
          <Card.Text>
            <form onSubmit={blue}>
              <label htmlFor="text">
                <h6 className='text-light ms-4'> Username</h6>
              </label><br></br>
              <input type="text" placeholder='  Enter username' className='input' name='user' onChange={mean}
                style={{
                  backgroundColor: "rgba(252, 248, 248, 0.18)",
                  width: "82%",
                  marginLeft: "7%",
                  border: "none"
                }}>
              </input><br></br>
              <label htmlFor="text"><br></br>
                <h6 className='text-light ms-4'> Password</h6>
              </label><br></br>
              <input type="password" placeholder='  Enter password' className='input' name='password' onChange={mean}
                style={{
                  backgroundColor: "rgba(252, 248, 248, 0.18)",
                  width: "82%",
                  marginLeft: "7%",
                  border: "none"
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

          <center>
            <a href="/Reset"
              style={{
                color: "#90e0ef",
                textDecoration: "none"
              }}>  Forgot Password? |</a>

            <a href="/Register"
              style={{
                color: "#90e0ef",
                textDecoration: "none"
              }}> Register Now</a>
          </center>
        </Card.Body>
      </Card>
    </Container>
  </div>
)
}

export default Login
