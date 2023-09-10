import { useRef, forwardRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { useSelector } from 'react-redux'
import Moment from 'react-moment'
import { PrinterIcon,  XMarkIcon } from "@heroicons/react/24/outline";
import { _infEstado } from '@data/dataModels'
import Table from '@components/tables/TableSingle'
const ComponentToPrint = forwardRef((props,ref)=>{
    const fechaHoy = new Date()    
    const us   = JSON.parse(localStorage.getItem('@usuarioUnity22'))  
    const ep   = JSON.parse(localStorage.getItem('@empresaUnity22'))

   
    return(
        <div ref={ref} className="p-6 text-[9px] text-gray-600">
            
            <div className="border-b mt-7 flex">
                <div className="w-1/2">                                    
                </div>
                <div className="w-1/2">                    
                    <p className="text-right pl-2 text-gray-500 font-bold">{ep.nombre}</p>
                    <p className="text-right pl-2 text-gray-500 ">Nit: {ep.nit}</p>
                    <p className="text-right pl-2 text-gray-500 ">Dirección: {ep.direccion}</p>
                </div>
            </div>

            <div className="h-14 text-center mt-4">
                <h6 className="font-bold">Estado de Cuenta # <b>{props.pitem.id}</b></h6>
                <h6 className='text-center'>Expresado en : {ep.labelMoneda}</h6>
                <h6 className="font-bold"><b> { props.pitem.apellidos+", "+ props.pitem.nombres}</b></h6>
            </div>

            {/* end content */}
            <div className="h-10 flex mt-2 p-1 border w-full justify-center items-center shadow-md">
                <p className="w-1/6 font-bold text-center">
                    Total :
                </p>
                <p className="w-1/6">
                    {props.ptotal ? new Intl.NumberFormat('es-'+ep.moneda,{minimumFractionDigits: 2}).format(props.ptotal): 0} 
                </p>
                <p className="w-1/6 font-bold text-center">
                    Pagado :
                </p>
                <p className="w-1/6">
                {props.ppago ? new Intl.NumberFormat('es-'+ep.moneda,{minimumFractionDigits: 2}).format(props.ppago): 0}  
                </p>
                <p className="w-1/6 font-bold text-center">
                    Saldo :
                </p>
                <p className="w-1/6">
                {props.psaldo ? new Intl.NumberFormat('es-'+ep.moneda,{minimumFractionDigits: 2}).format(props.psaldo): 0}  
                </p>
            </div> 
            <div className='border w-full mt-2 p-1'>
            <Table
              _type={"single"}  
              columnDefs={_infEstado}
              data={props.pestados}
              />
            </div>
            
            <div className='flex mt-6 mb-6'>
                <h5 className="w-1/2 text-left pl-1 italic">fecha emisión : <Moment format="DD/MM/YYYY - HH:mm">{ fechaHoy }</Moment></h5>   
                <h5 className="w-1/2 text-right pr-1 italic">user : { us.nombres }</h5>            
            </div>            
            {/* end content */}

        </div>
    )
})



const ModalEstados = ({view,setview}) => {
    const { item, pTotal, pSaldo, pPago, estados } = useSelector((state) => state.cliente)            
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
                            <XMarkIcon className="h-5 w-5 text-gray-50" />
                        </button>
                    </div>
                    
                    <div className="overflow-y-scroll">
                        <ComponentToPrint
                            ref={componentRef}    
                            pitem={item}       
                            ptotal={pTotal}
                            psaldo={pSaldo}
                            ppago={pPago}
                            pestados={estados}
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

export default ModalEstados;
