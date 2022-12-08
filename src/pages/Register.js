import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../actions/UserActions';

import Form, { form } from "react-validation/build/form";
import Input from "react-validation/build/input";
import { isEmail } from "validator";
import {createBrowserHistory } from 'history';

// input validations 
const required = (value) => {
    if (!value) {
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
  
  const vusername = (value) => {
    if (value.length < 6 || value.length > 20) {
      return (
        <div className="alert alert-light" role="alert">
          The username must be between 6 and 20 characters.
        </div>
      );
    }
  };
  
  const vpassword = (value) => {
    if (value.length < 6 || value.length > 40) {
      return (
        <div className="alert alert-light" role="alert">
          The password must be between 6 and 40 characters.
        </div>
      );
    }
  };
  
function Register (props) {

    // initial state
    const [username, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [successful, setSuccessful] = useState(false);

    const userRegister = useSelector(state=>state.register);
    const { loading, userInfo, error } = userRegister;
    // const { message } = useSelector(state => state.message);
    const history = createBrowserHistory();
    const dispatch = useDispatch();
    const redirect = history.location.search? history.location.search.split("=")[1]:"/";  

    useEffect(() => {
        if(userInfo){
            history.push(redirect);
        }
        return () => {
          //
        };
    },[userInfo])
    
    let navigate = useNavigate();
    if (successful) {
        console.log("redirecting to login");
        navigate("/signin");
      }

    const sumbitHandler = (e) => {
        e.preventDefault();
        setSuccessful(false);
        // form.current.validateAll();

        dispatch(register(username,email,password))
        .then(() => {
            setSuccessful(true);
        })
        .catch(() => {
            setSuccessful(false);
        });
    };

    return <div className="form">
        <form className='form-container' onSubmit={sumbitHandler}>
            <div>
                <h4><strong>Register</strong></h4>
                <div className="form-group">
                    <label htmlFor="name">UserName</label>
                    <input type='text' name='username' id='username' placeholder = "username"
                        value={username} 
                        validations={[required, vusername]}
                        onChange={(e) => setName(e.target.value)}>
                    </input>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type='email' name='email' id='email' placeholder = "email"
                        value={email} 
                        validations={[required, validEmail]}
                        onChange={(e) => setEmail(e.target.value)}>
                    </input>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type='password' name='password' id='password' placeholder = "password"
                        value={password}
                        validations={[required, vpassword]}
                        onChange={(e) => setPassword(e.target.value)}>
                    </input>
                </div>
                <div className="form-group2">
                    <button type="submit" className='button primary full-width'>Sign Up</button>
                </div>
                <div className="form-group2">
                    {/* Already have an account? <Link to="/signin">Sign in</Link> */}
                    Already have an account? <Link to="/signin">
                      Sign in
                    </Link>
                </div>
                {/* {message && (
                    <div className="form-group">
                        <div className={ successful ? "alert alert-success" : "alert alert-danger" } role="alert">
                            {message}
                        </div>
                    </div>
                )} */}
                    <div className="form-group">
                        {loading && <div>loading...</div>}
                    </div>
            </div>
        </form>
        </div>
}

export default Register;