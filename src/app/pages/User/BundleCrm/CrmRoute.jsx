import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import {  useSelector } from 'react-redux'
import Inicio from './Inicio'
import ClienteEdit from './cliente/views/ClienteEdit'
import Sucursales  from './sucursal/views/SucursalIndex'
import Trabajo     from './trabajo/views/TrabajoIndex'
import Mapas       from './sucursal/views/SucursalMapas'
import { getSubModulos } from '@core/routes'


const CrmRoute = () => {
  const { modulo } = useSelector((state) => state.usuario)  
  const [modulos, setmodulos] = useState([]); 
  const [setu, setsetu] = useState(0);
  

  useEffect(() => {
    let kk = getSubModulos(modulo)
    setmodulos(kk)
}, [modulo]);


  return (
      <div>
        <div className="h-7 bg-gray-200 w-full flex items-center ml-1">            
          { modulos &&
              modulos.map((ti, index)=>(                
              <Link 
                to={ti.layout+ti.path}
                onClick={() => setsetu(index)}
                className={index === setu ? "w-40 h-6 items-center  justify-center flex bg-sky-200 ": "h-6 w-40 border-r border-gray-300  bg-gray-100 hover:bg-sky-100  justify-center items-center flex"}        
                key={index}>      
                  <span className="w-1/4 inline-flex justify-center items-center ml-1">
                    {ti.icon}
                  </span>
                  <span className="w-3/4 text-gray-600 ml-1 text-[10px] tracking-wide truncate">{ti.name}</span>                                                                                                                                
              </Link>                 
          ))}
        </div>
        <div className="h-full w-full flex-1 p-1">            
            <Routes>                  
                  <Route path="/" element={<Inicio />}/>
                  <Route path="/perfil" element={<ClienteEdit />}/>
                  <Route path="/sucursales" element={<Sucursales />}/>
                  <Route path="/mapas" element={<Mapas />}/>
                  <Route path="/trabajos" element={<Trabajo />}/>
            </Routes> 
        </div> 
      </div>      
  );
}

export default CrmRoute;
