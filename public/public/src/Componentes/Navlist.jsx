import React from "react";
import Logo from "../Images/logo1.png";
import { NavLink } from "react-router-dom"
import "./Navlist.css";
import Languages from "./Languages";



const Navlist = () => {
    return (
        <>
            <div className="Container">
                <div>
                    <img className="Logo" src={Logo} alt="" />

                </div>
                <div>
                    <NavLink exact to='/home' >Home</NavLink>
                </div>
                <div>
                    <NavLink exact to='/store' >Store</NavLink>
                </div>
                <div>
                    <NavLink exact to='/channel' >Channels</NavLink>
                </div>
                <div>
                    <NavLink exact to='/categories' >Categories</NavLink>
                </div>
                <div>
                    <NavLink exact to='/mystuff' >Mystuff</NavLink>
                </div>

                <div>
                    <NavLink exact to='/tryforfree' ><button className="tryfrofree">Try For Free</button></NavLink>
                </div>
                <div>
                    <NavLink exact to='/searchbar' ><input type="text" placeholder="Searchbar" className="searchbar" /></NavLink>
                </div>
                <div>
                    <NavLink to='/' ><Languages /></NavLink>
                </div>
                <div>
                    <NavLink exact to='/signup' ><button className="signup">SignUp</button></NavLink>
                </div>
            </div>




        </>
    );
}

export default Navlist;