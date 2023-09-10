import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Table from '@components/tables/TableHorario'
import { horarioUpdate  } from '@reducers/crm/horarioSlice'
import { XMarkIcon } from "@heroicons/react/24/outline";

const HorarioIndex = ({sucursalId, views, setviews }) => {
    const dispatch = useDispatch()      
    const { datas } = useSelector((state) => state.horario)    
    const [indicador, setindicador] = useState(-1);
    const [nitem, setnitem] = useState({});    
    
    const handleChange = (prp,val) =>{      
      setnitem({
          ...nitem,
          [prp]: val
      })      
    } 
       
  
  const handleReset = () =>{
    setnitem({
        id         : nitem.id,
        hinicio    : nitem.hinicio,
        hfin       : nitem.hfin,      
    })
     
    setindicador(-1)                
  }

  const handleEditar = (it) =>{    
    setindicador(it.id)
    setnitem(it)
  }
 
  const handleSave = () =>{
    let hk = {    
        id         : nitem.id,
        hinicio    : nitem.hinicio,
        hfin       : nitem.hfin,
        sucursalId : sucursalId,  
        tip: 'unit'      
      }        
      dispatch(horarioUpdate(hk));      
      handleReset()  
  }


return (
  <>
  { views ?
    <>
    <div className="justify-center items-center flex-1 fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="p-1 relative w-auto my-3 mx-auto max-w-lg flex-row justify-between">
            <div className="h-500 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="ml-1 fixed h-10 w-500 border rounded shadow-md flex p-1 justify-between bg-white">                        
                   
                    <button 
                        onClick={() => setviews(false)}
                        className="w-7 h-7 rounded-full bg-red-400 text-xs flex items-center justify-center text-white font-bold mr-4">                            
                        <XMarkIcon className="h-4 w-4 text-gray-50" />
                    </button>
                </div>
                
                <div className="h-max border-4 p-1 mt-8">
                <Table                            
                    indicador={indicador}      
                    data={datas}
                    item={nitem}    
                    handleEditar={handleEditar}
                    handleChange={handleChange}                    
                    handleSave={handleSave}                    
                    handleReset={handleReset}                    
                />
                </div>                                                              
            </div>    
        </div>        
    </div>  
    <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
    </>
: null  }   
  </>
   );
}

export default HorarioIndex;
