import { USER_LOGOUT, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, 
    USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, 
//     USER_PROFILE_FAIL, USER_PROFILE_REQUEST, USER_PROFILE_SUCCESS, 
//     USER_UPDATE_FAIL, USER_UPDATE_FAIL_MESSAGE, USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS 
   } from "../constants/userConstants";

function userSigninReducer(state={},action){
switch(action.type){
   case USER_SIGNIN_REQUEST:
       return {loading: true};
   case USER_SIGNIN_SUCCESS:
       return {loading: false, userInfo: action.payload};
   case USER_SIGNIN_FAIL:
       return {loading: false, error: action.payload};
   case USER_LOGOUT:
       return {};
   default: 
       return state;
}
}

function userRegisterReducer(state={},action){
switch(action.type){
   case USER_REGISTER_REQUEST:
       return {loading: true};
   case USER_REGISTER_SUCCESS:
       return {loading: false, userInfo: action.payload};
   case USER_REGISTER_FAIL:
       return {loading: false, error: action.payload};
   default: 
       return state;
}
}

export { userSigninReducer, userRegisterReducer }
