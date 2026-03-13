import React from 'react'
import Header from './Header';


function Landing() {
  return (
    <div>
    <div id="land">
     <Header/>
            <center>
            <p style={{
                    marginTop: "300px",
                    fontSize: "55px",
                    color: "white",
                    fontWeight:"bold",
                    fontFamily: "sans-serif"
                }}> Explore the World with Us For Travels.</p>
            <p  style={{
                        marginTop: "5px",
                        color: "white",
                        fontFamily: "sans-serif",
                        fontSize: "25px"
                    }}>Discover hidden places, amazing cultures, and unforgettable journeys.</p>
            </center>
         </div>  
   <div style={{
          paddingTop:"50px",
          height:"30vh",
          background:"linear-gradient(to bottom,#399ab9,#3abcc1)"
         }}>
          <center>
          <h1 style={{
            fontWeight:"bold"
            }}>Latest Adventures</h1>
          <p style={{
            paddingTop:"15px"
          }}>Check out our travel stories, guides, and tips to inspire your next journey.</p>
          </center>
          <p
          style={{
            paddingTop:"15px",
            marginLeft:"10%"
          }}>No blogs added yet.</p>
          </div> 
    </div>
  )
}

export default Landing
