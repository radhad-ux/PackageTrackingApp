import React from "react";

export default function Footer() {
    return (
    <footer className="footer">
        <div className="left">
        <h2>Customer Service</h2>
        <h3>Call us</h3>
        <a href="tel: 0764221662">079-458 12 88</a>
        <h3>Phone hours</h3>
        <span>Monday-Friday 8AM - 7PM</span>
        <span>Saturday-Sunday 10AM-5PM</span>
        </div>

        <div className="right">
        <h3>Mail us</h3>
        <a href="mailto:yellow-co@yellow-co.com">yellow-co@yellow-co.com</a>

        <h3>Send us a text</h3>
        <a href="sms: 0764221662">079-458 12 00</a>
        </div>

    </footer>
);
}; 

