import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from "react-router-dom"
import { getOrders } from '../delegates/Orders'

export default function GetOrders() {
    const [getItems, initItem] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { userId } = useParams();


    useEffect(() => {
         getOrders(userId)
           .then((res) => {
             initItem(res.data);
           })
           .catch((e) => {
             console.log(e.message)
           })
       }, []);

     let navigate = useNavigate();
     const handleCancelOrder = async (itemID) => {
       // console.log(itemID);
       setIsLoading(true);
       try {
           const config = {
               method: 'POST',
               headers: {
                   Accept: 'application/json',
                   'Content-Type': 'application/json',
               },
               body: JSON.stringify({id: itemID})
           };

           const response = await fetch('/orders/deleteOrder', config, {mode:'no-cors'});
           if (response.ok) {
             // console.log(response.json());
           } else {
             throw new Error('Data coud not be fetched!');
           }
         } catch (error) {
           console.log(error);
           throw new Error('Fatal Error encounted! Check console logs.');
       }
       setIsLoading(false);
       window.location.reload();
     };

    return (
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container px-4 px-lg-5">
              <a className="navbar-brand"><h2>EKitchen</h2></a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                          <li className="nav-item"><a className="nav-link active" href="/">Home</a></li>
                          <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
                          <li className="nav-item dropdown">
                              <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                  <li>
                                    <Link to="/products" className="dropdown-item">All Products</Link>
                                  </li>
                                  <li><hr className="dropdown-divider" /></li>
                                  <li>
                                      <Link to="/orders/user/1" className="dropdown-item">My Order</Link>
                                  </li>
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


          <body className="bg-dark py-5">
              <div className="container">
                  <div className="row">
                      <div className="col"><p className="fs-4 fw-bold text-left text-white">My Orders</p></div>
                      <div className="col"></div>
                      <div className="col"></div>
                  </div>
                  <div className="row">
                      <div className="col border-top px-4 px-lg-5 my-1"></div>
                  </div>
              </div>
              <table class="table table-dark">
                  <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Item</th>
                        <th scope="col">Progress</th>
                        <th scope="col">Price</th>
                        <th scope="col">Owner</th>
                        <th scope="col">Placed At</th>
                        <th scope="col">Actions</th>
                      </tr>
                  </thead>
                  <tbody>
                    {getItems.map( (item,idx) => {
                          return (
                      <tr>
                        <th scope="row">{idx+1}</th>
                        <td>{item.name}</td>
                        <td>In progress{item.status}</td>
                        <td>${item.price}</td>
                        <td>{item.username}</td>
                        <td>{item.created_at}</td>
                        <td>
                            <button type="button" className="btn btn-outline-light" onClick='#'>Chat</button>
                            <button type="button" className="btn btn-outline-light" onClick={() => handleCancelOrder(item.id)}>Cancel</button>
                        </td>
                      </tr>
                        )
                    })}
                  </tbody>
              </table>
          </body>

          <footer className="py-5 bg-dark">
              <div className="container"><p className="m-0 text-center text-white"><h5>Team Jing Xue, Jing Shu 2022</h5></p></div>
          </footer>
      </div>
  )
}
