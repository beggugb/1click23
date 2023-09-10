import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux";

import Categorias from './categoria/views/CategoriaIndex'
import Productos  from './productos/views/ProductoIndex'
import ProductoEdit from './productos/views/ProductoEdit'
import { getSubModulos } from '@core/routes'

const CrmRoute = () => {
  const navigate = useNavigate()  
  const [modulos, setmodulos] = useState([]); 
  const [setu, setsetu] = useState(0);
  const { smodulo } = useSelector((state) => state.producto)

  useEffect(() => {
    let kk = getSubModulos(5)
    setmodulos(kk)
    /*dispatch(setModulo(""))*/
}, []);



  return (
      <div className="min-h-fit w-full flex-1">            
        <div className="h-550 w-full flex-1">
          <div className="h-8 items-center flex w-full border bg-gray-200"> 
            { modulos &&
                  modulos.map((ti, index)=>(                
                    <Link 
                      to={ti.layout+ti.path}
                      onClick={() => setsetu(index)}
                      className={index === setu ? "w-40 h-6 items-center border border-sky-200 justify-center flex bg-sky-200 ": "h-6 w-40  bg-gray-100 hover:bg-sky-100  justify-center items-center flex  border border-gray-300"}        
                      key={index}>      
                      <span className="w-1/4 inline-flex justify-center items-center ml-1">
                        {ti.icon}
                      </span>
                      <span className="w-3/4 text-gray-600 ml-1 text-[10px] tracking-wide truncate">{ti.name}</span>                                                                                                                                
                  </Link>               
                ))}            
            </div>
            <div>

           
          



            </div>
            <div className="flex w-full">
              <Routes>
                  <Route path="/" element={<Productos />}/>  
                  <Route path="/productos" element={<Productos />}/>  
                  <Route path="/productos/new" element={<ProductoEdit />}/>
                  <Route path="/categorias" element={<Categorias />}/>                  
              </Routes> 
            </div>

            
        </div>          
      </div> 
  );
}

export default CrmRoute;
