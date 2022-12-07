import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { allProducts } from '../actions/Products';

export default function AllProducts() {

    const [allItems, setItems] = useState([]);
    const [sortValue, setSort] = useState(1);

    useEffect(() => {
         allProducts()
           .then((res) => {
                var items = res.data;
                var sortedData = items.sort((a,b) => {
                    var fa = a.updated_at;
                    var fb = b.updated_at;
                    if (sortValue===1) {
                        fa = a.updated_at;
                        fb = b.updated_at;
                    } else {
                        fa = a.realPrice;
                        fb = b.realPrice;
                    }

                    if(sortValue===2){
                        // sort in ascending order
                        return (fa>fb? 1:((fa<fb)? -1:0));
                    } else{
                        // sort in descending order
                        return (fa<fb? 1:((fa>fb)? -1:0));
                    }
                })
                setItems(sortedData);
                console.log(sortedData);
           })
           .catch((e) => {
             console.log(e.message);
           })
       }, [sortValue])
    
    return (
      <div className="App">
        <header className="bg-dark py-1">
            <div className="container-md px-5 px-lg-5 my-3">
                <div className="container-md bg-dark">
                    <h3 className='text-white'><strong>All Products</strong></h3>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th className='text-white'>
                                <h4> <strong>Sort</strong></h4>
                            </th>
                            <th>
                                <div className="container-md px-5 px-lg-5 my-3">
                                    <select onChange={(e)=>{setSort(Number(e.target.value))}} 
                                        className="form-select" aria-label="sort">
                                        <option value="1">Updated Date</option>
                                        <option value="2">Price From Low to High</option>
                                        <option value="3">Price From High to Low</option>
                                    </select>
                                </div>
                            </th>
                        </tr>
                    </thead>
                </table>
            </div>
      </header>
        <body className="bg-dark py-2">
          <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {allItems.map( (item,idx) => {
                    return (
                <div className="col mb-5" id={idx}>
                    <div className="card h-100">
                        <div className="badge bg-dark text-white position-absolute" id={idx}>{item.username}</div>
                        <img className="card-img-top-fluid" id={idx} src={item.image} alt="product" />
                        <div className="card-body p-4" id={idx}>
                            <div className="text-center" id={idx}>
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
          </div>
        </body>
    </div>
  )
}
