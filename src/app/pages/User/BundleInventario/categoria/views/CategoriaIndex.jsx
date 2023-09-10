import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { catesData, catesCreate, catesDelete, catesUpdate  } from '@reducers/inventario/cateSlice'
import Loading from '@components/snippets/Loading'
import Table from '@components/tables/TableEditItems'
import Switch from "react-switch";
import SearchInput from '@components/inputs/Search'
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const CategoriaIndex = () => {
    const dispatch = useDispatch()      
    const { item } = useSelector((state) => state.cliente)
    const { data, total, pagina, paginas, loading } = useSelector((state) => state.cate)
    const [indicador, setindicador] = useState(-1);
    const [nitem, setnitem] = useState({});    
    const [nitems, setnitems] = useState({});           
    const [parametro, setparametro] = useState("");

    const handleChange = (prp,val) =>{   
   
      setnitem({
          ...nitem,
          [prp]: val
      })      
    } 
    const handleChanges = (prp,val) =>{    
      setnitems({
          ...nitems,
          [prp]: val
      })      
    }
    const getDatas = (pagina) =>{                         
        let iok = {
            pagina : pagina,
            num:12,
            parametro: "",        
            prop: "nombre",
            clienteId: item.id
        }
        dispatch(catesData(iok))                        
    }
     
  useEffect(() => {      
    getDatas(1)                      
  return () => {      
      /*dispatch(resetClientes())      */
    };
  }, []);
  
  const handleSave = (num,prp,ord) =>{
    let iok= {}
    if(nitem.id){
      iok ={     
        pagina    : pagina,
        id        : nitem.id,   
        nombre    : nitem.nombre,        
        enabled   : nitem.enabled,
        abreviacion : nitem.abreviacion,
        parametro : "",
        prop      : prp,
        order     : ord,
        num       : num,
        clienteId: item.id
      } 
      dispatch(catesUpdate(iok));   
    }else{
      iok ={          
        pagina    : pagina,      
        nombre    : nitems.nombre,        
        abreviacion : nitems.abreviacion,
        enabled   : nitems.enabled,
        parametro : "",
        prop      : "nombre",
        order     : "asc",
        num       : 12,
        clienteId: item.id
      }       

      dispatch(catesCreate(iok));   
    }    
      handleReset()
  }
  const handleReset = () =>{
    setnitem({
      pagina: pagina,
      nombre: "",      
      enabled:false,
      abreviacion : ""
    })
    setnitems({
      pagina: pagina,
      nombre: "",      
      enabled:false,
      abreviacion : ""
    })     
    setindicador(-1)                
  }

  const handleEditar = (it) =>{    
    setindicador(it.id)
    setnitem(it)
  }
  const handleTrash = (pky,num,prp,ord) =>{
    let iok ={
      categoriaId: pky,
      pagina: pagina,
      parametro : "",
      prop      : prp,
      order     : ord,
      num       : num,
      clienteId: item.id
    }
    dispatch(catesDelete(iok))
  }

  const handleParametro = () =>{
    let iok = {
      pagina : pagina,
      num    : 12,
      parametro: "",        
      prop: "nombre",
      order: "asc",
      clienteId: item.id
  }
  dispatch(catesData(iok)) 
  }
  const handleSearch = (e) =>{    
    e.preventDefault();
      let iok = {
        pagina : pagina,
        num    : 12,
        parametro: parametro,        
        prop: "nombre",
        order: "asc",
        clienteId: item.id
    }
    dispatch(catesData(iok))       
  }

  const getData = (pagina,num,prop,orden) =>{     
    if(pagina > 0){
      let iok = {
        pagina : pagina,
        num:num,
        parametro: parametro,        
        prop: prop,
        order: orden,
        clienteId: item.id
    }
    dispatch(catesData(iok))                        
    }                  
}

const changeAA = (checked) => {               
    setnitem({
      ...nitem,
      "enabled": checked
  })
 }

const changesAA = (checked) => {               
    setnitems({
      ...nitems,
      "enabled": checked
  })
}

return (
  <>
    <div className="h-auto w-full flex-col">     
        <div className="h-430 mt-1 flex w-full">                     
              <div className='w-1/4 flex-col p-1'>
                <div className='h-52 border'>
                  <div className='h-8 border-b w-full bg-gray-100 font-bold pl-2 text-[10px] pt-2 text-gray-600'>
                     Datos de registro 
                  </div>
                  <div className='h-9 flex items-center pr-1 mt-1'>
                      <label htmlFor="nombre" className='w-1/3 pl-2 text-[11px] text-gray-500 font-bold'>Nombre :</label>
                      <input                              
                        type="text"
                        onChange={(e)=>handleChanges(e.target.name,e.target.value)}
                        value={nitems.nombre || ""}                
                        name="nombre"
                        className="h-7 w-2/3 text-[11px] pt-2 pl-2 block border border-gray-300  rounded  focus:border-gray-200 focus:bg-gray-50 text-gray-500 focus:text-gray-600"
                      />
                  </div>
                  <div className='h-9 flex items-center pr-1'>
                    <label htmlFor="abreviacion" className='w-1/3 pl-2 text-[11px] text-gray-500 font-bold'>Abreviación :</label>
                    <input                              
                      type="text"
                      onChange={(e)=>handleChanges(e.target.name,e.target.value)}
                      value={nitems.abreviacion || ""}                
                      name="abreviacion"
                      className="h-7 w-2/3 text-[11px] pt-2 pl-2 block border border-gray-300  rounded  focus:border-gray-200 focus:bg-gray-50 text-gray-500 focus:text-gray-600"
                    />
                  </div>
                  <div className='h-9 flex items-center pr-1'>
                    <label htmlFor="enabled" className='w-1/3 pl-2 text-[11px] text-gray-500 font-bold'>Habilitado :</label>
                    <div className='w-2/3 flex items-center'>
                    <Switch                         
                        onChange={ changesAA }  
                        checked={nitems.enabled || false} 
                        offColor="#ef4444"      
                        height={18}       
                        width={40}
                        onHandleColor="#c1c1c1"
                        offHandleColor="#c1c1c1"                                  
                      />
                    </div>
                  </div> 
                  <div className='h-9 flex items-center mt-2 pr-1 pl-1'>
                      <button 
                        onClick={() => handleSave()}
                        className="w-full h-6 rounded-md bg-sky-400 flex items-center justify-center text-gray-100">
                        <ChevronRightIcon  className="h-5 w- text-gray-50" />                          
                      </button>
                  </div> 
                </div>                                 
              </div>    
              <div className='w-3/4 flex-col ml-1 mr-1'>
                <div className='h-10 flex items-center justify-center'>
                  <SearchInput
                    parametro={parametro}
                    setParametro={setparametro}
                    handleSearch={handleSearch}
                    handleParametro={handleParametro} 
                    data={data}
                    name="sucursales"
                  />
                </div>                
                <Table                                
                indicador={indicador}      
                data={data}
                item={nitem}
                pagina={pagina}
                paginas={paginas}
                total={total}                     
                handleEditar={handleEditar}
                handleChange={handleChange}
                handleAsignar={setnitem}
                handleSave={handleSave}
                handleTrash={handleTrash}
                handleReset={handleReset}
                handleData={getData}
                changeAA ={changeAA}
                />               
              </div>    
            </div>    
        </div>    
    <Loading loading={loading}/>
  </>
   );
}

export default CategoriaIndex;
