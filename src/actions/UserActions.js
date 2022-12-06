import axios from "axios";
import Cookie from 'js-cookie';
import { SET_MESSAGE } from "../constants/messageConstants";
import { USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL, USER_LOGOUT, 
         USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAIL
        } from "../constants/userConstants";

const register = (username, email, password) => async(dispatch) => {
    dispatch({type: USER_REGISTER_REQUEST, payload: {username, email, password}});
    try {
        const res = await axios.post("/register", { username, email, password });
        console.log("Status:",res.status)
        if (res.status === 200){
          dispatch({ type: USER_REGISTER_SUCCESS, payload: res.data.data });
          //Cookie.set('userInfo', JSON.stringify(res.data));
          return Promise.resolve();
        }
        else{
        //   console.log("register error: " + res.data.data);
          dispatch({ type: USER_REGISTER_FAIL });
        //   dispatch({ type: SET_MESSAGE, payload: res.data.data });
          return Promise.reject();
        }        
      } catch (error) {
        dispatch({ type: USER_REGISTER_FAIL, payload: error.message });
        // dispatch({ type: SET_MESSAGE, payload: error.message });
        return Promise.reject();
      }
}

const signin = (email, password) => async(dispatch) => {
    dispatch({type: USER_SIGNIN_REQUEST, payload: {email, password}});
    try {
        const res = await axios.post("/signin", { email, password });
        console.log("signin status:",res.status)
        if (res.status === 200){
          console.log("signin response data:",res.data.data)
          dispatch({ type: USER_SIGNIN_SUCCESS, payload: res.data.data });
          Cookie.set('userInfo', JSON.stringify(res.data.data));
        }
        else{
          dispatch({ type: USER_SIGNIN_FAIL });
        }
      } catch (error) {
        dispatch({ type: USER_SIGNIN_FAIL, payload: error.message });
        dispatch({ type: SET_MESSAGE, payload: error.message });
      }
  }

  const logout = () => (dispatch) => {
    Cookie.remove("userInfo");
    dispatch({ type: USER_LOGOUT })
  }
  
  export { signin, register, logout }


