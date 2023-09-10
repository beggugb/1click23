import { useRef, forwardRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { apiUrl } from '@helpers'
import GoogleMapReact from 'google-map-react';
import { useSelector } from 'react-redux'
import Moment from 'react-moment'
import QRCode from "qrcode.react";
import Barcode from 'react-barcode'
import { PrinterIcon, XMarkIcon } from "@heroicons/react/24/outline";

const ComponentToPrint = forwardRef((props,ref)=>{
    const fechaHoy = new Date()
    const mapRef = useRef()
    const us   = JSON.parse(localStorage.getItem('@usuarioUnity22'))  


    const LocationPin = () =>(
        <svg className="w-8 h-8 text-red-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
      )
    let codigo = props.pitem.id ? props.pitem.id.toString(): "123"
    
    return(
        <div ref={ref} className="p-6 text-[9px] text-gray-500">

            <div className="h-9 text-center mt-8">
                <h6 className="font-bold">Kardex Cliente # <b>{props.pitem.id}</b></h6>                                               
            </div>

            {/* start headers */}          
            <div className="flex border">
                <div className="w-1/3 p-1 border-r">
                    <div className='h-40 flex justify-center items-center border-b'>
                        <img
                        alt="img"
                        className="h-32 bg-gray-200 border-4"          
                        src={`${apiUrl}static/images/clientes/md/` + props.pitem.filename}
                        /> 
                    </div>    
                    <div className='h-18 flex justify-center items-center border-b'>
                        <Barcode value={codigo} width={2} height={30} fontSize={8} />
                    </div>
                    <div className='h-18 flex justify-center items-center'>
                        <QRCode value={props.pitem.id} style={{  width: 55, height: 55,padding:2, border: 'solid 1px #c1c1c1', marginRight: 5 }}/>                          
                    </div>
                </div>
                
                <div className="w-2/3 ml-4 pt-2">                                       
                    <div className="border-b flex h-7 pt-1">                        
                        <p className="w-1/6  pl-1 font-bold">Nombres</p>
                        <p className="w-5/6 pl-1">{ props.pitem.apellidos+", "+ props.pitem.nombres}</p>
                    </div>

                    <div className="border-b flex h-7 pt-1 mt-1">
                        <p className="w-1/6  pl-1 font-bold">Dirección</p>
                        <p className="w-5/6 pl-1">{ props.pitem.direccion }</p>
                    </div>

                    <div className="border-b flex h-7 pt-1 mt-1">
                        <p className="w-1/6 pl-1 font-bold">Tipo</p>
                        <p className="w-2/6 pl-1">{ props.pitem.tipo}</p>
                        <p className="w-1/6  pl-1 font-bold">Nit</p>
                        <p className="w-2/6 pl-1">{ props.pitem.nit }</p>
                    </div>

                    <div className="border-b flex h-7 pt-1 mt-1">
                        <p className="w-1/6 pl-1 font-bold">Teléfono</p>
                        <p className="w-2/6 pl-1">{ props.pitem.telefono}</p>
                        <p className="w-1/6  pl-1 font-bold">Celular</p>
                        <p className="w-2/6 pl-1">{ props.pitem.celular }</p>
                    </div>

                    <div className="border-b flex h-7 pt-1 mt-1">
                        <p className="w-1/6 pl-1 font-bold">País</p>
                        <p className="w-2/6 pl-1">{ props.pitem.pais}</p>
                        <p className="w-1/6  pl-1 font-bold">Ciudad</p>
                        <p className="w-2/6 pl-1">{ props.pitem.ciudad }</p>
                    </div>

                    <div className="border-b flex h-7 pt-1 mt-1">
                        <p className="w-1/6 pl-1 font-bold">Facebook</p>
                        <p className="w-2/6 pl-1">{ props.pitem.facebook}</p>
                        <p className="w-1/6  pl-1 font-bold">Instagram</p>
                        <p className="w-2/6 pl-1">{ props.pitem.instagram }</p>
                    </div>

                    <div className="border-b flex h-7 pt-1 mt-1">
                        <p className="w-1/6 pl-1 font-bold">TikTok</p>
                        <p className="w-2/6 pl-1">{ props.pitem.tiktok}</p>
                        <p className="w-1/6  pl-1 font-bold">Video</p>
                        <p className="w-2/6 pl-1">{ props.pitem.video }</p>
                    </div>

                    <div className="border-b flex h-7 pt-1 mt-1">
                        <p className="w-1/6 pl-1 font-bold">Web</p>
                        <p className="w-2/6 pl-1">{ props.pitem.web}</p>
                        <p className="w-1/6  pl-1 font-bold">Email</p>
                        <p className="w-2/6 pl-1">{ props.pitem.email }</p>
                    </div>
              
                    <div className="flex-col h-14 pt-1 mt-4">                        
                        <p className="w-1/6  pl-1 font-bold">Descripción</p>
                        <p className="w-5/6 pl-1">{ props.pitem.descripcion }</p>
                    </div>
                    
                    
                </div>
            </div>  
            
            <div className="flex-col mt-2 p-2 text-[9px] border w-full">
                <h6>Dirección </h6>
                <div className='h-60 border-2'>
                    { props.pitem.latitude && props.pitem.longitude ?
                    <div className="h-full w-full">
                        <GoogleMapReact
                        ref={mapRef}
                        bootstrapURLKeys={{
                            key: 'AIzaSyAF83DBU51q3idSspsd7f4DtTk7vNwHpR8',
                            libraries:['places', 'geometry', 'drawing', 'visualization'] 
                        }}
                        defaultCenter={{
                            lat: parseFloat(props.pitem.latitude),
                            lng: parseFloat(props.pitem.longitude)
                        }}
                        defaultZoom={15}               
                        >
                            <LocationPin
                                lat= {parseFloat(props.pitem.latitude)}
                                lng= {parseFloat(props.pitem.longitude)}
                            />      
                        </GoogleMapReact>
                    </div>
                    :null
                    }
                    
                </div>    
            </div> 
            
            <div className='flex mt-6 mb-6'>
                <h5 className="w-1/2 text-left pl-1 text-[9px] italic">fecha emisión : <Moment format="DD/MM/YYYY - HH:mm">{ fechaHoy }</Moment></h5>   
                <h5 className="w-1/2 text-right pr-1 text-[9px] italic">user : { us.nombres }</h5>            
            </div>            
            {/* end content */}

        </div>
    )
})



const ModalCliente = ({view,setview}) => {
    const { item} = useSelector((state) => state.cliente)            
    const componentRef = useRef()
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    })

  
  return (
    <>
    { view ?
        <>
        <div className="justify-center items-center flex-1 fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="p-1 relative w-auto my-3 mx-auto max-w-lg flex-row justify-between">
                <div className="h-620 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <div className="ml-1 fixed h-10 w-500 border rounded shadow-md flex p-1 justify-between bg-white">                        
                        <button 
                            onClick={() =>handlePrint()}
                            className="w-10 rounded bg-sky-400 text-xs hover:text-gray-200 flex justify-center items-center text-white">                           
                           <PrinterIcon className="h-4 w-4 text-gray-50" />
                        </button>
                        <button 
                            onClick={() => setview(false)}
                            className="w-7 h-7 rounded-full bg-red-400 text-xs flex items-center justify-center text-white font-bold mr-4">                            
                            <XMarkIcon className="h-4 w-4 text-gray-50" />
                        </button>
                    </div>
                    
                    <div className="overflow-y-scroll">
                        <ComponentToPrint
                            ref={componentRef}    
                            pitem={item}       

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

export default ModalCliente;
