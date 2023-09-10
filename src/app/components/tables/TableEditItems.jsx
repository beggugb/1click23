import { useState, useEffect } from 'react'
import { ChevronUpDownIcon, PencilIcon, TrashIcon, ChevronLeftIcon, ChevronRightIcon, ChevronDoubleLeftIcon,ChevronDoubleRightIcon, XMarkIcon, CheckIcon, CalendarDaysIcon } from "@heroicons/react/24/outline";
import {  _pag } from '@data/dataLoad'
import SelectUnit from '@components/selects/SelectUnit'
import Switch from "react-switch";

const TableEditItems = ({indicador, data, item, pagina,paginas,total,handleChange, handleEditar, handleSave, handleTrash, handleReset, handleData,changeAA}) => {
  const [num, setnum] = useState(12);  
  const [orden, setorden] = useState(false);
  const [prop, setprop] = useState("nombre");  

  let renderPageNumbers;
    const pageNumber = [];
    if (total !== null) {
        for (let i = 1; i <= paginas; i++) {
          pageNumber.push(i);
        }
        renderPageNumbers = pageNumber.map((number) => {
          let classes = pagina === number ? "border-r-2 h-5 w-5 border-white rounded text-center bg-sky-300 text-white hover:bg-sky-400 text-xs font-bold" 
          : "border-r-2 h-5 w-5 text-gray-500 border-white text-center bg-sky-50 rounded hover:text-white hover:bg-sky-400 focus:outline-none disabled:opacity-25 disabled text-xs";
    
          if (
            number === 1 ||
            number === total ||
            (number >= pagina - 2 && number <= pagina + 2)
          ) {
            return (
              <button
                key={number}
                className={classes}
                onClick={() => handleData(number,num,prop,orden)}
              >
                {number}
              </button>
            );
          } else {
            return null;
          }
        });
    }

  

    const itemView = (it) =>{        
        return(
        <>
        <td className="pl-2  border text-center  text-gray-700">
          {it.id}
        </td>
        <td className="pl-2  border text-left  text-gray-700">
          {it.nombre}
        </td>
        <td className="border text-center  text-gray-700">
          {it.abreviacion}
        </td>
        <td className="border text-center  text-gray-700">
            <div className='flex justify-center'>
            {it.enabled ? <CheckIcon className="h-4 w-4 text-green-500" /> : <XMarkIcon className="h-4 w-4 text-red-500" />}
            </div>            
        </td>
        
        <td className="border text-center  text-gray-700">
            <div className="flex justify-center items-center">
            <button onClick={()=> handleEditar(it)}
                className="w-6 h-6 rounded-md border flex items-center justify-center text-gray-100 mr-1">
                <PencilIcon className="h-4 w-4 text-gray-500" />     
              </button>                            
              <button onClick={()=>handleTrash(it.id,num,prop,orden)}
                      className="w-6 h-6 rounded-md border flex items-center justify-center text-gray-100">
                <TrashIcon className="h-4 w-4 text-gray-500" />     
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
            <label htmlFor="nombre"></label>
            <input                              
                type="text"
                onChange={(e) => handleChange(e.target.name,e.target.value)}                            
                value={item.nombre || ""}
                name="nombre"
                className="h-7 pt-2 pl-2 block border border-gray-300 w-full rounded text-[10px] focus:border-gray-200 focus:bg-gray-50 text-gray-500 focus:text-gray-600"
            /> 
        </td>
        <td className="border text-center  text-gray-700">
            <label htmlFor="abreviacion"></label>
            <input                              
                type="text"
                onChange={(e) => handleChange(e.target.name,e.target.value)}                                
                value={item.abreviacion || ""}
                name="abreviacion"
                className="h-7 pt-2 pl-2 block border border-gray-300 w-full rounded text-[10px] focus:border-gray-200 focus:bg-gray-50 text-gray-500 focus:text-gray-600"
            />
        </td>
        <td className="border text-center  text-gray-700">
            <Switch                         
                onChange={ changeAA }  
                checked={item.enabled || false} 
                offColor="#f87171" 
                onColor="#4ade80"      
                height={18}       
                width={40}
                onHandleColor="#737373"
                offHandleColor="#737373"                  
            />
        </td>
        <td className="border text-center  text-gray-700">
            <div className="flex justify-center items-center">
                <button onClick={()=> handleSave(num,prop,orden)}
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

    const handlePage = (val) =>{                  
      handleData(pagina,val,prop,orden)  
      setnum(val)
    }
    useEffect(() => {
      setnum(12)
      return () => {
        
      };
    }, []);

   const handleSubData = (prp) =>{        
        handleData(pagina,num,prp,!orden)    
        setorden(!orden)
        setprop(prp)
    }

return (    
    <div className="flex-col">        
        <div className="flex-1 mx-auto">              
            <table className="border-collapse w-full text-[10px] ">
                <thead>
                    <tr className="h-7 bg-gray-100 border-l border-r">
                        <th className="w-1/12 text-stone-600">#</th>           
                        <th className="w-6/12 text-stone-600 border-r">
                          <div className='w-full flex'>
                            <div
                              className='w-5/6 flex items-center justify-center'>
                              <span>Nombre</span>
                            </div>
                            <button
                            onClick={() => handleSubData("nombre")}
                            className='w-1/6 flex justify-center'>
                              <ChevronUpDownIcon className="h-5 w-5 text-gray-500" />
                            </button>
                          </div>
                        </th>           
                        <th className="w-2/12 text-stone-600 border-r">
                          <div className='w-full flex'>
                            <div
                              className='w-5/6 flex items-center justify-center'>
                              <span>Abreviación</span>
                            </div>
                            <button
                            onClick={() => handleSubData("abreviacion")}
                            className='w-1/6 flex justify-center'>
                              <ChevronUpDownIcon className="h-5 w-5 text-gray-500" />
                            </button>
                          </div>
                        </th>
                        <th className="w-2/12 text-stone-600 border-r">
                          <div className='w-full flex'>
                            <div
                              className='w-5/6 flex items-center justify-center'>
                              <span>Habilitado</span>
                            </div>                            
                          </div>
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

        <div className="h-10 border-b border-l border-r flex  bg-gray-50">
            <div className="w-2/6 flex justify-start items-center pr-1 pt-1 ">
                <div className='w-2/3 flex'>
                <label className='w-32 text-[10px] text-gray-600 pl-2'>Mostrar {num} de {total} items </label>
                </div>
                <div className='w-1/3 flex'>
                  <SelectUnit
                    options={_pag}
                    option={num}
                    handleChange={handlePage}
                  />
                </div>                
            </div>
            <div className="w-4/6 flex justify-end items-center">
                <ul className="flex p-1 text-xs">                
                    <li 
                    className={pagina === 1 ? "border rounded border-gray-200 flex items-center justify-center h-6 w-6 text-gray-400 mr-1 cursor-not-allowed p-1": "border rounded border-gray-300 flex items-center h-6 w-6 text-gray-400 mr-1 hover:bg-gray-200 justify-center p-1" } 
                    onClick={() => handleData(pagina === 1 ? 0 : 1,num,prop,orden)}>        
                    <ChevronDoubleLeftIcon className="h-5 w-5 text-gray-400"/>
                    </li>

                    <li
                    className={pagina === 1 ? "border rounded border-gray-200 flex items-center h-6 w-6 justify-center text-gray-400 mr-1 cursor-not-allowed p-1": "border rounded border-gray-300 flex items-center h-6 w-6 text-gray-400 mr-1 hover:bg-gray-200 justify-center p-1" } 
                    onClick={() =>handleData(pagina === 1 ? 0: pagina - 1,num,prop,orden)}>        
                    <ChevronLeftIcon className="h-5 w-5 text-gray-400" />
                    </li>

                    <li
                    className="h-6 flex items-center">        
                    {renderPageNumbers}
                    </li>        
                    
                    <li        
                    className={pagina === paginas ? "border rounded border-gray-200 flex items-center justify-center h-6 w-6 text-gray-400 mr-1 cursor-not-allowed p-1": "border rounded border-gray-300 flex items-center h-6 w-6 text-gray-400 mr-1 hover:bg-gray-200 justify-center p-1" } 
                    onClick={() => handleData(pagina === paginas ? 0 : pagina + 1,num,prop,orden)}>          
                    <ChevronRightIcon className="h-5 w-5 text-gray-400" />
                    </li>

                    <li
                    className={paginas === pagina ? "border rounded border-gray-200   flex items-center justify-center h-6 w-6 text-gray-400 mr-1 cursor-not-allowed p-1": "border rounded border-gray-300 h-6 w-6 text-gray-400 mr-1 hover:bg-gray-200 flex items-center justify-center p-1" } 
                    onClick={() => handleData(pagina === paginas ? 0: paginas,num,prop,orden)}>
                    <ChevronDoubleRightIcon className="h-4 w-4 text-gray-500" />  
                    </li>     
                </ul>
            </div>        
        </div>                
    </div>
    );
}

export default TableEditItems;
