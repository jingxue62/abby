import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { signin } from '../actions/UserActions';

import Form, { form }from "react-validation/build/form";
import Input from "react-validation/build/input";
import { isEmail } from "validator";
import {createBrowserHistory } from 'history';

// input validation
const required = (value) => {
    if (!value.toString().trim().length) {
      return (
        <div className="alert alert-light" role="alert">
          This field is required!
        </div>
      );
    }
  };
const validEmail = (value) => {
    if (!isEmail(value)) {
      return (
        <div className="alert alert-light" role="alert">
          This is not a valid email.
        </div>
      );
    }
  };

// functional component
function Signin (props) {

    // initial state
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const userSignin = useSelector(state=>state.userSignin);
    const { loading, userInfo, error } = userSignin;
    const { message } = useSelector(state => state.message);
    const dispatch = useDispatch();
    const history = createBrowserHistory();
    const redirect = history.location.search? history.location.search.split("=")[1]:"/";  
    console.log("userInfo:", userInfo)
    let navigate = useNavigate();
    useEffect(() => {
        if(userInfo){
            navigate(redirect);
            history.push(redirect);
        }
    },[userInfo])
    
    const sumbitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(email,password));
    }

    return <div className="form">
        <form className='form-container' onSubmit={sumbitHandler} >
            <div>
                    <h4><strong>Sign In</strong></h4>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type='email' name='email' id='email' placeholder = "email"
                           value={email}
                           validations={[required,validEmail]}
                           onChange={(e) => setEmail(e.target.value)}>
                    </input>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type='password' name='password' id='password' placeholder = "password"
                            value={password}
                            validations={[required]}
                            onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <div className="form-group2">
                    <button type="submit" className='button primary full-width'>Signin</button>
                </div>
                <div className="form-group2">
                    {/* New to EKitchen? <Link to="/register"> Register </Link> */}
                    New to eKitchen? <Link to={redirect === '/'? "/register": "/register?redirect" + redirect}> 
                      Register 
                    </Link>
                </div>      
                <div>
                    {message && (
                    <div className="form-group2">
                        <div className="alert alert-danger" role="alert">
                            {message}
                        </div>
                    </div>)}
                    <div className="form-group2">
                        {loading && <div>loading...</div>}
                    </div>
                </div>
            </div>
                
        </form>        
        </div>
}

export default Signin;