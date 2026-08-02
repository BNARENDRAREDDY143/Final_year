import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Signup.css";
import bgImage from "../assets/login-bg.jpg";

function Signup() {

  const [username,setUsername]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const [showPassword,setShowPassword]=useState(false);

  const [message,setMessage]=useState("");
  const [type,setType]=useState("");

  const handleSignup=(e)=>{

    e.preventDefault();

    if(username==="" || email==="" || password===""){
      setMessage("Please fill all fields.");
      setType("error");
    }

    else{

      setMessage("🎉 Account Created Successfully!");
      setType("success");

      setUsername("");
      setEmail("");
      setPassword("");

    }

    setTimeout(()=>{
      setMessage("");
    },3000);

  };

  return(

<div
className="signup-page"
style={{
backgroundImage:`linear-gradient(rgba(0,0,0,.35),rgba(0,0,0,.35)),url(${bgImage})`,
}}
>

{message && (
<div className={`alert ${type}`}>
{message}
</div>
)}

<div className="signup-card">

<h2>Create Account</h2>

<p>Start your interview journey today.</p>

<form onSubmit={handleSignup}>

<input
type="text"
placeholder="Username"
value={username}
onChange={(e)=>setUsername(e.target.value)}
/>

<input
type="email"
placeholder="Email Address"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<div className="password-box">

<input
type={showPassword ? "text":"password"}
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<button
type="button"
onClick={()=>setShowPassword(!showPassword)}
>
👁
</button>

</div>

<button
type="submit"
className="signup-btn"
>
Create Account
</button>

</form>

<p className="login-link">
Already have an account?
<Link to="/login"> Login</Link>
</p>

</div>

</div>

  );

}

export default Signup;