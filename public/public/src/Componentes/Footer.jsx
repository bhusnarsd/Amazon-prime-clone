import React from "react";
import "./Footer.css";
import Logo from "../Images/logo.png";

const Footer = () => {
    return (
        <div className="footerContainer">
            <div className="Footer">
                <img src={Logo} alt="" /></div>
               <div className="footertext">
                    <p>Term and Privacy Notice Send us feedback Help</p>
                <span> &#169; 1996-2022, Amazon.com,inc,or its affiliates</span>
            </div><br />
            <div className="footerline">

            </div>
        </div>

    );


}
export default Footer;