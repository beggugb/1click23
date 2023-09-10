
import { CSVLink } from "react-csv";
import { getFechas } from "@helpers/functions"
import { PrinterIcon, CloudArrowDownIcon, BookOpenIcon, XCircleIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
const fHoy = "_"+getFechas()



const Search = ({parametro,setParametro,handleSearch, handleParametro,data,name }) => {    
    const hReset = () =>{
      setParametro("")
      handleParametro()      
    }

  return (    
    <div className="h-8 border  bg-gray-100 flex text-[10px] w-full items-center">       
      <div className="w-3/4 pr-1 pl-1">
        <form onSubmit={handleSearch} className="flex w-full items-center">                              
              <input
                type="text"
                name="parametro"
                value={parametro}
                placeholder={"...buscar"}
                className="h-7 border border-gray-200  rounded hover:border-gray-300 text-[11px] pl-6 w-full text-gray-500"
                onChange={(e)=> setParametro(e.target.value)}
              />
              <button                   
                className="h-5 w-6 border z-10 -ml-14 border-transparent text-[11px] font-medium rounded-full text-gray-700"
                type="button"
                onClick={()=>hReset()}>                    
                <XCircleIcon className={parametro ? "h-5 w-5 text-red-400":"h-5 w-5 text-white" }/>         
              </button> 
              <button                   
                className="h-5 w-6 z-10 border-transparent text-[11px] font-medium rounded-full text-gray-700">                    
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />          
              </button>
          </form>        
      </div>   
      <div className="w-1/4 flex justify-end">        
        <button className='h-7 w-8 border border-gray-300 flex items-center rounded justify-center hover:bg-gray-50 mr-1'>
          <CSVLink 
            data={data}                   
            filename={name+".csv"+fHoy}>
            <CloudArrowDownIcon className="h-5 w-5 text-gray-500" />
          </CSVLink>
        </button>        
      </div>         
    </div>        
  )
}

export default Search