import React from 'react';
import './navbar.css';
import NavbarRightComponents from './navbarRight.js'
import NavbarMainComponents from './navbarMain.js'
class Navbar extends React.Component {
    render() {
        return (
            <>
                <div className="bg">
                    <div className="fixed-top">
                        <div className="floatLeft">
                            <img className="navbarLogo" src="https://bhiveworkspace.com/wp-content/uploads/2019/06/gg_1-1.png"></img>
                        </div>
                        <div className="floatRight">
                            <NavbarRightComponents />
                        </div>
                    </div>
                    <div className="yourNxtOffice">
                        <NavbarMainComponents />
                        <div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default Navbar;