import { useRef, forwardRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { useSelector  } from 'react-redux'
import Moment from 'react-moment'
import QRCode from "qrcode.react";
import Barcode from 'react-barcode'

const ComponentToPrint = forwardRef((props,ref)=>{
    const fechaHoy = new Date()
 
    return(
        <div ref={ref} className="p-8">

            <div className="h-14 border-b text-center mt-6">
                <h6 className="text-[10px] font-bold text-left">Etiquetas</h6>                                               
                <h6 className="text-[10px] font-bold">{props.pitem.nombre}</h6>
                <h6 className="text-[10px]">Código: # { props.pitem.codigo }</h6>
            </div>               

            <div className="flex-col mt-2 p-2 text-[9px] border w-full">
             <h1 className="border pl-1 text-[9px] font-bold h-6 text-gray-700 pt-1 bg-gray-50">Etiquetas - Código de Barras</h1>
               <div className='flex p-1'>
                    <div className='h-14 border w-1/4 flex justify-center'>
                        <Barcode value={props.pitem.codigo} width={1} height={15} fontSize={11} />
                    </div>     
                    <div className='h-14 border w-1/4 flex justify-center'>
                        <Barcode value={props.pitem.codigo} width={1} height={15} fontSize={11} />
                    </div>     
                    <div className='h-14 border w-1/4 flex justify-center'>
                        <Barcode value={props.pitem.codigo} width={1} height={15} fontSize={11} />                      
                    </div>                         
                    <div className='h-14 border w-1/4 flex justify-center'>
                        <Barcode value={props.pitem.codigo} width={1} height={15} fontSize={11} />                      
                    </div>                         
               </div>
               <div className='flex p-1'>
                    <div className='h-14 border w-1/4 flex justify-center'>
                        <Barcode value={props.pitem.codigo} width={1} height={15} fontSize={11} />
                    </div>     
                    <div className='h-14 border w-1/4 flex justify-center'>
                        <Barcode value={props.pitem.codigo} width={1} height={15} fontSize={11} />
                    </div>     
                    <div className='h-14 border w-1/4 flex justify-center'>
                        <Barcode value={props.pitem.codigo} width={1} height={15} fontSize={11} />                      
                    </div>                         
                    <div className='h-14 border w-1/4 flex justify-center'>
                        <Barcode value={props.pitem.codigo} width={1} height={15} fontSize={11} />                      
                    </div>                         
               </div>
               <div className='flex p-1'>
                    <div className='h-14 border w-1/4 flex justify-center'>
                        <Barcode value={props.pitem.codigo} width={1} height={15} fontSize={11} />
                    </div>     
                    <div className='h-14 border w-1/4 flex justify-center'>
                        <Barcode value={props.pitem.codigo} width={1} height={15} fontSize={11} />
                    </div>     
                    <div className='h-14 border w-1/4 flex justify-center'>
                        <Barcode value={props.pitem.codigo} width={1} height={15} fontSize={11} />                      
                    </div>                         
                    <div className='h-14 border w-1/4 flex justify-center'>
                        <Barcode value={props.pitem.codigo} width={1} height={15} fontSize={11} />                      
                    </div>                         
               </div>            
            </div>  

            <div className="flex-col mt-2 p-2 text-[9px] border w-full">
             <h1 className="border pl-1 text-[9px] font-bold h-6 text-gray-700 pt-1 bg-gray-50">Etiquetas - Código QR</h1>
               <div className='flex p-1'>
                    <div className='border w-1/4 flex-col text-center'>
                        <div className='flex items-center justify-center'>
                            <QRCode value={props.pitem.codigo} style={{  width: 50, height: 50,padding:2, border: 'solid 1px #c1c1c1', marginRight: 5 }}/>  
                        </div>                        
                        <span className='text-[9px]'>Cod. {props.pitem.codigo}</span>
                    </div>     
                    <div className='border w-1/4 flex-col text-center'>
                        <div className='flex items-center justify-center'>
                            <QRCode value={props.pitem.codigo} style={{  width: 50, height: 50,padding:2, border: 'solid 1px #c1c1c1', marginRight: 5 }}/>  
                        </div>                        
                        <span className='text-[9px]'>Cod. {props.pitem.codigo}</span>
                    </div>
                    <div className='border w-1/4 flex-col text-center'>
                        <div className='flex items-center justify-center'>
                            <QRCode value={props.pitem.codigo} style={{  width: 50, height: 50,padding:2, border: 'solid 1px #c1c1c1', marginRight: 5 }}/>  
                        </div>                        
                        <span className='text-[9px]'>Cod. {props.pitem.codigo}</span>
                    </div>
                    <div className='border w-1/4 flex-col text-center'>
                        <div className='flex items-center justify-center'>
                            <QRCode value={props.pitem.codigo} style={{  width: 50, height: 50,padding:2, border: 'solid 1px #c1c1c1', marginRight: 5 }}/>  
                        </div>                        
                        <span className='text-[9px]'>Cod. {props.pitem.codigo}</span>
                    </div>
               </div>
               <div className='flex p-1'>
                    <div className='border w-1/4 flex-col text-center'>
                        <div className='flex items-center justify-center'>
                            <QRCode value={props.pitem.codigo} style={{  width: 50, height: 50,padding:2, border: 'solid 1px #c1c1c1', marginRight: 5 }}/>  
                        </div>                        
                        <span className='text-[9px]'>Cod. {props.pitem.codigo}</span>
                    </div>     
                    <div className='border w-1/4 flex-col text-center'>
                        <div className='flex items-center justify-center'>
                            <QRCode value={props.pitem.codigo} style={{  width: 50, height: 50,padding:2, border: 'solid 1px #c1c1c1', marginRight: 5 }}/>  
                        </div>                        
                        <span className='text-[9px]'>Cod. {props.pitem.codigo}</span>
                    </div>
                    <div className='border w-1/4 flex-col text-center'>
                        <div className='flex items-center justify-center'>
                            <QRCode value={props.pitem.codigo} style={{  width: 50, height: 50,padding:2, border: 'solid 1px #c1c1c1', marginRight: 5 }}/>  
                        </div>                        
                        <span className='text-[9px]'>Cod. {props.pitem.codigo}</span>
                    </div>
                    <div className='border w-1/4 flex-col text-center'>
                        <div className='flex items-center justify-center'>
                            <QRCode value={props.pitem.codigo} style={{  width: 50, height: 50,padding:2, border: 'solid 1px #c1c1c1', marginRight: 5 }}/>  
                        </div>                        
                        <span className='text-[9px]'>Cod. {props.pitem.codigo}</span>
                    </div>
               </div>
               <div className='flex p-1'>
                    <div className='border w-1/4 flex-col text-center'>
                        <div className='flex items-center justify-center'>
                            <QRCode value={props.pitem.codigo} style={{  width: 50, height: 50,padding:2, border: 'solid 1px #c1c1c1', marginRight: 5 }}/>  
                        </div>                        
                        <span className='text-[9px]'>Cod. {props.pitem.codigo}</span>
                    </div>     
                    <div className='border w-1/4 flex-col text-center'>
                        <div className='flex items-center justify-center'>
                            <QRCode value={props.pitem.codigo} style={{  width: 50, height: 50,padding:2, border: 'solid 1px #c1c1c1', marginRight: 5 }}/>  
                        </div>                        
                        <span className='text-[9px]'>Cod. {props.pitem.codigo}</span>
                    </div>
                    <div className='border w-1/4 flex-col text-center'>
                        <div className='flex items-center justify-center'>
                            <QRCode value={props.pitem.codigo} style={{  width: 50, height: 50,padding:2, border: 'solid 1px #c1c1c1', marginRight: 5 }}/>  
                        </div>                        
                        <span className='text-[9px]'>Cod. {props.pitem.codigo}</span>
                    </div>
                    <div className='border w-1/4 flex-col text-center'>
                        <div className='flex items-center justify-center'>
                            <QRCode value={props.pitem.codigo} style={{  width: 50, height: 50,padding:2, border: 'solid 1px #c1c1c1', marginRight: 5 }}/>  
                        </div>                        
                        <span className='text-[9px]'>Cod. {props.pitem.codigo}</span>
                    </div>
               </div>
                    
            </div> 

            <div className="flex-col mt-2 p-2 text-[9px] border w-full">
             <h1 className="border pl-1 text-[9px] font-bold h-6 text-gray-700 pt-1 bg-gray-50">Etiquetas - Inventario</h1>
                <div className='flex p-1'>
                        <div className='h-24 border w-1/2 flex-col text-center mr-1'>
                            <div className='border-b flex'>                                
                                <div className='w-1/3 flex items-center justify-center bg-gray-100'>
                                        <span className='text-gray-500 text-[14px] font-bold'>{props.pitem.clasificacion}</span>
                                        <span className='text-gray-500 pl-1 text-[12px] font-bold'>{props.pitem.nivel}</span>                                    
                                </div>                                   
                                <div className='w-2/3 flex-col justify-center p-2'>
                                        <p className='text-gray-500 text-[9px] text-center font-bold'>{props.pitem.nombre}</p>
                                        <p className='text-gray-500 text-[9px] text-center'>{props.pitem.codigo}</p>
                                </div>   
                            </div>
                            <div className='flex text-[9px] items-center justify-center'>
                                <div className='w-full border-b flex bg-white'>
                                    <div className='w-2/4 flex justify-center'>
                                        <Barcode value={props.pitem.codigo} width={1} height={15} fontSize={9} /> 
                                    </div>   
                                    <div className='w-1/4 flex justify-center items-center'>
                                        <span className='text-[9px]'>MAX: {props.pitem.stockmaximo}</span>
                                    </div>   
                                    <div className='w-1/4 flex justify-center items-center'>
                                    <span className='text-[9px]'>MIN: {props.pitem.stockminimo}</span>
                                    </div>   
                                </div>    
                            </div>
                        </div>  
                        <div className='h-24 border w-1/2 flex-col text-center'>
                            <div className='border-b flex'>                                
                                <div className='w-1/3 flex items-center justify-center bg-gray-100'>
                                        <span className='text-gray-500 text-[14px] font-bold'>{props.pitem.clasificacion}</span>
                                        <span className='text-gray-500 pl-1 text-[12px] font-bold'>{props.pitem.nivel}</span>                                    
                                </div>                                   
                                <div className='w-2/3 flex-col justify-center p-2'>
                                        <p className='text-gray-500 text-[9px] text-center font-bold'>{props.pitem.nombre}</p>
                                        <p className='text-gray-500 text-[9px] text-center'>{props.pitem.codigo}</p>
                                </div>   
                            </div>
                            <div className='flex text-[9px] items-center justify-center'>
                                <div className='w-full border-b flex bg-white'>
                                    <div className='w-2/4 flex justify-center'>
                                        <Barcode value={props.pitem.codigo} width={1} height={15} fontSize={9} /> 
                                    </div>   
                                    <div className='w-1/4 flex justify-center items-center'>
                                        <span className='text-[9px]'>MAX: {props.pitem.stockmaximo}</span>
                                    </div>   
                                    <div className='w-1/4 flex justify-center items-center'>
                                    <span className='text-[9px]'>MIN: {props.pitem.stockminimo}</span>
                                    </div>   
                                </div>    
                            </div>
                        </div>                        
                         
                </div> 

                <div className='flex p-1'>
                        <div className='h-24 border w-1/2 flex-col text-center mr-1'>
                            <div className='border-b flex'>                                
                                <div className='w-1/3 flex items-center justify-center bg-gray-100'>
                                        <span className='text-gray-500 text-[14px] font-bold'>{props.pitem.clasificacion}</span>
                                        <span className='text-gray-500 pl-1 text-[12px] font-bold'>{props.pitem.nivel}</span>                                    
                                </div>                                   
                                <div className='w-2/3 flex-col justify-center p-2'>
                                        <p className='text-gray-500 text-[9px] text-center font-bold'>{props.pitem.nombre}</p>
                                        <p className='text-gray-500 text-[9px] text-center'>{props.pitem.codigo}</p>
                                </div>   
                            </div>
                            <div className='flex text-[9px] items-center justify-center'>
                                <div className='w-full border-b flex bg-white'>
                                    <div className='w-2/4 flex justify-start'>
                                    <QRCode value={props.pitem.codigo} style={{  width: 55, height: 50,padding:2, border: 'solid 1px #c1c1c1', marginRight: 5 }}/>
                                    </div>   
                                    <div className='w-1/4 flex justify-center items-center'>
                                        <span className='text-[9px]'>MAX: {props.pitem.stockmaximo}</span>
                                    </div>   
                                    <div className='w-1/4 flex justify-center items-center'>
                                    <span className='text-[9px]'>MIN: {props.pitem.stockminimo}</span>
                                    </div>   
                                </div>    
                            </div>
                        </div>  
                        <div className='h-24 border w-1/2 flex-col text-center'>
                            <div className='border-b flex'>                                
                                <div className='w-1/3 flex items-center justify-center bg-gray-100'>
                                        <span className='text-gray-500 text-[14px] font-bold'>{props.pitem.clasificacion}</span>
                                        <span className='text-gray-500 pl-1 text-[12px] font-bold'>{props.pitem.nivel}</span>                                    
                                </div>                                   
                                <div className='w-2/3 flex-col justify-center p-2'>
                                        <p className='text-gray-500 text-[9px] text-center font-bold'>{props.pitem.nombre}</p>
                                        <p className='text-gray-500 text-[9px] text-center'>{props.pitem.codigo}</p>
                                </div>   
                            </div>
                            <div className='flex text-[9px] items-center justify-center'>
                                <div className='w-full border-b flex bg-white'>
                                    <div className='w-2/4 flex justify-start'>
                                    <QRCode value={props.pitem.codigo} style={{  width: 55, height: 50,padding:2, border: 'solid 1px #c1c1c1', marginRight: 5 }}/>
                                    </div>   
                                    <div className='w-1/4 flex justify-center items-center'>
                                        <span className='text-[9px]'>MAX: {props.pitem.stockmaximo}</span>
                                    </div>   
                                    <div className='w-1/4 flex justify-center items-center'>
                                    <span className='text-[9px]'>MIN: {props.pitem.stockminimo}</span>
                                    </div>   
                                </div>    
                            </div>
                        </div>                        
                         
                </div>                      
          
                                 
            </div>

            <div className='flex mt-6 mb-4'>
                <h5 className="w-1/2 text-left pl-1 text-[9px] italic">fecha emisión : <Moment format="DD/MM/YYYY - HH:mm">{ fechaHoy }</Moment></h5>   
                <h5 className="w-1/2 text-right pr-1 text-[9px] italic">user : { props.puser.nombres }</h5>            
            </div>  
            {/* end content */}

        </div>
    )
})



const ModalEtiquetas = ({view,setview}) => {
    const { item } = useSelector((state) => state.producto)        
    const user = JSON.parse(localStorage.getItem('@usuarioUnity22'))  
    const componentRef = useRef()
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    })

    
  return (
    <>
    { view ?
        <>
        <div className="justify-center items-center flex-1 fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="p-1 relative w-auto my-3 mx-auto max-w-xl flex-row justify-between">
                <div className="h-620 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <div className="ml-1 fixed h-10 w-550 border rounded shadow-md flex p-1 justify-between bg-white">                        
                        <button 
                            onClick={() =>handlePrint()}
                            className="w-16 rounded bg-sky-500 text-[9px] hover:text-gray-200 flex justify-center items-center text-white">                           
                           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z" clipRule="evenodd"></path></svg>
                        </button>
                        <button 
                            onClick={() => setview(false)}
                            className="w-7 h-7 rounded-full bg-red-400 text-[9px] flex items-center justify-center text-white font-bold">                            
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>
              
                    <div className="overflow-y-scroll">
                        <ComponentToPrint
                        ref={componentRef}    
                        pitem={item}    
                        puser={user}                           
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

export default ModalEtiquetas;
