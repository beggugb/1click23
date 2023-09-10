import { PencilIcon, XMarkIcon, CheckIcon } from "@heroicons/react/24/outline";

const TableHorario = ({indicador, data, item, handleChange, handleEditar, handleSave, handleReset}) => {
  

    const itemView = (it) =>{        
        return(
        <>
        <td className="pl-2  border text-center  text-gray-700">
          {it.id}
        </td>
        <td className="pl-2  border text-left  text-gray-700">
          {it.dia}
        </td>
        <td className="border text-center  text-gray-700">
          {it.hinicio}
        </td>
        <td className="border text-center  text-gray-700">
          {it.hfin}
        </td>        
        
        <td className="border text-center  text-gray-700">
            <div className="flex justify-center items-center">
            <button onClick={()=> handleEditar(it)}
                className="w-6 h-6 rounded-md border flex items-center justify-center text-gray-100 mr-1">
                <PencilIcon className="h-4 w-4 text-gray-500" />     
              </button>                           
              
            </div>                       
          </td>
    
        </>)
      }

      const itemEdit = (it) =>{
        return(
        <>
        <td className="pl-2  border text-center  text-gray-700">
            {it.id}  
        </td>
        <td className="pl-2  border text-left  text-gray-700">
            <label htmlFor="dia"></label>
            <input                              
                type="text"
                onChange={(e) => handleChange(e.target.name,e.target.value)}                            
                value={item.dia || ""}
                name="dia"
                readOnly={true}
                className="h-7 pt-2 pl-2 block border border-gray-300 w-full rounded text-[10px] focus:border-gray-200 focus:bg-gray-50 text-gray-500 focus:text-gray-600"
            /> 
        </td>
        <td className="border text-center  text-gray-700">
            <label htmlFor="hinicio"></label>
            <input                              
                type="text"
                onChange={(e) => handleChange(e.target.name,e.target.value)}                                
                value={item.hinicio || ""}
                name="hinicio"
                className="h-7 pt-2 pl-2 block border border-gray-300 w-full rounded text-[10px] focus:border-gray-200 focus:bg-gray-50 text-gray-500 focus:text-gray-600"
            />
        </td>
        <td className="border text-center  text-gray-700">
            <label htmlFor="hfin"></label>
            <input                              
                type="text"
                onChange={(e) => handleChange(e.target.name,e.target.value)}                                
                value={item.hfin || ""}
                name="hfin"
                className="h-7 pt-2 pl-2 block border border-gray-300 w-full rounded text-[10px] focus:border-gray-200 focus:bg-gray-50 text-gray-500 focus:text-gray-600"
            />
        </td>
        <td className="border text-center  text-gray-700">
            <div className="flex justify-center items-center">
                <button onClick={()=> handleSave()}
                className="w-6 h-6 mr-1 rounded-md bg-white flex items-center justify-center text-gray-100">
                <CheckIcon className="h-4 w-4 text-green-600" />    
              </button>                            
              <button onClick={()=> handleReset()} 
                      className="w-6 h-6 rounded-md bg-white flex items-center justify-center text-gray-100">
                <XMarkIcon className="h-4 w-4 text-red-600" />     
              </button>
            </div>                       
          </td>
    
        </>)
    }



return (    
    <div className="flex-col">        
        <div className="flex-1 mx-auto">              
            <table className="border-collapse w-full text-[10px] ">
                <thead>
                    <tr className="h-7 bg-gray-100 border-l border-r">
                        <th className="w-1/12 text-stone-600">#</th>           
                        <th className="w-6/12 text-stone-600 border-r">                          
                          Dia
                        </th>           
                        <th className="w-2/12 text-stone-600 border-r">
                          Hora Inicio
                        </th>
                        <th className="w-2/12 text-stone-600 border-r">
                          Hora Fin
                        </th>          
                        <th className="w-1/12 text-stone-600"></th>           
                    </tr>
                </thead>                 
                <tbody>                
                  { data.map((ite,index)=> (
                  <tr key={index} className={indicador === ite.id ? "bg-gray-200":"hover:bg-sky-50"}>                    
                    { indicador === ite.id ?
                    itemEdit(ite) :
                    itemView(ite) 
                    }
                  </tr>                                                          
                  ))}  
            </tbody>                                                                              
            </table>
        </div>         
    </div>
    );
}

export default TableHorario;
