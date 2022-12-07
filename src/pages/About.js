import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { IconContext } from "react-icons";
import { ImSearch } from "react-icons/im";
import { BiSort } from "react-icons/bi";
import { MdViewColumn } from "react-icons/md";

function About() {
  let navigate = useNavigate();
  return (
    <div className="App">
      <header className="py-1">
          <div className="container px-4 px-lg-5 my-5">
          </div>
      </header>

      <body className="py-2">
        <div className="container">
            <div className="row">
                  <p className="fs-1 fw-bold">Build an online Kitchen</p>
                  <p className="fs-6 fw-bold">
                    EKitchen is a software platform multipurpose-built to help people start, build, and grow your 
                    homemade food businesses,</p>
                <p className="fs-6 fw-bold">
                    and help customers to search/order favorite food in their community. </p>
            </div>
            <div className="row">
                  <div className="col px-4 px-lg-5 my-1">
                    <button className= "button" onClick={()=>{navigate("/register")}}> 
                        GET STARTED
                    </button>
                  </div>
            </div>
            <div className="row">
                <img src="/images/about-1.png"></img>
            </div>
        </div >
        <div className="container">     
            <div className="row">
                  <p className="fs-1 fw-bold">Simple and easy to order Homemade food</p>

            </div>
        </div >

        <section className='section2'>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "var(--white)",
            fontSize: 20,
          }}
        >
          <IconContext.Provider
            value={{
              style: {
                fontSize: 40,
                color: "inherit",
              },
            }}
          >
            <ImSearch />
          </IconContext.Provider>
          <h3 style={{ marginBottom: 10 }}> Search favorite food</h3>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "var(--white)",
            fontSize: 20,
          }}
        >
          <IconContext.Provider
            value={{
              style: {
                fontSize: 40,
                color: "inherit",
              },
            }}
          >
            <BiSort />
          </IconContext.Provider>
          <h3 style={{ marginBottom: 10 }}>Easily Sort food</h3>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "var(--white)",
            fontSize: 20,
          }}
        >
          <IconContext.Provider
            value={{
              style: {
                fontSize: 40,
                color: "inherit",
              },
            }}
          >
            <MdViewColumn />
          </IconContext.Provider>
          <h3 style={{ marginBottom: 10 }}>Easily View Products</h3>
          
        </div>
      </section>
      </body>
  </div>
  );
}

export default About;
