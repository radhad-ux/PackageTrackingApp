import React from "react";


export default function Footer() {
    return (
    <footer className="footer">

        <div className="left">
        <h2>Customer Service</h2>
        
        <h3>Phone</h3>
        <a href="tel: 0764221662">0764221662</a>
        
        <h3>Phone hours</h3>
        <span>Mon-Fri: 8AM - 7PM</span>
        <br/>
        <span>Sat-Sun: 10AM-5PM</span>
        </div>

        <div className="right">
        <h3>Mail ID</h3>
        <a href="mailto:yellowco@package.com">yellow-co@yellow-co.com</a>
        <h3>Send us a text</h3>
        <a href="sms: 0764221662">0764221662</a>
        <h3>Follow us</h3>
        <a href="Instagram">yellowco@instagram</a>
        </div> 
 
    </footer>
);
}; 