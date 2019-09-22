import React from 'react';
import './navbar.css';
class NavbarRightComponents extends React.Component{
    render(){
        return (
        <>
                <span><img className="imgWhatsapp" src="https://img.icons8.com/color/50/000000/whatsapp.png"></img></span>
                <span className="marginLeft mobileNo">+91 9876543970</span>
                <span className="marginLeft">COWORKING</span>
                <span className="marginLeft">LOCATION</span>
                <span className="marginLeft">PRICING</span>
                <button className="marginLeft bgyellow">REQUEST CALLBACK</button>
                <span className="marginLeft">FRANCHISE</span>
                <span className="marginLeft">ABOUT US</span>
                <span className="marginLeft">CONTACT US</span>
                <span className="searchicon"><i className="material-icons">search</i></span>
        </>
        );
    }
}
export default NavbarRightComponents;