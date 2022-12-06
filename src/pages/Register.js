import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../actions/UserActions';

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import { isEmail } from "validator";
import {createBrowserHistory } from 'history';

import styles from "./RegisterPage.module.css";

// const RequiredField = (value) => {
//   if (value) return null;
//   return <div>This field is required!</div>;
// };

// const ValidateEmail = (email) => {
//   if (isEmail(email)) return null;
//   return <div>This is not a valid email</div>;
// };

// const ValidatePassword = (password) => {
//   if (password.length >= 6 && password.length <= 40) return null;
//   return <div>The password must be between 6 and 40 characters.</div>;
// };
  
function Register (props) {
    const registerForm = useRef();
    const navigate = useNavigate();
    // initial state
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    
    return (
        <div className={styles.container}>
            <div className={styles.register}>
                <section>
                <div className={styles.registerTitle}>
                    <h4>Create an Account</h4>
                </div>
                </section>
                <section>
                <form>
                    <div className='field'>
                        <input
                            className={styles.registerInput}
                            name="email"
                            value={email}
                            placeholder="Email address"
                            onChange={(event) => setEmail(event.target.value)}
                            // validations={[RequiredField, ValidateEmail]}
                        />
                    </div>
                    <div className='field'>
                        <input
                            type="password"
                            className={styles.registerInput}
                            name="password"
                            value={password}
                            placeholder="Password"
                            onChange={(event) => setPassword(event.target.value)}
                            // validations={[RequiredField, ValidatePassword]}
                        />
                    </div>
                    <div className='field'>
                        <input
                            type="password"
                            className={styles.registerInput}
                            name="confirmPassword"
                            value={confirmPassword}
                            placeholder="Confirm Password"
                            onChange={(event) => {
                            const value = event.target.value;
                            setConfirmPassword(value);
                            if (password !== value) {
                                setError("Confirm Password should match with password");
                            } else {
                                setError("");
                            }
                            }}
                            // validations={[RequiredField, ValidatePassword]}
                        />
                        {error}
                    </div>
                    <button className={styles.registerButton} disabled={!!error}>
                        Register
                    </button>
                    <div className={styles.loginLink}>
                        <Link to="/login">Back to login</Link>
                    </div> 
                </form>
                </section>
            </div>
        </div>
    )
};

export default Register;