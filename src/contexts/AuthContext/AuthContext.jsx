import { createContext, useContext, useReducer } from "react";
import AuthReducer from "../../reducers/AuthReducer/AuthReducer";

const intialAuthState = {
 login:"",
 username: "",
};

const AuthContext = createContext(null);

const  useAuth = () => useContext(AuthContext)
const AuthProvider = ({children}) => {
    const [authState, authDispatch] = useReducer(intialAuthState, AuthReducer)

    return (
        <AuthContext.Provider value={{authState, authDispatch}}>
         {children}
        </AuthContext.Provider>
    );
}

export {AuthProvider, useAuth};
