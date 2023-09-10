import { useRef, forwardRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { apiUrl } from '@helpers'
import { useSelector  } from 'react-redux'
import Moment from 'react-moment'
import QRCode from "qrcode.react";
import Barcode from 'react-barcode'

const ComponentToPrint = forwardRef((props,ref)=>{
    const fechaHoy = new Date()
 
    return(
        <div ref={ref} className="p-4 text-[9px]">
      

            <div className="h-11 border-b text-center mt-12">
                <h6 className="font-bold">Kardex Producto # <b>{props.pitem.id}</b></h6>                                               
                <h6 >{props.pitem.nombre}</h6>
            </div>

            {/* start headers */}          
            <div className="h-32 flex mt-1 p-1 items-center justify-center">                
                <div className='h-28 w-1/3 flex rounded p-2 mr-1'>
                    <img
                    alt="img"
                    className="h-26 w-36 bg-gray-200"          
                    src={`${apiUrl}static/images/productos/md/` + props.pitem.filename}
                    />
                </div>                    
                <div className='h-26 w-2/3 border flex-col'>
                    <div className='h-7 text-center font-bold pt-1 border-b'>
                        Código: # { props.pitem.codigo }
                    </div>
                    <div className='h-20 flex'>
                        <div className='w-1/2 border-r flex items-center justify-center'>
                            <Barcode value={props.pitem.codigo} width={1} height={15} fontSize={11} />
                        </div>
                        <div className='w-1/2  flex items-center justify-center'>
                            <QRCode value={props.pitem.codigo} style={{  width: 50, height: 50,padding:2, border: 'solid 1px #c1c1c1', marginRight: 5 }}/>
                        </div>
                    </div>
                </div>                                  
            </div>  
            {/* end headers */}   

            {/* end content */}
            <div className="flex-col mt-1 p-2 border w-full">
            <h1 className="border pl-1 font-bold h-6 text-gray-700 pt-1 bg-gray-50 rounded">
                    Datos Generales</h1>
                <div className="border-b flex h-7 pt-1 mt-2">                        
                    <p className="w-1/6  pl-1 font-bold">
                        Nombre 
                    </p>
                    <p className="w-5/6 pl-1">
                        { props.pitem.nombre }
                    </p>
                </div>

                <div className="border-b flex h-7 pt-1">                        
                    <p className="w-1/6  pl-1 font-bold">
                        Código
                    </p>
                    <p className="w-5/6 pl-1">
                        { props.pitem.codigo }
                    </p>
                </div>
                
                <div className="border-b flex h-7 pt-1">
                        <p className="w-1/6 pl-1 font-bold">
                            Categoria
                        </p>
                        <p className="w-2/6 pl-1">
                        { props.pitem.categoria || ""}
                        </p>
                        <p className="w-1/6  pl-1 font-bold">
                            Marca
                        </p>
                        <p className="w-2/6 pl-1">
                        { props.pitem.marca || ""}
                        </p>
                </div>

               
                <div className="border-b flex h-7 pt-1">
                        <p className="w-1/6 pl-1 font-bold">
                            Precio Compra
                        </p>
                        <p className="w-2/6 pl-1">                        
                        {new Intl.NumberFormat('es-BO',{minimumFractionDigits: 2}).format(props.pitem.precioCosto || "")}
                        </p>
                        <p className="w-1/6  pl-1 font-bold">
                            Precio Venta
                        </p>
                        <p className="w-2/6 pl-1">
                        {new Intl.NumberFormat('es-BO',{minimumFractionDigits: 2}).format(props.pitem.precioVenta || "")}
                        </p>
                </div>

                <div className="border-b flex h-7 pt-1">
                        <p className="w-1/6 pl-1 font-bold">
                            Stock
                        </p>
                        <p className="w-2/6 pl-1">                        
                        {props.pitem.stock || 0}
                        </p>
                       
                </div>

                <div className="border-b flex h-7 pt-1">
                        <p className="w-1/6 pl-1 font-bold">
                            Oferta
                        </p>
                        <p className={props.pitem.inOferta ? "w-2/6 pl-1 text-green-500 font-bold":"w-2/6 font-bold pl-1 text-red-500"}>
                        { props.pitem.inOferta ?
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            :
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                         }
                        </p>
                        <p className="w-1/6  pl-1 font-bold">
                            Catalogo
                        </p>
                        <p className={props.pitem.inCatalogo ? "w-2/6 pl-1 text-green-500 font-bold":"w-2/6 font-bold pl-1 text-red-500"}>
                        { props.pitem.inCatalogo ?
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            :
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                         }
                        </p>
                </div>



            </div>        
            {/* end content */}
           


<div className='flex mt-6 mb-4'>
    <h5 className="w-1/2 text-left pl-1 italic">fecha emisión : <Moment format="DD/MM/YYYY - HH:mm">{ fechaHoy }</Moment></h5>   
    <h5 className="w-1/2 text-right pr-1 italic">user : { props.puser.nombres }</h5>            
</div>  
{/* end content */}

        </div>
    )
})



const ModalProducto = ({view,setview}) => {
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

export default ModalProducto;
