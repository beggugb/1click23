import React,{ useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from '@reducers/auth/authSlice'

const AuthProvider = ({ children }) =>{
    const navigate = useNavigate();
    const dispatch = useDispatch();    
    const { auth } = useSelector(state =>state.auth)
    const user  = JSON.parse(localStorage.getItem('@usuarioUnity22'))
    const token = JSON.parse(localStorage.getItem('@tokenUnity22'))

    
    const handleLogin = (event) =>{                   
        event.preventDefault()         
    
        const io ={
            email : event.target[0].value,
            password : event.target[1].value
        }
        dispatch(login(io));                       
    }

    const handleLogout= () =>{
        dispatch(logout());
        navigate('/');
    }
    const value = {
        user,
        onLogin: handleLogin,
        onLogout: handleLogout
    };
    const reload = () =>{               
        if(token){
            switch (user.rol) {
                case "admin":
                    navigate('/admin/adm/');            
                    break;
                case "cliente":
                    navigate('/admin/user/');            
                    break;                
                default:
                    navigate('/admin/inicio/');            
                    break;
            }            
        }else{
            navigate('/');
        }       
    }
    
    useEffect(() => {
        reload()
    }, [auth]);

    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )

}
export default AuthProvider;