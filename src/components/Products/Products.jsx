import React from 'react'
import data from './allData'
import './products.css'

function Products() {
    const allData = data.map(items=>{
        return(
            <div className="display-single-component">
                <img src={items.img} alt="img"/>
                <h2>{items.title}</h2>
                <p>{items.desc}</p>
                <button>Read More</button>
            </div>
        )
    })
  return (
    <div className='container-contents'>
        <div className="header-div">
            <p>Are you looking for</p>
            <h2>Nisha Products?</h2>
            <p>View some of our products</p>
        </div>

        <div className='contents'>
           {allData}
        </div>
    </div>
  )
}

export default Products