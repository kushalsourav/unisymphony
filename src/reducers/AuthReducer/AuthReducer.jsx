import React from 'react';

const AuthReducer = (state, action) => {

    switch(action.type) {
       case "LOGIN" : {
        return {...state, login:state.login}
       }
      default: return state
    }
    
}

export default AuthReducer;
