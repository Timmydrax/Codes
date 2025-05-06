import React from 'react'
import "./../../styles/pharmacylogin.css"
import caretleft from "../../assets/CaretLeft.png";
import cancelicon from "../../assets/X.png"
const PharmacyLogin = () => {
return (
<div className='pharmacy-login-container'>
<div className="direction-header">
    <a href="/">
    <img src={caretleft} alt="caretleft" />    
    </a>
<img src={cancelicon} alt="caretleft" />
</div>
<form>
<label>
<input type="email" placeholder="Email" required/>
</label>
<label>
<input type="password" placeholder="Password" required/>
</label>
<button type="submit">Login</button>
</form>
<div className="redirect-link">
<p>Don't have an account?</p>
<a href="">Sign Up</a>
</div>
</div>
)
}

export default PharmacyLogin