import { useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { PrinterIcon, ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import FormImg from '@components/forms/FormImg'
import Barcode from 'react-barcode'
import QRCode from "qrcode.react";
import { _validateConfig, _itemCliente, _producto  } from '@data/models'
import { productosUpdate, productosCreate  } from '../../reducers/productoSlice'
import Loading from '@components/snippets/Loading'
import Select from '@components/selects/Select'
import SelectData from '@components/selects/SelectData'
import Switch from "react-switch";


const _nitem={
    nombre: "",    
    codigo: "",
    inCatalogo: false,
    inOferta: false,
    estado: false,
    tipo: "",
    precioVenta: 0,
    precioCosto: 0,
    precioOferta: 0,
    filename: "",
    colores: "",    
    pDescuento: 0,
    medida: "",       
    categoria: "",                 
    stock: 0,
    descripcion: "",
    clienteId: 0
}

const ProductoEdit = () => {
  const dispatch = useDispatch()   
  const navigate = useNavigate()
  const { item, loading } = useSelector((state) => state.producto)      
  const user      = JSON.parse(localStorage.getItem('@usuarioUnity22'))      
  const { c_items } = useSelector((state) => state.cate)
  const [tab, settab] = useState('1');   
  const [nitem, setnitem] = useState(_nitem);     

  const [errors, seterrors] = useState({
    nombre:"",
    codigo:"",        
    precioVenta:"",
    tientrega:"",
    tientregaret:"",
    consumopro:""
});

  useEffect(() => {
        if(item.id){
            setnitem(item)               
        }       
        return () => {   
                               
        };
    }, [loading]);   
    
    const handleSubmit = event =>{
        event.preventDefault();                         
        if(nitem.id){     
            let iok = {...nitem}            
            iok.clienteId = user.id            
            dispatch(productosUpdate(iok));     
          
        }else{
            let iok = {...nitem}            
            iok.clienteId = user.id
            dispatch(productosCreate(iok));  
        } 
      
    }

    const handleChanged = (prp,val) =>{ 

        setnitem({
            ...nitem,
            [prp]: val
        }) 

    }   

    const handleChange = (prp,val) =>{   
        setnitem({
            ...nitem,
            [prp]: val
        })  
        let found = _itemCliente.find(it => it.label === prp);   
        if(found){
            let nn = _validateConfig(found.type,val)
            seterrors({
                ...errors,
                [found.label]:nn
            })
        }
    } 

    const changesAA = (checked) => {               
        setnitem({
          ...nitem,
          "inOferta": checked
      })
    }
  
    return (    
    <>
    <div className="h-full w-full flex-col"> 
        <div className="h-6 flex w-full flex-row items-center border-b">
                <div className="h-5 flex bg-gray-400 border border-gray-300 rounded-t-md mr-1">   
                    <button 
                    onClick={() =>navigate("/admin/inventario")}
                    className="h-5 w-24 text-[10px] items-center flex justify-center text-gray-50 font-bold">
                    Lista
                    </button>
                    <button className="h-5 w-6 text-[10px] items-center flex justify-center text-sky-500 font-bold mr-1">
                            <ChevronRightIcon className="h-4 w-4 text-gray-50" />
                    </button>                  
                </div>

                <div className="h-5 flex bg-sky-300 rounded-t-md">   
                    <button className="h-6 w-24 text-[10px] items-center flex justify-center text-gray-50 font-bold">
                    Editar
                    </button>
                    <button className="h-5 w-6 text-[10px] items-center flex justify-center text-sky-500 font-bold mr-1">
                    <ChevronDownIcon className="h-4 w-4 text-gray-50" />
                    </button>                  
                </div>
        </div>
        <div className='h-480 flex-col w-full'>
      

                            <div className={tab === '1' ? "visible h-430 flex p-1":"hidden"}> 

                                <div className="w-1/3 border flex-col">
                                    <div className='h-8 border-b bg-gray-100 rounded-t flex items-center pl-2'>
                                        <span className='font-bold ml-1 text-gray-500 text-[10px]'>  
                                            Imagen
                                        </span>
                                    </div>
                                    <div className='m-4 flex justify-center items-center p-2'>                        
                                        <FormImg
                                            item={nitem}
                                            payload={"producto"}
                                            payloads={"productos"}/>                         
                                    </div>  
                                </div>

                                <div className="w-2/3 border flex-col ml-1">
                                    <div className='h-8 border-b bg-gray-100 rounded-t flex items-center pl-2'>
                                        <span className='font-bold ml-1 text-gray-500 text-[10px]'>  
                                            Datos de producto
                                        </span>
                                    </div>  
                                    <form onSubmit={handleSubmit} className="rounded p-2 flex-col text-[10px] ">    
                                            <div className='w-full flex p-2 rounded-md'>
                                                <div className="w-2/3 flex-col">
                                                    <label htmlFor="nombre" className="p-1 font-bold text-gray-500">Nombres</label>
                                                    <input
                                                        type="text"
                                                        onChange={(e)=>handleChange(e.target.name,e.target.value)}                                                                    
                                                        value={nitem.nombre}
                                                        name="nombre"
                                                        className="h-7 pt-2 pl-2 block w-full text-[10px] border text-gray-600 border-gray-300 rounded focus:bg-gray-50 focus:border-gray-100"/>                           
                                                        {errors.nombre && <p className="pl-2 text-[10px] italic text-red-400">{errors.nombre}</p>}                        
                                                </div> 
                                                <div className="w-1/3 flex-col pl-1">
                                                    <label htmlFor="codigo" className="p-1 font-bold text-gray-500">Código</label>
                                                    <input
                                                        type="text"
                                                        onChange={(e)=>handleChange(e.target.name,e.target.value)}
                                                        value={nitem.codigo}
                                                        name="codigo"
                                                        className="h-7 pt-2 pl-2 block w-full border text-[10px] text-gray-600 border-gray-300 rounded focus:bg-gray-50 focus:border-gray-100"/>
                                                    {errors.codigo && <p className="italic text-red-400">{errors.codigo}</p>} 
                                                </div>                             
                                            </div>  

                                            <div className='w-full flex p-2 rounded-md'>
                                                <div className="w-2/6 flex-col">
                                                    <label htmlFor="precioCosto" className="p-1 font-bold text-gray-500">Precio Compra</label>
                                                    <input
                                                        type="number"
                                                        onChange={(e)=>handleChange(e.target.name,e.target.value)}
                                                        value={nitem.precioCosto}
                                                        name="precioCosto"
                                                        className="h-7 pt-2 pl-2 block w-full text-[10px] border text-gray-600 border-gray-300 rounded focus:bg-gray-50 focus:border-gray-100"/>                           
                                                        {errors.precioCosto && <p className="pl-2 text-[10px] italic text-red-400">{errors.precioCosto}</p>}                        
                                                </div>
                                                <div className="w-2/6 flex-col ml-2">
                                                    <label htmlFor="precioVenta" className="p-1 font-bold text-gray-500">Precio Venta</label>
                                                    <input
                                                        type="number"
                                                        onChange={(e)=>handleChange(e.target.name,e.target.value)}
                                                        value={nitem.precioVenta}
                                                        name="precioVenta"
                                                        className="h-7 pt-2 pl-2 block w-full text-[10px] border text-gray-600 border-gray-300 rounded focus:bg-gray-50 focus:border-gray-100"/>                           
                                                        {errors.precioVenta && <p className="pl-2 text-[10px] italic text-red-400">{errors.precioVenta}</p>}                        
                                                </div>
                                                <div className="w-1/6 flex-col ml-2">
                                                    <label htmlFor="margen" className="p-1 font-bold text-gray-500">Valor Ganancia</label>
                                                    <input
                                                        type="text"
                                                        onChange={(e)=>handleChange(e.target.name,e.target.value)}
                                                        value={(nitem.precioVenta - nitem.precioCosto ).toFixed(2)}
                                                        name="precioOferta"
                                                        readOnly={true}
                                                        className="h-7 pt-2 pl-2 bg-gray-100 block w-full text-[10px] border text-gray-600 border-gray-300 rounded focus:bg-gray-50 focus:border-gray-100"/>                           
                                                        
                                                </div>
                                                <div className="w-1/6 flex-col ml-2">
                                                    <label htmlFor="margen" className="p-1 font-bold text-gray-500">%  Ganancia</label>
                                                    <input
                                                        type="text"
                                                        onChange={(e)=>handleChange(e.target.name,e.target.value)}
                                                        value={((nitem.precioCosto * 100) / nitem.precioVenta ).toFixed(1)+' %'}
                                                        name="precioOferta"
                                                        readOnly={true}
                                                        className="h-7 pt-2 pl-2 bg-sky-200 block w-full text-[10px] border text-gray-600 border-gray-300 rounded focus:bg-gray-50 focus:border-gray-100"/>                           
                                                        
                                                </div>
                                                                           
                                            </div> 
                                            <div className='w-full flex p-2 rounded-md'>  
                                                <div className="w-2/6 flex-col pl-1">
                                                    <label htmlFor="stock" className="p-1 font-bold text-gray-500">Stock</label>
                                                    <input
                                                        type="number"
                                                        onChange={(e)=>handleChange(e.target.name,e.target.value)}
                                                        value={nitem.stock}
                                                        name="stock"                                                        
                                                        className="h-7 pt-2 pl-2 bg-gray-100 block w-full text-[10px] border text-gray-600 border-gray-300 rounded focus:bg-gray-50 focus:border-gray-100"/>                           
                                                        
                                                </div>
                                                <div className="w-2/6 flex-col pl-1">
                                                    <label htmlFor="cateId" className="p-1 font-bold text-gray-500">Categoría</label>
                                                    <SelectData
                                                        options={c_items}
                                                        option={nitem.cateId}
                                                        handleChange={handleChanged}                                                         
                                                        name={"cateId"}/>  
                                                </div>
                                                <div className="w-1/6 flex-col pl-1">
                                                    <label htmlFor="inOferta" className="p-1 font-bold text-gray-500">Oferta</label>
                                                    <div className='h-7 border rounded w-full flex items-center pl-2'>
                                                    <Switch                         
                                                        onChange={ changesAA }  
                                                        checked={nitem.inOferta || false} 
                                                        offColor="#ef4444"      
                                                        height={18}       
                                                        width={40}
                                                        onHandleColor="#c1c1c1"
                                                        offHandleColor="#c1c1c1"                                  
                                                    />
                                                    </div>                                                    
                                                </div>                                             
                                                <div className="w-1/6 flex-col pl-1">
                                                    <label htmlFor="precioOferta" className="p-1 font-bold text-gray-500">Precio Oferta</label>
                                                    <input
                                                        type="text"
                                                        onChange={(e)=>handleChange(e.target.name,e.target.value)}
                                                        value={nitem.inOferta ? nitem.precioOferta:0 }
                                                        name="precioOferta"
                                                        readOnly={nitem.inOferta ? false:true}                                                      
                                                        className="h-7 pt-2 pl-2 bg-sky-200 block w-full text-[10px] border text-gray-600 border-gray-300 rounded focus:bg-gray-50 focus:border-gray-100"/>                           
                                                        
                                                </div>                             
                                            </div> 

                                           

                                          

                   

                                            <div className='w-full flex p-2 rounded-md'>
                                                <div className="w-full flex-col">
                                                    <label htmlFor="observaciones" className="p-1 font-bold text-gray-500">Descripción</label>
                                                    <textarea
                                                        type="text"
                                                        onChange={(e)=>handleChange(e.target.name,e.target.value)}                                                              
                                                        value={nitem.descripcion}
                                                        name="descripcion"
                                                        rows={1}
                                                        className="pt-2 pl-2 block w-full text-[10px] border text-gray-600 border-gray-300 rounded focus:bg-gray-50 focus:border-gray-100"/>                           
                                                        {errors.descripcion && <p className="pl-2 text-[10px] italic text-red-400">{errors.descripcion}</p>}                        
                                                </div>                                                 
                                            </div>
                                            <div className='w-full flex p-2 rounded-md'>
                                                <div className="w-2/3 flex-col">
                                                    <button
                                                        type="submit"
                                                        className={errors.nombre === "" && errors.codigo === "" && errors.precioVenta === "" ? 'h-7 w-20 border bg-orange-400  hover:bg-orange-300 rounded-md':'h-7 w-20 border bg-orange-300 cursor-not-allowed hover:bg-orange-300 rounded-md'}>                                    
                                                        <span className='font-bold  text-gray-50'>{nitem.id ? "Actualizar": "Registrar"}</span>
                                                    </button>
                                                </div>                                                       
                                            </div>
                                    </form>
                                </div>    

                            </div>

                            <div className={tab === '2' ? "visible flex p-1 h-430":"hidden"}>                                
                             
                            
                            </div>
                            <div className={tab === '3' ? "visible flex-col p-1 h-430":"hidden"}>                                
                               
                            </div>
                            
                      </div>


    </div>     
    <Loading loading={loading}/>
    </>    
  );
}

export default ProductoEdit;