import React from "react";
import './NavBar.css';
import {Link} from "react-router-dom";
import { useSelector } from 'react-redux'

function NavBar(){
const isUserAuth = useSelector((state) => state.counter.value)
const email = useSelector((state) => state.counter.emailId)
console.log(email)
console.log(isUserAuth)
if(!isUserAuth){
    return (
        <nav className="navBar">
           
            <div>
            <p className=" pp first-p">Don’t miss what’s happening</p>
            <br></br>
            <p className="pp">People on Twitter are the first to know.</p>
            </div>
            <ul>
                <li><Link to="login">Login</Link></li>
                <li><Link to="Signup">Sign Up</Link></li>
            </ul>
        </nav>
    )}
}
export default NavBar;