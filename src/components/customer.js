import React from 'react';
import './customer.css';
class Customers extends React.Component {
    render() {
        return (
            <div>
                <div style={{ float: "left" }}>
                    <h1 className="customerRvw">Customer Review</h1>
                    <p className="desc">Here's what our Customers who have worked in our office spaces have to say about their experience with BHIVE </p>
                </div>
                <div className="marginimg" style={{ float: "left" }}>
                    <div id="carouselExampleControls" className="carousel slide imglen" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://thumbs.dreamstime.com/b/website-review-quote-citation-blank-template-vector-icon-comment-customer-circle-paper-information-text-chat-citing-bubble-shop-88599863.jpg" class="d-block w-100" alt="..."></img>
                            </div>
                            <div className="carousel-item">
                                <img className="imglen" src="https://thumbs.dreamstime.com/b/website-review-quote-citation-blank-template-vector-icon-comment-customer-circle-paper-information-text-chat-citing-bubble-shop-88599863.jpg" class="d-block w-100" alt="..."></img>
                            </div>
                            <div className="carousel-item">
                                <img className="imglen" src="https://thumbs.dreamstime.com/b/website-review-quote-citation-blank-template-vector-icon-comment-customer-circle-paper-information-text-chat-citing-bubble-shop-88599863.jpg" class="d-block w-100" alt="..."></img>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
export default Customers;