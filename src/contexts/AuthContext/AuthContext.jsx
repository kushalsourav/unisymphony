import { createContext, useContext, useEffect, useReducer } from "react";
import AuthReducer from "../../reducers/AuthReducer/AuthReducer";
import { redirect, useNavigate , Navigate, useLocation} from "react-router-dom";

const initialAuthState = {
  user : {

  },
    username: "",
    email: "",
    password: "",
    login: true,
}


const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({children}) => {
    const [authState, authDispatch] = useReducer(AuthReducer, initialAuthState)
    const location = useLocation()
    const navigate = useNavigate()

    console.log(initialAuthState)

      return(
        <AuthContext.Provider value={{authState, authDispatch}} >
            {children}
        </AuthContext.Provider>
      )
}

export {AuthProvider, useAuth}