import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { recomProducts } from '../delegates/Products'

export default function RecomProducts() {
    const [recomItems, initItems] = useState([]);


    useEffect(() => {
         recomProducts()
           .then((res) => {
             initItems(res.data)
           })
           .catch((e) => {
             console.log(e.message)
           })
       }, [])

    return (
      <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
      {recomItems.map( (item,idx) => {
            return (
        <div className="col mb-5" id={idx}>
          <div className="card h-100">
              <div className="badge bg-dark text-white position-absolute">Hot Sale</div>
              <img className="card-img-top-fluid" src={item.image} alt="product" />
              <div className="card-body p-4">

                  <div className="text-center">
                      <h5 className="fw-bolder">{item.name}</h5>
                      {item.discount < 1.0 &&
                        <span className="text-muted text-decoration-line-through">${item.price}</span>
                      }
                      ${(item.price * item.discount).toFixed(2)}
                  </div>
              </div>

              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center"><Link to={`/product/${item.id}`} className="btn btn-outline-dark mt-auto">View Details</Link></div>
              </div>
          </div>
      </div>
        )
    })}
    </div>
  )
}
