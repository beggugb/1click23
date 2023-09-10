import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { sucursalData, sucursalCreate, sucursalUpdate, sucursalDelete, sucursalItem  } from '@reducers/crm/sucursalSlice'
import { horarioData  } from '@reducers/crm/horarioSlice'
import Loading from '@components/snippets/Loading'
import Table from '@components/tables/TableRd'
import Select from '@components/selects/Select'
import {  getCiudades, _tipoSucursal  } from '@data/dataLoad'
import { _columndSucursal } from '@data/dataModels'
import { XMarkIcon, CalendarDaysIcon, MapPinIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import FormMapa from '@components/forms/FormMapas'
import Horario from '../includes/HorarioIndex'

const _nitem ={
  nombre: "",
  encargado: "",
  ciudad: "",
  estado: "",
  direccion: "",
  hinicio: "",
  hfin: "",
  hestado: false,
  telefono: "",
  celular: "",
  tipo: "",
  icon: "",
  latitude: 0,
  longitude: 0,    
  portada: "",
  clienteId: 0
}

const SucursalIndex = () => {
    const dispatch = useDispatch()      
    const { data, total, pagina, paginas, loading } = useSelector((state) => state.sucursal)

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
        dispatch(sucursalData(iok))                        
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
    dispatch(sucursalData(iok))                        
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

const handleSubmits = () =>{  
  let hk = {    
    id         : nitem.id,
    clienteId  : item.id,
    latitude   : nitem.latitude, 
    longitude  : nitem.longitude,    
    pagina     : 1,
    num        : 12,
    tip        : 'unit'
  }  
  dispatch(sucursalUpdate(hk));
} 

const mapClicked = (e) =>{          
  const { lat, lng } = e
  setnitem({
      ...nitem,
      "latitude": lat,
      "longitude": lng
  })
}

const handleSave = () =>{  
  if(nitem.id){    
    let hk = {...nitem}          
    hk.pagina     = 1
    hk.num        = 12
    hk.clienteId  = item.id    
    dispatch(sucursalUpdate(hk));   
  }else{
    let hk = {...nitem}      
    hk.clienteId  = item.id
    hk.latitude   = item.latitude 
    hk.longitude  = item.longitude    
    hk.pagina     = 1
    hk.num        = 12
    dispatch(sucursalCreate(hk));   
  }    
    handleReset()
}

const handleCalendar = () =>{
  let iok={
    sucursalId: nitem.id
  }
  dispatch(horarioData(iok))  
  setviews(true)
}


return (
  <>
    <div className="h-auto w-full flex-col">     
        <div className="h-430 mt-1 flex w-full">                     
              <div className='w-1/4 flex-col border'>
                  <div className='h-8 border-b w-full bg-gray-100 font-bold pl-2 text-[10px] pt-2 text-gray-600'>
                     Datos de registro 
                  </div>
                  <div className='p-2'>
                  <div className='h-9 flex items-center pr-1 mt-1'>
                      <label htmlFor="nombre" className='w-1/3 pl-2 text-[11px] text-gray-500 font-bold'>Nombre :</label>
                      <input                              
                        type="text"
                        onChange={(e)=>handleChange(e.target.name,e.target.value)}
                        value={nitem.nombre || ""}                
                        name="nombre"
                        className="h-7 w-2/3 text-[11px] pt-2 pl-2 block border border-gray-300  rounded  focus:border-gray-200 focus:bg-gray-50 text-gray-500 focus:text-gray-600"
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
                      <label htmlFor="tipo" className='w-1/3 pl-2 text-[11px] text-gray-500 font-bold'>Tipo :</label>
                      <div className='w-2/3 flex items-center'>
                      <Select
                          options={_tipoSucursal}
                          option={nitem.tipo}                                    
                          handleChange={handleChange} 
                          name={"tipo"}
                          tipo={"local"}
                      />
                      </div>
                  </div>

                  <div className='h-28 flex-col items-center pl-2 pr-1'>
                    <label htmlFor="direccion" className='w-full text-[11px] text-gray-500 font-bold'>Dirección :</label>
                    <textarea                              
                        type="text"
                        onChange={(e)=>handleChange(e.target.name,e.target.value)}
                        value={nitem.direccion || ""}                
                        name="direccion"
                        className="w-full text-[11px] pt-2 pl-2 block border border-gray-300  rounded  focus:border-gray-200 focus:bg-gray-50 text-gray-500 focus:text-gray-600"
                      />
                  </div>

                  <div className='h-9 flex items-center mt-2 pr-1 pl-1 '>
                      <button 
                        onClick={() => handleSave()}
                        className="w-full h-6 rounded-md bg-sky-400 flex items-center justify-center text-gray-100">
                        <ChevronRightIcon  className="h-5 w- text-gray-50" />                          
                      </button>
                  </div> 
                  { nitem.id > 0 ?
                  <div className='h-9 w-full flex items-center border-t'>
                    <div className='w-1/2 flex justify-center'>
                       <button 
                         onClick={() => setview(true)}
                         className='h-7 border w-10 bg-red-400 flex justify-center rounded items-center'>
                         <MapPinIcon className="h-5 w-5 text-gray-50" />
                       </button>                        
                    </div> 
                    <div className='w-1/2 flex justify-center'>
                       <button 
                       onClick={() => handleCalendar()}
                       className='h-7 border w-10 bg-green-400 flex justify-center rounded items-center'>
                         <CalendarDaysIcon className="h-5 w-5 text-gray-50" />
                       </button>                        
                    </div> 
                 </div>:null
                  } 
                </div>                              
              </div>   

              <div className='w-3/4 flex-col ml-1 mr-1 border'>
                  <div className='h-8 border-b w-full bg-gray-100 font-bold pl-2 text-[10px] pt-2 text-gray-600'>
                     Sucursales
                  </div>                
                <div className='p-1'>
                    <Table                                
                      type={"table"}
                      payload={"sucursales"}
                      data={data}
                      columnDefs={_columndSucursal}
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
    <>
    { view ?
        <>
        <div className="justify-center items-center flex-1 fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="p-1 relative w-auto my-3 mx-auto max-w-lg flex-row justify-between">
                <div className="h-500 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <div className="ml-1 fixed h-10 w-500 border rounded shadow-md flex p-1 justify-between bg-white">                        
                       
                        <button 
                            onClick={() => setview(false)}
                            className="w-7 h-7 rounded-full bg-red-400 text-xs flex items-center justify-center text-white font-bold mr-4">                            
                            <XMarkIcon className="h-4 w-4 text-gray-50" />
                        </button>
                    </div>
                    
                    <div className="h-max border-4 p-1 mt-8">
                        <div className='h-410 w-full flex'>
                        { nitem.latitude &&   nitem.longitude ?
                        <FormMapa
                            item={nitem}
                            mapClicked={mapClicked}
                        />: null}  
                        </div>
                        <div className='h-10 w-full flex text-[10px] items-center'>
                          <button 
                            type="button"
                            onClick={()=> handleSubmits()}
                            className={nitem.id ? "w-40 h-7 rounded bg-orange-500 text-white font-bold items-center justify-center" : "w-40 h-9 rounded bg-sky-500 text-white font-bold flex" }>                                
                            <span className='font-bold  text-gray-50'>{nitem.id ? "Actualizar": "Registrar"}</span>                   
                          </button>
                        </div>                          
                    </div>                                                              
                </div>    
            </div>        
        </div>  
        <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
    : null  }
    </> 
    <>
    <Horario sucursalId={nitem.id} views={views} setviews={setviews}/>
    </> 
  </>
   );
}

export default SucursalIndex;
