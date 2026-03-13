import React, { useEffect, useState } from "react";
import Header from "./Header";

function Account() {

const [user,setUser] = useState(null);

useEffect(()=>{

const currentUser = JSON.parse(localStorage.getItem("currentUser"));

if(currentUser){
setUser(currentUser);
}

},[])

return (

<div id="land">
<Header/>
<center>
<h1 style={{
  color:"white"
}}>User Account</h1></center>

{user && (
<center>
<div style={{
border:"1px solid #ccc",
width:"300px",
padding:"20px",
borderRadius:"10px",
marginTop:"3%",
backgroundColor:"white"
}}>

<p><b>Username :</b> {user.user}</p>

<p><b>Password :</b> {user.password}</p>
</div>
</center>

)}

</div>

)

}

export default Account