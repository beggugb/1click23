import Moment from "react-moment"
import { XMarkIcon, CheckIcon, CalendarDaysIcon } from "@heroicons/react/24/outline";


const TableSingle = ({_type, columnDefs,data,cantidad,total}) => {
    let ep  = JSON.parse(localStorage.getItem('@empresaUnity22'))
          
    const teaders = () =>{
      const thdes = columnDefs.map((ite,index)=>(            
          <th 
             className={index === 0 ? `w-${ite.width} bg-gray-50 border ${ite.est} h-5 text-gray-50`:`w-${ite.width} bg-gray-50 border ${ite.est} h-5 text-stone-600`}
             key={index}>{ ite.field }</th>           
      ))
      return thdes
  }

    const ltd = (val) =>{       
        var result = Object.values(val);        
        const tds = result.map((ite,index)=> {              
                if(columnDefs[index]){                                                                               
                    let tdr= ""
                    switch(columnDefs[index].rts)
                    {
                        case 'text':
                            tdr = <td key={index} className={`truncate pl-2 border h-5 ${columnDefs[index].est}  text-gray-700`}>{ite}</td>
                        break;
                        case 'texto':
                            tdr = <td key={index} className={`truncate border text-center h-5 ${columnDefs[index].est}  text-gray-700`}>{ite}</td>
                        break; 
                        case 'tel':
                          tdr = <td key={index} className={`truncate pl-2 border h-5 ${columnDefs[index].est}  text-gray-700`}>(591) - {ite}</td>
                        break;                    
                        case 'cel':
                          tdr = <td key={index} className={`truncate pl-2 border h-5 ${columnDefs[index].est}  text-gray-700`}>{ite ? (ite.substring(0,3)+" - "+ite.substring(3,8) ):null}</td>
                        break;
                        case 'mail':
                          tdr = <td key={index} className={`truncate pl-2 italic border h-5 ${columnDefs[index].est}  text-gray-700`}>{ite ? (ite.substring(0,3)+" - "+ite.substring(3,8) ):null}</td>
                        break;  
                        case 'num':
                          tdr = <td key={index} className={`truncate pl-1 border h-5 ${columnDefs[index].est} text-center text-gray-700`}>{ite}</td>
                        break;  
                        case 'mnd':
                            tdr = <td key={index} className={`truncate pl-1  border h-5 ${columnDefs[index].est} text-center text-gray-700`}>
                                {new Intl.NumberFormat('es-'+ep.moneda,{minimumFractionDigits: 2}).format(ite)}
                                </td>
                        break; 
                        case 'mnds':
                            tdr = <td key={index} className={ite > 0 || ite !== '0' ? `truncate pl-1 bg-red-100 border h-5 ${columnDefs[index].est} text-center text-gray-700`:`truncate pl-1 border h-5 ${columnDefs[index].est} text-center text-gray-700`}>
                                {new Intl.NumberFormat('es-'+ep.moneda,{minimumFractionDigits: 2}).format(ite)}
                                </td>
                        break;   
                        case 'fecha':
                          tdr = <td key={index} className={`truncate italic border h-5 ${columnDefs[index].est}  text-gray-700`}>
                                <div className='flex items-center justify-center'>   
                                { ite &&
                                  <>
                                  <CalendarDaysIcon className="h-4 w-4 text-gray-400 mr-1" />
                                  <Moment format="DD-MM-YYYY" >{ite}</Moment>
                                  </>
                                }                             
                                </div>                                
                                </td>
                        break;  
                        case 'est':
                          tdr = <td key={index} className={`truncate italic border h-5 ${columnDefs[index].est}  text-gray-700`}>
                                <div className='flex items-center justify-center'>        
                                { ite === "pendiente" ? <XMarkIcon className="h-4 w-4 text-red-400 mr-1" /> : <CheckIcon className="h-4 w-4 text-green-400 mr-1" />}                                                        
                                <span>{ite}</span>
                                </div>                                
                                </td>
                        break;              
                        default:
                            break;                            
                    }
                    return tdr
                   /* return <td key={index} className={`truncate pl-1 border h-7 ${columnDefs[index].est} text-xs text-gray-700`}>{ite}</td>                    */
                }
            return null
        })               
        return tds
    }
    const tdata = <>
    { 
        data.map((ite,index)=> (
            <tr 
            className={`w-${ite.width} border h-5 hover:bg-sky-50`}
            key={index}>
               {ltd(ite)}
            </tr>            
        ))
    }    

    </>

   
  
return (    
    <div className="flex-col w-full">        
        <div className="flex-1 mx-auto">                
              <table className="border-collapse w-full text-[9px] border">
                <thead><tr>{teaders()}</tr></thead>
                <tbody>
                  { tdata }  
                  { _type === "totales"? 
                  <tr className='h-5 border bg-gray-100 font-bold text-gray-500'>
                    <td colSpan={2} className='text-center'>Total</td>
                    <td className='text-center'>{cantidad}</td>
                    <td
                    className='text-center'>
                    {new Intl.NumberFormat('es-'+ep.moneda,{minimumFractionDigits: 2}).format(total)}
                    </td>    
                  </tr> 
                  : null
                  }
                </tbody>
              </table>                  
        </div>      
    </div>
    );
}

export default TableSingle;
