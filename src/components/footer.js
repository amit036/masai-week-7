import React from 'react';
import './footer.css';
import Footer1stRow from './footer1stRow';
import Footer2ndRow from './footer2ndRow';
import Footer3rdRow from './footer3rdRow';
import Footer4thRow from './footer4thRow';

class Footer extends React.Component{
    render(){
        return (
            <div>
                <div className="blackbg">
                 <div className="firstRow" style={{float:"left"}}>
               <Footer1stRow/>
                 </div>

                 <div className="secondRow" style={{float:"left"}}>    
                  <Footer2ndRow/>
                 </div>

                 <div className="thirdRow" style={{float:"left"}}>
                    <Footer3rdRow/>
                 </div>
                 <div className="fourthRow" style={{float:"left"}}>
                     <Footer4thRow/>
                 </div>

                </div>
            </div>
        )
    }
}
export default Footer;