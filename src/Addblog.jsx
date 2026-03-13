import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Link, useNavigate } from 'react-router-dom'
import Header from './Header';


function Addblog() {
  const[allopt,setAllopt]=useState({title:"",conte:"",locat:"",date:"",image:""});
  const moon=useNavigate()
  function move(e)
  {
    const{name,value,files,type}=e.target;
    if(type==="file"){
        const reader=new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload=()=>{
            setAllopt({
                ...allopt,image:reader.result
            });
        }
     } else
        {
setAllopt({
    ...allopt,[name]:value
})
        }
    }
  
  function add(e)
  {
     e.preventDefault()
     const newBlog={title:allopt.title,content:allopt.conte,location:allopt.locat,date:allopt.date,image:allopt.image};
     const existingBlogs=JSON.parse(localStorage.getItem("blogs"))||[];
     existingBlogs.push(newBlog);
     localStorage.setItem("blogs",JSON.stringify(existingBlogs));
  alert("Blogs Added Successfully")
  moon("/homepg")

  }
  function code()
  {
    localStorage.removeItem("username")
    localStorage.removeItem("password")
    localStorage.removeItem("confirmpass")

   moon("/")
  }
  return (
    <div>
      <Header/>
        <div id="gun" style={{paddingTop:"2%"}} className='justify-cotent-center'>
         <Card className="shadow" 
          style={{
          width: "85%",
          maxWidth:"450px",
          borderRadius: "20px",
          backgroundColor:"rgba(235, 237, 237, 0.99)"
        }}><br></br>

                <form onSubmit={add}>
                    <center>
                        <h3 style={{ color: "#0d355e" }}>Add New Travel Blog</h3></center>

                    <label for="text"
                        style={{
                            marginLeft: "8%",
                            fontWeight: "bold",
                            fontFamily: "Segoe UI Semibold"
                        }}>Title</label><br></br>

                    <input type="text" placeholder='Enter blog title' name='title' onChange={move}
                        style={{
                            borderRadius: "9px",
                            margin: "3% 0% 5% 8%",
                            padding: "2% 0% 2% 2%",
                            width: "84%",
                            border: " 1px solid #cccccc"
                        }}></input><br></br>

                    <label for="text"
                        style={{
                            marginLeft: "8%",
                            fontWeight: "bold",
                            fontFamily: "Segoe UI Semibold"
                        }}>Content</label><br></br>

                    <input type="text" placeholder='Write your travel story...' name='conte' onChange={move}
                        style={{
                            borderRadius: "9px",
                            margin: "3% 0% 5% 8%",
                            padding: "2% 0% 14% 2%",
                            width: "84%",
                            border: " 1px solid #cccccc"
                        }}></input><br></br>

                    <label for="text"
                        style={{
                            marginLeft: "8%",
                            fontWeight: "bold",
                            fontFamily: "Segoe UI Semibold"
                        }}>Location</label><br></br>

                    <input type="text" placeholder='Enter location' name='locat' onChange={move}
                        style={{
                            borderRadius: "9px",
                            margin: "3% 0% 5% 8%",
                            padding: "2% 0% 2% 2%",
                            width: "84%",
                            border: " 1px solid #cccccc"
                        }}></input><br></br>

                    <label for="date"
                        style={{
                            marginLeft: "8%",
                            fontWeight: "bold",
                            fontFamily: "Segoe UI Semibold"
                        }}>Date</label><br></br>

                    <input type="date" name='date' onChange={move}
                        style={{
                            borderRadius: "9px",
                            margin: "3% 0% 5% 8%",
                            padding: "2% 2% 2% 2%",
                            width: "84%",
                            border: " 1px solid #cccccc"
                        }}></input><br></br>

                    <label for="file"
                        style={{
                            marginLeft: "8%",
                            fontWeight: "bold",
                            fontFamily: "Segoe UI Semibold",
                        }}>Upload Image</label><br></br>

                    <input type="file" name='image' onChange={move}
                        style={{
                            borderRadius: "9px",
                            margin: "3% 0% 5% 8%",
                            padding: "2% 0% 2% 2%",
                            width: "84%",
                            display: "inline-block",
                            border: "1px solid #cccccc"
                        }}></input><br></br>

                    <center><Button type='submit'
                        style={{
                            width: "84%",
                            padding: "3% 0% 3% 0%"
                        }}> Add Blog</Button></center>
                </form><br></br>
            </Card>
      </div>
    </div>
     
  )
}

export default Addblog
