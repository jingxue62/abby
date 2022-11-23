import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { searchProducts } from '../delegates/Products'

export default function SearchProducts() {
    const [searchItems, initItems] = useState([]);
    const { content } = useParams();


    useEffect(() => {
         searchProducts(content)
           .then((res) => {
             initItems(res.data)
           })
           .catch((e) => {
             console.log(e.message)
           })
       }, [])

    return (
      <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
      {searchItems.map( (item,idx) => {
            return (
        <div class="col mb-5" id={idx}>
          <div class="card h-100">
              <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
              <div class="card-body p-4">

                  <div class="text-center">
                      <h5 class="fw-bolder">{item.name}</h5>
                      {item.discount < 1.0 &&
                        <span class="text-muted text-decoration-line-through">${item.price}</span>
                      }
                      ${item.price * item.discount}
                  </div>
              </div>

              <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View Details</a></div>
              </div>
          </div>
      </div>
        )
    })}
    </div>
  )
}
