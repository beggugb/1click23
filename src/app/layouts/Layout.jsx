import React,{useEffect,useState} from "react";
import { Outlet, Routes, Route, Link  } from 'react-router-dom'
import Inicio         from '@pages/Admin/AdmRoute'
import Crm            from '@pages/User/BundleCrm/CrmRoute'
import Inventario     from '@pages/User/BundleInventario/InventarioRoute'
import { useDispatch} from "react-redux";
import { setModulo}   from '@reducers/auth/usuarioSlice'
import NoMatch        from '@layouts/NoMatch'
import { AuthContext } from '@auth';
import { getModulos } from '@core/routes'
import { MinusSmallIcon, PlusSmallIcon, UserCircleIcon, ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";

function Layout(){  
  const dispatch = useDispatch()   
  const { onLogout } = React.useContext(AuthContext)    
  const [modulos, setmodulos] = useState([]); 
  const [setu, setsetu] = useState(0);    
  let us  = JSON.parse(localStorage.getItem('@usuarioUnity22')) 
  
  useEffect(() => {
    let kk = getModulos(us.rol)
    setmodulos(kk)
}, []);

 const setsetus = (pky,_key) =>{    
    setsetu(pky)
    dispatch(setModulo(_key))    
 }

  return(
    <div className="flex-1 mx-auto h-3/4">
      <div className="h-8 flex border border-gray-500">
        <div className="w-2/12 bg-gray-500 flex pl-3 text-md text-gray-50 font-bold items-central pt-1">
          1CLICK - 3.1
        </div>

        <div className="w-7/12 flex bg-gray-400 text-[10px] text-gray-500 font-bold items-central">
            <div className="w-1/12 items-center justify-center flex">
              <UserCircleIcon className="h-6 w-6 text-gray-50 font-bold" />         
            </div>
            <div className="w-3/12 items-center text-gray-50 flex pl-2">
              Username : {us.username}
            </div>
            <div className="w-3/12 items-center text-gray-50 flex pl-2">
              Rol: {us.rol}
            </div>          
         
        </div>

        <div className="w-2/12 flex-col bg-gray-400">
        
        </div>        

        <div className="w-1/12 flex justify-center items-center bg-gray-400">
            <button
              onClick={() => onLogout()}
              className="shadow-base w-10 h-6 bg-rose-400 rounded-md text-sm font-bold flex pt-1 pl-3">
              <ArrowRightOnRectangleIcon className="h-4 w-4 text-gray-50" />        
            </button>
        </div>
      </div>

      <div className="h-580 flex  w-full">
        <div className="w-1/12 flex-col bg-gray-500">
          { modulos.map((prop,index)=>(
              <Link 
               onClick={() => setsetus(index,prop.key)}
                to={prop.layout+prop.path}
                className={index === setu ? " bg-sky-500 border-sky-600 uppercase flex items-center justify-left pl-1 pr-1 h-8":"h-8 border-gray-400 uppercase border pl-1 pr-1  hover:bg-sky-400 flex items-center justify-left"}        
                key={prop.key}>                                
                {index === setu ?
                <MinusSmallIcon className="h-4 w-4 text-gray-50" />:
                <PlusSmallIcon className="h-4 w-4 text-gray-50" />}  
                <span className={index === setu ? "text-[10px] text-gray-50 font-bold":"text-[10px]  text-white"}>{prop.name}</span>  
              </Link>               
          ))}
          
        </div>
        <div className="h-max w-11/12 p-1">
          <Outlet/>   
          <Routes>            
            <Route path="adm/*" element={<Inicio/>}/>            
            <Route path="user/*" element={<Crm/>}/>                        
            <Route path="inventario/*" element={<Inventario/>}/>
            <Route path="*" element={<NoMatch />} /> 
          </Routes> 
        </div>

      </div>
    </div>  
    )
}
export default Layout;

