import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';


function Reset() {
  const [username, setUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const navigate = useNavigate();

  function resetPassword(e) {

    e.preventDefault();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const userIndex = users.findIndex((u) => u.user === username);

    if (userIndex === -1) {

      alert("Username not found");

      return;

    }

    users[userIndex].password = newPassword;

    localStorage.setItem("users", JSON.stringify(users));

    alert("Password Reset Successful");

    navigate("/");

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
              Reset Password</h3><br></br></Card.Title></center>
            <Card.Text>
              <form onSubmit={resetPassword}>
                <label for="text">
                  <h6 className='text-light ms-4'> Username</h6>
                </label><br></br>
                <input type="text" className='input' placeholder="Enter Username" value={username} onChange={(e)=>setUsername(e.target.value)}
                  style={{
                    backgroundColor: "rgba(252, 248, 248, 0.18)",
                    width: "82%",
                    marginLeft: "7%"
                  }}>
                </input><br></br>
                <label for="text"><br></br>
                  <h6 className='text-light ms-4'>New Password</h6>
                </label><br></br>
                <input type="text" className='input' placeholder="Enter New Password" value={newPassword} onChange={(e)=>setNewPassword(e.target.value)}
                  style={{
                    backgroundColor: "rgba(252, 248, 248, 0.18)",
                    width: "82%",
                    marginLeft: "7%"
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
                  Reset Password</Button>
              </form>
            </Card.Text>
            <center>
              <p className='text-light'>Back to <a href="/" style={{ color: "#90e0ef", textDecoration: "none" }}>Login</a></p>
            </center>
          </Card.Body>
        </Card>
      </Container>
    </div>
  )
}

export default Reset
