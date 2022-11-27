import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { allProducts } from '../delegates/Products';

export default function AllProducts() {

    const [allItems, setItems] = useState([]);
    const [orderValue, setOrder] = useState('desc');
    const [sortValue, setSort] = useState('date');

    useEffect(() => {
         allProducts()
           .then((res) => {
             let items = res.data;
             // sorted by updated time in descending order by default
             console.log("initial data: ", res.data);
             let sortedItems = items.sort((a,b) => {
                let fa = a.updated_at;
                let fb = b.updated_at;
                return (fa<fb? 1:((fa>fb)? -1:0));
                // return (fa>fb? 1:((fa<fb)? -1:0)); // ascending order
             })
             setItems(sortedItems);
             console.log("initial sorted data: ", sortedItems);
           })
           .catch((e) => {
             console.log(e.message);
           })
       }, [])

    const handleClick = (e) => {
        e.preventDefault();
        console.log("sorting...");
        console.log("sort by:", sortValue);
        console.log("order:", orderValue);

        var sortedData = allItems.sort((a,b) => {
            var fa = a.updated_at;
            var fb = b.updated_at;
            if (sortValue==="price") {
                fa = a.price * a.discount;
                fb = b.price * b.discount;
            } else if (sortValue==="owner") {
                fa = a.owner_id;
                fb = b.owner_id;
            } else {
                fa = a.updated_at;
                fb = b.updated_at;
            }

            if(orderValue==="asc"){
                console.log("orderVal===asc");
                return (fa>fb? 1:((fa<fb)? -1:0));
            }
            else{
                return (fa<fb? 1:((fa>fb)? -1:0));
            }
        });
        console.log("sorted...");
        console.log(sortedData);
        setItems(sortedData);
    };

    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container px-4 px-lg-5">
          <a className="navbar-brand"><h2>EKitchen</h2></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                      <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                      </li>
                      <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
                      <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle active" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                              <li>
                                <Link to="/products" className="dropdown-item active">All Products</Link>
                              </li>
                              <li><hr className="dropdown-divider" /></li>
                              <li><a className="dropdown-item" href="#!">My Order</a></li>
                              <li><a className="dropdown-item" href="#!">My Kitchen</a></li>
                          </ul>
                      </li>
                  </ul>
                  <form className="d-flex">
                      <button className="btn btn-outline-dark" type="submit">
                          <i className="person-circle me-1"></i>
                          Jing Xue
                          <span className="badge bg-dark text-white ms-1 rounded-pill">Logout</span>
                      </button>
                  </form>
              </div>
          </div>
        </nav>
        <header className="bg-dark py-1">
            <div className="container-md px-5 px-lg-5 my-3">
                <div className="container-md bg-dark">
                    <h3 className='text-white'><strong>All Products</strong></h3>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>
                                <div className="container-md px-5 px-lg-5 my-3">
                                    <select onChange={(e)=>{setSort(e.target.value);console.log("sort by:", e.target.value);}} className="form-select" aria-label="sort">
                                        <option value="updated_at">Updated Date</option>
                                        <option value="owner">Owner</option>
                                        <option value="price">Price</option>
                                    </select>
                                </div>
                            </th>
                            <th>
                                <div className="container-md px-5 px-lg-5 my-3">
                                    <select onChange={(e)=>{setOrder(e.target.value);console.log("order:", e.target.value);}} className="form-select" aria-label="order">
                                        <option value="desc">Descending</option>
                                        <option value="asc">Ascending</option>
                                    </select>
                                </div>
                            </th>
                            <th>
                                <div className="container-md px-5 px-lg-5 my-3">
                                    <button onClick={handleClick} className="btn btn-outline-light" >
                                        sort
                                    </button>
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
                        <div className="badge bg-dark text-white position-absolute">XX</div>
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
                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View Details</a></div>
                        </div>
                    </div>
                </div>
                )
            })}
            </div>
          </div>
        </body>
      <footer className="py-5 bg-dark">
          <div className="container"><p className="m-0 text-center text-white"><h5>Team Jing Xue, Jing Shu 2022</h5></p></div>
      </footer>
    </div>
  )


}
