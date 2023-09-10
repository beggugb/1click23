import { useState, useEffect } from 'react'
import Moment from "react-moment"
import { apiUrl } from '@helpers'
import { DocumentArrowDownIcon, DocumentTextIcon, DocumentArrowUpIcon, ChevronLeftIcon, ChevronRightIcon, ChevronDoubleLeftIcon,ChevronDoubleRightIcon, XMarkIcon, CheckIcon, CalendarDaysIcon } from "@heroicons/react/24/outline";
import {  _pag } from '@data/dataLoad'
import SelectUnit from '@components/selects/SelectUnit'

const Table = ({type,payload,columnDefs,data,indicador,setIndicador,pagina,paginas,total,handleData}) => {   
    const [num, setnum] = useState(12);              

    const teaders = () =>{
      const thdes = columnDefs.map((ite,index)=>(            
          <th 
             className={index === 0 ? `w-${ite.width} bg-gray-50 border ${ite.est} h-7 text-gray-50`:`w-${ite.width} bg-gray-50 border ${ite.est} h-7 text-stone-600`}
             key={index}>{ ite.field }</th>           
      ))
      return thdes
  }

    const ltd = (val) =>{       
        var result = Object.values(val);        
        const tds = result.map((ite,index)=> {              
                if(index === 0)
                {
              
                    return <td key={index} className="border text-center  text-gray-700">
                            <input type="checkbox" 
                            onChange={() => { setIndicador(ite,result[3]) }}   
                            checked={ ite === indicador ? true : false}                          
                            />
                           </td>
                }else if(columnDefs[index]){                                                                               
                    let tdr= ""
                    switch(columnDefs[index].rts)
                    {
                        case 'text':
                            tdr = <td key={index} className={`truncate pl-2 border h-6 ${columnDefs[index].est}  text-gray-700`}>{ite}</td>
                        break;
                        case 'texto':
                            tdr = <td key={index} className={`truncate border text-center h-6 ${columnDefs[index].est}  text-gray-700`}>{ite}</td>
                        break; 
                        case 'tel':
                          tdr = <td key={index} className={`truncate pl-2 border h-6 ${columnDefs[index].est}  text-gray-700`}>(591) - {ite}</td>
                        break;                    
                        case 'cel':
                          tdr = <td key={index} className={`truncate pl-2 border h-6 ${columnDefs[index].est}  text-gray-700`}>{ite ? (ite.substring(0,3)+" - "+ite.substring(3,8) ):null}</td>
                        break;
                        case 'mail':
                          tdr = <td key={index} className={`truncate pl-2 italic border h-6 ${columnDefs[index].est}  text-gray-700`}>{ite ? (ite.substring(0,3)+" - "+ite.substring(3,8) ):null}</td>
                        break;  
                        case 'num':
                          tdr = <td key={index} className={`truncate pl-1 border h-7 ${columnDefs[index].est} text-center text-gray-700`}>{ite}</td>
                        break;  
                        case 'mnd':
                            tdr = <td key={index} className={`truncate pl-1  border h-7 ${columnDefs[index].est} text-center text-gray-700`}>
                                {new Intl.NumberFormat('es-BO',{minimumFractionDigits: 2}).format(ite)}
                                </td>
                        break; 
                        case 'mnds':
                            tdr = <td key={index} className={ite > 0 || ite !== '0' ? `truncate pl-1 bg-red-100 border h-7 ${columnDefs[index].est} text-center text-gray-700`:`truncate pl-1 border h-7 ${columnDefs[index].est} text-center text-gray-700`}>
                                {new Intl.NumberFormat('es-BO',{minimumFractionDigits: 2}).format(ite)}
                                </td>
                        break;   
                        case 'fecha':
                          tdr = <td key={index} className={`truncate italic border h-6 ${columnDefs[index].est}  text-gray-700`}>
                                <div className='flex items-center justify-center'>                                
                                <CalendarDaysIcon className="h-4 w-4 text-gray-400 mr-1" />
                                <Moment format="DD-MM-YYYY" >{ite}</Moment>
                                </div>                                
                                </td>
                        break;  
                        case 'est':
                          tdr = <td key={index} className={`truncate italic border h-6 ${columnDefs[index].est}  text-gray-700`}>
                                <div className='flex items-center justify-center'>        
                                { ite === "pendiente" ? <XMarkIcon className="h-4 w-4 text-red-400 mr-1" /> : <CheckIcon className="h-4 w-4 text-green-400 mr-1" />}                                                        
                                <span>{ite}</span>
                                </div>                                
                                </td>
                        break; 
                        case 'boolean':
                          tdr = <td key={index} className={`truncate italic border h-6 ${columnDefs[index].est}  text-gray-700`}>
                                <div className='flex items-center justify-center'>        
                                { ite ? <CheckIcon className="h-4 w-4 text-green-400 mr-1" /> : <XMarkIcon className="h-4 w-4 text-red-400 mr-1" />}                                                                                        
                                </div>                                
                                </td>
                        break;
                        case 'positivo':
                          tdr = <td key={index} className={ite < 0 || ite === '0' ? `truncate pl-1 border h-7 ${columnDefs[index].est} text-center text-gray-700`:`truncate pl-1 border h-7 ${columnDefs[index].est} text-center text-gray-700 bg-green-100`}>
                                {new Intl.NumberFormat('es-BO',{minimumFractionDigits: 2}).format(ite)}
                                </td>
                        break;      
                        case 'icon':
                            tdr = <td key={index} className={`truncate pl-1 h-7 ${columnDefs[index].est} text-center font-bold text-gray-400 flex items-center justify-center`}>                                
                                {ite === "diario"  ? <><DocumentTextIcon className="h-4 w-4 text-sky-300" /> <span className="w-14">{ite}</span></>: null}
                                {ite === "ingreso" ? <><DocumentArrowDownIcon className="h-4 w-4 text-green-500" /><span className="w-14">{ite}</span></>: null}
                                {ite === "egreso"  ? <><DocumentArrowUpIcon className="h-4 w-4 text-red-500" /><span className="w-14">{ite}</span></>: null}
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
    const tdata = <tbody>
    { 
        data.map((ite,index)=> (
            <tr 
            className={`w-${ite.width} border  h-7 hover:bg-sky-50`}
            key={index}>
               {ltd(ite)}
            </tr>            
        ))
    }         
    </tbody>

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
                onClick={() => handleData(number,num)}
              >
                {number}
              </button>
            );
          } else {
            return null;
          }
        });
    }

    const handlePage = (val) =>{                  
        handleData(pagina,val)  
        setnum(val)
      }
      useEffect(() => {
        setnum(12)
        return () => {
          
        };
      }, []);


  const ltds = (val) =>{       
        var result = Object.values(val);        
        const tds = result.map((ite,index)=> {              
                if(index === 0)
                {
                  return null
                }else if(columnDefs[index]){                                                                               
                    let tdr= ""
                    switch(columnDefs[index].rts)
                    {
                        case 'text':
                            tdr = <p key={index} className={`truncate pl-1 border border-gray-100 ${columnDefs[index].est}  text-gray-700`}>{ite}</p>
                        break;
                        case 'texto':
                            tdr = <p key={index} className={`truncate pl-1 border border-gray-100 ${columnDefs[index].est}  text-gray-700`}>{ite}</p>
                        break; 
                        case 'tel':
                          tdr = <p key={index} className={`truncate pl-1 border ${columnDefs[index].est}  text-gray-700`}>(591) - {ite}</p>
                        break;                    
                        case 'cel':
                          tdr = <p key={index} className={`truncate pl-1 border border-gray-100 ${columnDefs[index].est}  text-gray-700`}>{ite ? (ite.substring(0,3)+" - "+ite.substring(3,8) ):null}</p>
                        break;
                        case 'mail':
                          tdr = <p key={index} className={`truncate pl-1 italic border border-gray-100 ${columnDefs[index].est}  text-gray-700`}>{ite ? (ite.substring(0,3)+" - "+ite.substring(3,8) ):null}</p>
                        break;  
                        case 'num':
                            tdr = <td key={index} className={`truncate pl-1 border h-7 ${columnDefs[index].est} text-center text-gray-700`}>{ite}</td>
                        break;  
                        case 'mnd':
                            tdr = <td key={index} className={`truncate pl-1 border h-7 ${columnDefs[index].est} text-center text-gray-700`}>
                                {new Intl.NumberFormat('es-BO',{minimumFractionDigits: 2}).format(ite)}
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

  const timagenes = () =>{
    return(
      <div className='h-full border-2 p-1 w-full overflow-y-scroll'>
        { data.map((ite,index)=> (
              <div 
              key={index}
              className="h-20 w-48 bg-gray-200 border p-1 shadow-sm flex rounded-md float-left mr-2 mb-2">
                <div className='border flex w-2/6 items-center bg-gray-200 justify-center'>
                  <img alt=".."
                       className="h-14 w-14"          
                       src={`${apiUrl}static/images/${payload}/sm/` + ite.filename}
                  /> 
                </div>  
                <div className='border flex-col w-4/6 text-[9px] bg-white'>
                {ltds(ite)}
                </div>  
              </div>            
          ))
        }
      </div>
    )    
  }    
  
return (    
    <div className="flex-col w-full">        
        <div className="flex-1 mx-auto">    
            { type === "table" ?
              <table className="border-collapse w-full text-[10px] border-2">
                <thead><tr>{teaders()}</tr></thead>{ tdata }  
              </table>
            : timagenes()
            }            
        </div>  

        <div className="h-10 border-b border-l border-r flex  bg-gray-50">
            <div className="w-2/6 flex justify-start items-center pr-1 pt-1">
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
            <div className="w-4/6 flex justify-end">
                <ul className="flex p-1 text-xs">                
                    <li 
                    className={pagina === 1 ? "border rounded border-gray-200 flex items-center justify-center h-6 w-6 text-gray-400 mr-1 cursor-not-allowed p-1": "border rounded border-gray-300 flex items-center h-6 w-6 text-gray-400 mr-1 hover:bg-gray-200 justify-center p-1" } 
                    onClick={() => handleData(pagina === 1 ? 0 : 1,num)}>        
                    <ChevronDoubleLeftIcon className="h-5 w-5 text-gray-400"/>
                    </li>

                    <li
                    className={pagina === 1 ? "border rounded border-gray-200 flex items-center h-6 w-6 justify-center text-gray-400 mr-1 cursor-not-allowed p-1": "border rounded border-gray-300 flex items-center h-6 w-6 text-gray-400 mr-1 hover:bg-gray-200 justify-center p-1" } 
                    onClick={() =>handleData(pagina === 1 ? 0: pagina - 1,num)}>        
                    <ChevronLeftIcon className="h-5 w-5 text-gray-400" />
                    </li>

                    <li
                    className="h-6 flex items-center">        
                    {renderPageNumbers}
                    </li>        
                    
                    <li        
                    className={pagina === paginas ? "border rounded border-gray-200 flex items-center justify-center h-6 w-6 text-gray-400 mr-1 cursor-not-allowed p-1": "border rounded border-gray-300 flex items-center h-6 w-6 text-gray-400 mr-1 hover:bg-gray-200 justify-center p-1" } 
                    onClick={() => handleData(pagina === paginas ? 0 : pagina + 1,num)}>          
                    <ChevronRightIcon className="h-5 w-5 text-gray-400" />
                    </li>

                    <li
                    className={paginas === pagina ? "border rounded border-gray-200   flex items-center justify-center h-6 w-6 text-gray-400 mr-1 cursor-not-allowed p-1": "border rounded border-gray-300 h-6 w-6 text-gray-400 mr-1 hover:bg-gray-200 flex items-center justify-center p-1" } 
                    onClick={() => handleData(pagina === paginas ? 0: paginas,num)}>
                    <ChevronDoubleRightIcon className="h-4 w-4 text-gray-500" />  
                    </li>     
                </ul>
            </div>        
        </div>                
    </div>
    );
}

export default Table;
