import React from 'react';
import './bhive.css';
class Bhive extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <div className="borderblog">
                        <div className="blogs" style={{ float: "left" }}>
                            <img src="https://bhiveworkspace.com/wp-content/uploads/2019/08/Bhive_Blog_Banner_4-1-177x142.png"></img>
                        </div>
                        <div className="blogsdesc" style={{ float: "left" }}>
                            <p>
                                The trend why companies are renting Offices in green buildings in India
                            </p>
                            <p>
                                Green buildings refer to any eco-friendly construction that does not harm the environment and [...]
                            </p>

                        </div>
                    </div>
                </div>
                <div>
                    <div className="borderblog1">
                        <div className="blogs" style={{ float: "left" }}>
                            <img src="https://bhiveworkspace.com/wp-content/uploads/2019/08/BHIVE_Blog_Banner-177x142.png"></img>
                        </div>
                        <div className="blogsdesc" style={{ float: "left" }}>
                            <p>
                                The trend why companies are renting Offices in green buildings in India
                            </p>
                            <p>
                                Green buildings refer to any eco-friendly construction that does not harm the environment and [...]
                             </p>

                        </div>
                    </div>
                </div>

                <div>
                    <button className="btn btn-warning text-white">GO TO BLOG</button>
                </div>
                <div style={{ clear: "both" }}>
                    <h1 className="blog">TheBHIVE Blogosphere </h1>
                    <p className="desc">All things bright and beautiful at BHIVE Workspace</p>
                </div>
            </div>
        );
    }
}
export default Bhive;