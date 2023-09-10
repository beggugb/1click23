import axios from 'axios'
import { apiUrl } from '@helpers'

  const login = async (email, password) => {
    const response = await axios
      .post(apiUrl + "clientes/login/cliente", {
        email,
        password,
      });
    let resUser = response.data.result.usuario;
    let resToken = response.data.result.token;    
    let authOp = {      
      message: response.data.result.message,
      auth: response.data.result.auth
    };
  
    if (resUser) {
      localStorage.setItem("@usuarioUnity22", JSON.stringify(resUser));
      localStorage.setItem("@tokenUnity22", JSON.stringify(resToken));      
    }
    return authOp;
  };

const logout = () =>{
    localStorage.removeItem("@usuarioUnity22")
    localStorage.removeItem("@tokenUnity22")    
}

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("@usuarioUnity22"));
  };

const AuthService = {        
    login,
    logout,
    getCurrentUser,
  };
  
export default AuthService;