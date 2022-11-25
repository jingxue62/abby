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
      <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
      {topItems.map( (item,idx) => {
            return (
        <div className="col mb-5" id={idx}>
          <div className="card h-100">
              <img className="card-img-top" src={item.image}/>
              <div className="card-body p-4">

                  <div className="text-center">
                      <h5 className="fw-bolder">{item.name}</h5>
                      <div className="d-flex justify-content-center small text-warning mb-2">
                          <i className="bi bi-star-fill"></i>
                          <div className="star-fill"></div>
                          <div className="bi-star-fill"></div>
                          <div className="bi-star-fill"></div>
                          <span className="suit-heart-fill"></span>
                      </div>
                      {item.discount < 1.0 &&
                        <span className="text-muted text-decoration-line-through">${item.price}</span>
                      }
                      ${(item.price * item.discount).toFixed(2)}
                  </div>
              </div>

              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View Details</a></div>
              </div>
          </div>
      </div>
        )
    })}
    </div>
  )
}
