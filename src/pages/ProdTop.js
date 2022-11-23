import React, { useState, useEffect } from 'react'
import { topProducts } from '../delegates/Products'
// import { useSelector, useDispatch } from 'react-redux'

export default function TopProducts() {
    const [topItems, initItems] = useState([]);
    // const fetchData = async () => {
    //   const response = await fetch('/products/top/4', {mode:'no-cors'})
    //   if (!response.ok) {
    //     console.log(response.json().data);
    //     throw new Error('Data coud not be fetched!')
    //   } else {
    //     return response.json();
    //   }
    // }


    useEffect(() => {
         topProducts()
           .then((res) => {
             initItems(res.data)
           })
           .catch((e) => {
             console.log(e.message)
           })
       }, [])

    return (
      <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
      {topItems.map( (item,idx) => {
            return (
        <div class="col mb-5">
          <div class="card h-100">
              <img class="card-img-top" src={require('../images/12der45h5vomw1.png')}/>
              <div class="card-body p-4">

                  <div class="text-center">
                      <h5 class="fw-bolder">{item.name}</h5>
                      <div class="d-flex justify-content-center small text-warning mb-2">
                          <i class="bi bi-star-fill"></i>
                          <div class="star-fill"></div>
                          <div class="bi-star-fill"></div>
                          <div class="bi-star-fill"></div>
                          <span class="suit-heart-fill"></span>
                      </div>
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
