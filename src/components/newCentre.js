import React from 'react';
import './newCentre.css';
class Centre extends React.Component {
    render() {
        return (
            <div>
                <h1 className="newcentre" style={{ float: "left" }}>New Centre</h1>
                <div style={{ float: "left" }}>
                    <img className="imgLen" src="https://bhiveworkspace.com/wp-content/uploads/2019/08/BHIVE-MG-Road-Coworking.png"></img>
                </div>
                <div style={{ float: "left" }}>
                    <img className="imgLen" src="https://bhiveworkspace.com/wp-content/uploads/2019/08/BHIVE-MG-Road-Coworking.png"></img>
                </div>
                <div style={{ float: "left" }}>
                    <img className="imgLen" src="https://bhiveworkspace.com/wp-content/uploads/2019/08/BHIVE-MG-Road-Coworking.png"></img>
                </div>
                <div style={{ float: "left" }}>
                    <img className="imgLen" src="https://bhiveworkspace.com/wp-content/uploads/2019/08/BHIVE-MG-Road-Coworking.png"></img>
                </div>
            </div>

        );
    }
}
export default Centre;