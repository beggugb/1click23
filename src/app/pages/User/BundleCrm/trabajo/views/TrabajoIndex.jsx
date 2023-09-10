import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { trabajoData, trabajoCreate, trabajoUpdate  } from '@reducers/crm/trabajoSlice'
import Loading from '@components/snippets/Loading'
import Table from '@components/tables/TableRd'
import Select from '@components/selects/Select'
import {  getCiudades, _tipoSucursal, _tipoTipo, _tipoTiempo  } from '@data/dataLoad'
import { _columndTrabajos } from '@data/dataModels'
import { XMarkIcon, CalendarDaysIcon, MapPinIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const _nitem ={
  titulo: "",
  vencimiento:"",
  tipo:"",
  tiempo:"",
  ciudad:"",
  requerimientos:"",
  caracteristicas:"",
  enlace:"",
  clienteId: 0
}

const TrabajoIndex = () => {
    const dispatch = useDispatch()      
    const { data, total, pagina, paginas, loading } = useSelector((state) => state.trabajo)

    const { item } = useSelector((state) => state.cliente)
    const [indicador, setindicador] = useState(-1);
    const [nitem, setnitem] = useState(_nitem);    
    const [view, setview] = useState(false);    
    const [views, setviews] = useState(false);      
    const [ciudades, setciudades] = useState([]); 
 

 
    const getDatas = (pagina) =>{                         
        let iok = {
            pagina : pagina,
            num:12,
            parametro: "",        
            prop: "nombre",
            clienteId: item.id
        }
        dispatch(trabajoData(iok))                        
    }
 

    const getCitys = () =>{
      let iok = getCiudades(1)      
      setciudades(iok)
    }

  
  useEffect(() => {      
    getDatas(1)                
    getCitys()
  return () => {      
      /*dispatch(resetClientes())      */
    };
  }, []);
  
  
  const handleReset = () =>{      
    setnitem(_nitem)     
    setindicador(-1)                
  }


 

  const getData = (pagina,num) =>{     
    if(pagina > 0){
      let iok = {
        pagina : pagina,
        num:num,
        parametro: "",        
        prop: "nombre",
        clienteId: item.id
    }
    dispatch(trabajoData(iok))                        
    }                  
}
const setIndicador = (key,prp) =>{      
  if(key === indicador){
    setindicador(0) 
    setnitem(_nitem)
  }else{    
    setindicador(key) 
    setnitem(prp)
  }      
}

const handleChange = (prp,val) =>{     
  setnitem({
      ...nitem,
      [prp]: val
  })      
}



const handleSave = () =>{  
  if(nitem.id){    
    let hk = {...nitem}          
    hk.pagina     = 1
    hk.num        = 12
    hk.clienteId  = item.id        
    dispatch(trabajoUpdate(hk));   
  }else{
    let hk = {...nitem}      
    hk.clienteId  = item.id      
    hk.pagina     = 1
    hk.num        = 12    
    dispatch(trabajoCreate(hk));   
  }    
    handleReset()
}




return (
  <>
    <div className="h-auto w-full flex-col">     
        <div className="h-480 mt-1 flex w-full">                     
              <div className='w-2/6 flex-col border'>
                  <div className='h-8 border-b w-full bg-gray-100 font-bold pl-2 text-[10px] pt-2 text-gray-600'>
                     Datos de registro 
                  </div>
                  <div className='p-2'>
                  <div className='h-14 flex-col items-center pr-1 pl-2'>
                      <label htmlFor="titulo" className='w-full text-[11px] text-gray-500 font-bold'>Titulo :</label>
                      <input                              
                        type="text"
                        onChange={(e)=>handleChange(e.target.name,e.target.value)}
                        value={nitem.titulo || ""}                
                        name="titulo"
                        className="h-7 w-full text-[11px] pt-2 pl-2 block border border-gray-300  rounded  focus:border-gray-200 focus:bg-gray-50 text-gray-500 focus:text-gray-600"
                      />
                  </div>
                  <div className='h-9 flex items-center pr-1'>
                    <label htmlFor="ciudad" className='w-1/3 pl-2 text-[11px] text-gray-500 font-bold'>Ciudad :</label>
                    <div className='w-2/3 flex items-center'>
                    <Select
                        options={ciudades}
                        option={nitem.ciudad}                                    
                        handleChange={handleChange} 
                        name={"ciudad"}
                        tipo={"local"}
                        /> 
                    </div>    
                  </div>

                  

                  <div className='h-9 flex items-center pr-1'>
                      <label htmlFor="telefono" className='w-1/3 pl-2 text-[11px] text-gray-500 font-bold'>Teléfono :</label>
                      <input                              
                        type="text"
                        onChange={(e)=>handleChange(e.target.name,e.target.value)}
                        value={nitem.telefono || ""}                
                        name="telefono"
                        className="h-7 w-2/3 text-[11px] pt-2 pl-2 block border border-gray-300  rounded  focus:border-gray-200 focus:bg-gray-50 text-gray-500 focus:text-gray-600"
                      />                                     
                  </div> 

                  <div className='h-9 flex items-center pr-1'>
                      <label htmlFor="tipo" className='w-1/6 pl-2 text-[11px] text-gray-500 font-bold'>Tipo :</label>
                      <div className='w-2/6 flex items-center'>
                      <Select
                          options={_tipoTipo}
                          option={nitem.tipo}                                    
                          handleChange={handleChange} 
                          name={"tipo"}
                          tipo={"local"}
                      />
                      </div>
                      <label htmlFor="tiempo" className='w-1/6 pl-2 text-[11px] text-gray-500 font-bold'>Tiempo :</label>
                      <div className='w-2/6 flex items-center'>
                        <Select
                            options={_tipoTiempo}
                            option={nitem.tiempo}                                    
                            handleChange={handleChange} 
                            name={"tiempo"}
                            tipo={"local"}
                        />
                      </div>
                  </div>

                  <div className='h-9 flex items-center pr-1'>
                      <label htmlFor="enlace" className='w-1/3 pl-2 text-[11px] text-gray-500 font-bold'>Enlace :</label>
                      <input                              
                        type="text"
                        onChange={(e)=>handleChange(e.target.name,e.target.value)}
                        value={nitem.enlace || ""}                
                        name="enlace"
                        className="h-7 w-2/3 text-[11px] pt-2 pl-2 block border border-gray-300  rounded  focus:border-gray-200 focus:bg-gray-50 text-gray-500 focus:text-gray-600"
                      />
                  </div>

                  <div className='h-9 flex items-center pr-1'>
                      <label htmlFor="vencimiento" className='w-1/3 pl-2 text-[11px] text-gray-500 font-bold'>Vencimiento :</label>
                      <input                              
                        type="date"
                        onChange={(e)=>handleChange(e.target.name,e.target.value)}
                        value={nitem.vencimiento || ""}                
                        name="vencimiento"
                        className="h-7 w-2/3 text-[11px] pt-1 pl-2 block border border-gray-300  rounded  focus:border-gray-200 focus:bg-gray-50 text-gray-500 focus:text-gray-600"
                      />
                  </div>

                  <div className='h-14 flex-col items-center pl-2 pr-1'>
                    <label htmlFor="requerimientos" className='w-full text-[11px] text-gray-500 font-bold'>Requerimientos :</label>
                    <input                              
                        type="text"
                        onChange={(e)=>handleChange(e.target.name,e.target.value)}
                        value={nitem.requerimientos || ""}                
                        name="requerimientos"
                        className="h-7 w-full text-[11px] pt-2 pl-2 block border border-gray-300  rounded  focus:border-gray-200 focus:bg-gray-50 text-gray-500 focus:text-gray-600"
                      /> 
                  </div>

                  <div className='h-28 flex-col items-center pl-2 pr-1'>
                    <label htmlFor="caracteristicas" className='w-full text-[11px] text-gray-500 font-bold'>Carcateristicas :</label>
                    <textarea                              
                        type="text"
                        onChange={(e)=>handleChange(e.target.name,e.target.value)}
                        value={nitem.caracteristicas || ""}                
                        name="caracteristicas"
                        className="w-full text-[11px] pt-2 pl-2 block border border-gray-300  rounded  focus:border-gray-200 focus:bg-gray-50 text-gray-500 focus:text-gray-600"
                      />
                  </div>

                  <div className='h-9 flex items-center pr-1 pl-1 '>
                      <button 
                        onClick={() => handleSave()}
                        className="w-full h-6 rounded-md bg-sky-400 flex items-center justify-center text-gray-100">
                        <ChevronRightIcon  className="h-5 w- text-gray-50" />                          
                      </button>
                  </div> 
                
                </div>                              
              </div>   

              <div className='w-4/6 flex-col ml-1 mr-1 border'>
                  <div className='h-8 border-b w-full bg-gray-100 font-bold pl-2 text-[10px] pt-2 text-gray-600'>
                     Postulaciones
                  </div>                
                <div className='p-1'>
                    <Table                                
                      type={"table"}
                      payload={"trabajos"}
                      data={data}
                      columnDefs={_columndTrabajos}
                      indicador={indicador}
                      setIndicador={setIndicador}
                      pagina={pagina}
                      paginas={paginas}
                      total={total}
                      handleData={getData}
                    />               
                </div>                
              </div>    
            </div>    
        </div>    
       
    <Loading loading={loading}/>    
  </>
   );
}

export default TrabajoIndex;
