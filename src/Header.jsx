import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';


function Header() {
    const film = useNavigate()
    function code() {

        localStorage.removeItem("currentUser");   // remove login user

        alert("Logout Successful");

        film("/");
    }
    return (

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
                            <Link to="/landing"
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
                            <Link to="/about"
                                style={{
                                    textDecoration: "none",
                                    backgroundColor: "#3c638f",
                                    color: "white"
                                }}>About</Link></Button>
                        <Button type='button' className='me-4'
                            style={{
                                backgroundColor: "#3c638f",
                                border: "rgb(76 114 128 / 98%)"
                            }}>
                            <Link to="/add"
                                style={{
                                    textDecoration: "none",
                                    backgroundColor: "#3c638f",
                                    color: "white"
                                }}>Addblog</Link></Button>

                        <Button type='button' className='me-4'
                            style={{
                                backgroundColor: "#3c638f",
                                border: "rgb(76 114 128 / 98%)"
                            }}>
                            <Link to="/userprofile"
                                style={{
                                    textDecoration: "none",
                                    backgroundColor: "#3c638f",
                                    color: "white"
                                }}>MyProfile</Link></Button>
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

                        <Button type='button' onClick={code}
                            style={{
                                backgroundColor: "#3c638f",
                                color: "white",
                                border: "rgb(76 114 128 / 98%)"
                            }}>Logout</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
