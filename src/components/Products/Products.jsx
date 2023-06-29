import React from 'react'
import './products.css'
function Products(props) {
  return (
    <div className="container-content">
        <div className="container-img">
            <img src={props.feature.img} alt="images"/>
        </div>
        <div className="container-content">
            <p>{props.feature.desc}</p>
            <h5>Quantity: {props.feature.quantity}</h5>
        </div>
    </div>
  )
}

export default Products