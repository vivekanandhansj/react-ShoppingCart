import React from "react";
import "./App.css";
import StarRating from "./StarRating";

function Cart(props) {
    return (
        <div class="col mb-5">
        <div className="card h-100">
    
            <img className="card-img-top" src={props.product.img} alt="..." />
            {props.product.sale ? (<div class="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>) : ('')}
    
            <div className="card-body p-4">
                <div className="text-center">
    
                    <h5 className="fw-bolder">{props.product.title}</h5>
    
                    <div className="d-flex justify-content-center small mb-2">
                        <StarRating />
                    </div>
    
                    <p className="card-text">
                        {" "}
                        {/* strick out the price */}
                        $:
                        {props.product.price ? <span style={{ textDecoration: "line-through" }}>
                            {props.product.price}{""}
                        </span> : <span >
                            {props.product.pric}
                        </span>} {" "}
                        {props.product.price1} </p>
                </div>
            </div>
    
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                {props.product.button ? <button
                    disabled={props.cartItems.some((obj) => obj.id === props.product.id)}
                    onClick={() => props.handleCart(props.product)}
                    className="btn btn-outline-dark mt-auto" 
                >
                    Add to Cart
                </button> : <button
    
                    className="btn btn-outline-dark mt-auto" 
                >
                    View options
                </button>}
                    </div>
            </div>
        </div>
    </div>
    );
}

export default Cart;




