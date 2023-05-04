import React from "react";
import './NavBar.css';
import {Link} from "react-router-dom";
import { useSelector } from 'react-redux'

function NavBar(){
const isUserAuth = useSelector((state) => state.counter.value)
if(!isUserAuth){
    return (
        <nav>
            <ul>
                <li><Link to="login">Login</Link></li>
                <li><Link to="Signup">Sign Up</Link></li>
            </ul>
        </nav>
    )}
}
export default NavBar;