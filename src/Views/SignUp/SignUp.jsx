import {useAuth} from "../../contexts/AuthContext/AuthContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faArrowLeftLong} from '@fortawesome/free-solid-svg-icons';
import  Form from  "../../components/Form/Form";
import AuthBox from "../../components/AuthBox/AuthBox";
import { Link, useNavigate } from 'react-router-dom';
import "./SignUp.css"
import axios from "axios";
import ProfileBlock from "../../components/ProfileBlock/ProfileBlock";
import InterestSelection from "../../components/InterestSelection/InterestSelection";
import { useData } from "../../contexts/DataContext/DataContext";
// import useToast from "../../hooks/useToast";

const SignUp = () => {
const {authState, authDispatch} = useAuth()
// const postToast = useToast()
let path ;
const {dataState, dataDispatch} = useData();
const {currentPath} = dataState;
const navigate = useNavigate()
const signupHandler = async (e) => {
    console.log("function calling")
    e.preventDefault();
    if(authState.email !== '' && authState.username !== '' && authState.password !== '' &&  authState.role !== '')  {
        console.log("function calling")
        try {
            await axios.post('http://localhost:8000/user/signup', {email: authState.email, username: authState.username, password: authState.password}).then((response) => {
                if(response.data.success === false) {
                    // postToast("warning", response.data.message)
                    console.log("function calling noooo", response.data.error)
                } else {
                    console.log("function calling yesss", response.data)
                    dataDispatch({type:"SET_PATH", currentPath:"category"})
                    localStorage.setItem("token",response.data.token);
                    // postToast("success", "login please")
                    authDispatch({type:"CLEAR_INPUTS", email:"", username:"", password:""})
                    console.log("cleared")
                }
            })
        } catch (error) {
            console.log(error)
        }
} else {
    // !authState.password && postToast("warning", "please enter yout password");
    // !authState.email && postToast("warning", "please enter your email");
    // !authState.username && postToast("warning", "please enter your username");
}


   
}
if(currentPath == "registration") {
   path = <>
           <div className="signup_view">
        <AuthBox>
        <div className="box-1">
                <Link to="/Auth" className='box-round'>
                  <FontAwesomeIcon icon={faArrowLeftLong} className='icon-center' />
                </Link>
                <h4 className='box-header'>Create your Account</h4>
                <Link to="/" className='box-round'>
                <FontAwesomeIcon icon={faXmark} className='icon-center' />
                </Link>
        </div>
            <Form authDispatch={authDispatch} handleForm={signupHandler} />
           <div className="signup-box" onClick={() => {
            
            console.log(currentPath,dataState, authState)
         
           }}>
           <p className='signup-text'>Already have an account?</p><Link to="/Auth/Signin" className='signup-link'>Sign in</Link>
            </div>
        </AuthBox>
        </div>
   </>
} else if(currentPath === "category") {
    path = <>
    <ProfileBlock  data={dataState}  setData={dataDispatch} />
    </>
}else if(currentPath === "interests") {
    path = <>
    <InterestSelection data={dataState} setData={dataDispatch} />
    </>
}
console.log(dataState.userProfile)

    return(
        <>
  {path}
      
        </>
    )
}
export default SignUp;