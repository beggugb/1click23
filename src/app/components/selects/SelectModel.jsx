import { useState } from 'react'
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const SelectModel = ({options, prop, setprop }) => {
    const [view, setview] = useState(false);    
    const handleExit = () =>{
      setview(false)        
    }
    const handleChange = (it) =>{      
      setview(false)  
      setprop(it)      
    }      
  return (    
    <div className="relative inline-block w-full text-[10px]">     
      <div         
        className="h-7 w-full flex">
          <div className="h-7 border-l border-t border-b border-gray-200  w-11/12 items-center flex pl-2  text-gray-500 bg-white rounded-l">
          {prop || ""}  
          </div>              
              <button
                onClick={() => setview(!view)}
                type="button"
                className="h-7 w-6 flex border-r bg-white border-t border-b border-gray-200 items-center justify-center rounded-r hover:bg-gray-200">
              <ChevronDownIcon className="h-5 text-gray-400" />
              </button>
            
        </div> 
        {view &&
          <ul 
          onMouseLeave={() => handleExit()}
          className="absolute z-10  w-36 border bg-gray-50 rounded shadow-lg p-3">      
           { options.map((it, index) => (
              <li
              key={index}
              className="h-6 items-center flex text-gray-700 hover:bg-gray-100"
              onClick={()=>handleChange(it.label)}>
              {it.label}                
              </li>                
          ))} 
          </ul>    
        }      
    </div>        
  )
}

export default SelectModel