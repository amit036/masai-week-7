import React from 'react';
import './products.css';
class Products extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <div className="productsOf" style={{ float: "left" }}>Products Offered</div>
                </div>
                <div className="marginCard" style={{ float: "left" }}>
                    <div className="card" style={{ width: "420px" }}>
                        <div className="card-body">
                            <div style={{ float: "left" }}>
                                <i className="material-icons  icon">thumbs_up_down</i>
                            </div>
                            <div style={{ float: "left" }}>
                                <h5 className="card-title ml-4">COWORKING</h5>
                            </div>
                            <div style={{ clear: "both" }}>
                                <p className="card-text">Rent Private Cabins or Shared Desks at one of our Productive Coworking Spaces</p>
                                <a href="#" className="btn btn-warning text-white" style={{ width: "380px" }}>MORE DETAILS</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="marginCard1" style={{ float: "left" }}>
                    <div className="card" style={{ width: "420px" }}>
                        <div className="card-body">
                            <div style={{ float: "left" }}>
                                <i class="material-icons icon">location_city</i>
                            </div>
                            <div style={{ float: "left" }}>
                                <h5 className="card-title ml-4">COWORKING FRANCHISE</h5>
                            </div>
                            <div style={{ clear: "both" }}>
                                <p className="card-text">Take part in the Coworking business opportunity by owning our Franchise.</p>
                                <a href="#" className="btn btn-warning text-white" style={{ width: "380px" }}>MORE DETAILS</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="marginCard1" style={{ float: "left" }}>
                    <div className="card" style={{ width: "420px" }}>
                        <div className="card-body">
                            <div style={{ float: "left" }}>
                                <i class="material-icons icon">mode_comment</i>
                            </div>
                            <div style={{ float: "left" }}>
                                <h5 className="card-title ml-4">FREE CONSULTATION</h5>
                            </div>
                            <div style={{ clear: "both" }}>
                                <p className="card-text">Find right office space solution for your company through our expert advise</p>
                                <a href="#" className="btn btn-warning text-white" style={{ width: "380px" }}>MORE DETAILS</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
export default Products;