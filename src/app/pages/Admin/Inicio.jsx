import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clientesItem  } from '@reducers/crm/clienteSlice'

const Inicio = () => {          
   const dispatch  = useDispatch() 
   const user      = JSON.parse(localStorage.getItem('@usuarioUnity22'))       
   useEffect(() => {
      if(user.id){
         let iko ={
            id: user.id,
            tipo: 'unit'
         }
         dispatch(clientesItem(iko)) 
      }      
      return () => {
         
      };
   }, []);

 return (
    <div className="flex w-full p-1">
    
    </div>
 );
}

export default Inicio;
