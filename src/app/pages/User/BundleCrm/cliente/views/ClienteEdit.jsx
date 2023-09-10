import { useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { HandThumbUpIcon, EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import FormImg from '@components/forms/FormImg'
import FormPortada from '@components/forms/FormPortada'
import FormMapa from '@components/forms/FormMapa'
import { _validateConfig, _itemCliente  } from '@data/models'
import { _paises, _tipoCliente, getCiudades } from '@data/dataLoad'
import { clientesUpdate  } from '../../reducers/clienteSlice'
import { categoriasItems  } from '@reducers/crm/categoriaSlice'
import Loading from '@components/snippets/Loading'
import Select from '@components/selects/Select'
import SelectPais from '@components/selects/SelectPais'
import SelectData from '@components/selects/SelectDatas'
import Moment from 'react-moment'
import { registerLocale } from  "react-datepicker";
import es from 'date-fns/locale/es';
registerLocale('es', es)


const _nitem = {
    nombres: "",
    direccion: "",
    nit: "",
    telefono: "",
    rol: "",
    personaContacto: "",
    pais:"",
    ciudad:"",
    celular: "",
    web: "",
    filename: "",
    descripcion: "",
    enabled: false,
    email: "",
    snum: 0,
    valor: 0,
    portada: "",
    facebook: "",
    instagram: "",
    tiktok: "",
    latitude: 0,
    longitude: 0,
    tipo: "",
    icon: "",
    banner: "",
    slider: "",
    video: "",
    hinicio: "",
    hfin: "",
    likes: 0,
    views: 0,
    tags: "",
    nivel: "",
    username: "",
    password: "",
    categoriaId: 0,
    tip:"unit",
    moneda:"",
    labelMoneda:""
  }

  

const ClienteEdit = () => {
  const dispatch = useDispatch()   
  const { loading, item } = useSelector((state) => state.cliente)   
  const  {c_items}  = useSelector((state) => state.categoria)    
  const [password, setpassword] = useState("");  
  const [password1, setpassword1] = useState("");  
  const [tp, settp] = useState("password");    
  const [ciudades, setciudades] = useState([]);
  const [tab, settab] = useState('1');   
  const [nitem, setnitem] = useState(_nitem);   
  const [errors, seterrors] = useState({
    nombres:"",
    apellidos:"",
    direccion:"",
    telefono:"",
    nit:"",
    email:""
});


    const chargeIcon = (pky) =>{
        dispatch(categoriasItems())           
    }

    const handleSubmit = event =>{
        event.preventDefault();                         
        if(nitem.id){    
            let iok = {...nitem}
            iok.tip = "unit"            
            dispatch(clientesUpdate(iok));     
        }       
    }





    useEffect(() => {
        if(item.id){
            setnitem(item)                           
        }       
        return () => {   
                               
        };
    }, [loading]);   
    
   

    const handleSubmits = () =>{        
        let iok = {...nitem}
            iok.tip = "unit"                        
        dispatch(clientesUpdate(iok));
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
    const handleChanges = (prp) =>{  
        const { label, value, indice, single} = prp        
        let newCiudades = getCiudades(indice)
        setciudades(newCiudades)        
        setnitem({
            ...nitem,
            pais: label,
            labelMoneda: 'es-'+value,
            moneda: single,
            ciudad:""
        })
    }  

    
    const mapClicked = (e) =>{          
        const { lat, lng } = e
        setnitem({
            ...nitem,
            "latitude": lat,
            "longitude": lng
        })
    } 


    const handleChanged = (prp,val) =>{   
        const { label, value, icon} = val
        setnitem({
            ...nitem,
            [prp]:  value,
            icon: icon
        })       
        chargeIcon(icon)
    } 



    const handelpass = () =>{
        let nn = tp === "password" ? "text":"password"
        settp(nn)
    }

    const handleSubmitp = event =>{                
        event.preventDefault();
        let iok ={
            id       : nitem.id,
            password : password,
            username : nitem.username,
            tip      : 'sample',        
        }        
        dispatch(clientesUpdate(iok));                         
    }

   

  return (
    <>
    <div className="h-full w-full flex-col">        
        <div className='h-500 flex-col w-full border'>
            <div className='h-6 pl-1 border-b w-full flex items-end text-[10px]'>
                <button onClick={() => settab('1')} className={tab === '1'? "h-5 w-36 bg-sky-300  text-white border border-sky-300 flex items-center justify-center rounded-t":"h-5 w-36 border-l bg-gray-200 rounded-t text-gray-500 border border-gray-300 flex items-center justify-center"}>
                    General
                </button>
                <button onClick={() => settab('2')} className={tab === '2'? "h-5 w-36 bg-sky-300  text-white border border-sky-300 flex items-center justify-center rounded-t":"h-5 w-36 border-r  bg-gray-200 rounded-t text-gray-500 border-gray-300 flex items-center justify-center"}>
                    Ubicación
                </button>
              
                <button onClick={() => settab('3')} className={tab === '3'? "h-5 w-36 bg-sky-300  text-white border border-sky-300 flex items-center justify-center rounded-t":"h-5 w-36 border-r bg-gray-200 rounded-t text-gray-500 border-gray-300 flex items-center justify-center"}>
                    Media
                </button>   
                <button onClick={() => settab('4')} className={tab === '4'? "h-5 w-36 bg-sky-300  text-white border border-sky-300 flex items-center justify-center rounded-t":"h-5 w-36 border-r bg-gray-200 rounded-t text-gray-500 border-gray-300 flex items-center justify-center"}>
                    Seguridad
                </button>                                  
            </div> 

            <div className={tab === '1' ? "visible h-480 flex p-1":"hidden"}> 
                <div className="w-1/3 border flex-col">
                    <div className='h-8 border-b bg-gray-100 rounded-t flex items-center pl-2'>
                        <span className='font-bold ml-1 text-gray-500 text-[10px]'>  
                            Imagen
                        </span>
                    </div>
                    <div className='m-4 flex justify-center items-center p-2'>
                        <FormImg
                            item={nitem}
                            payload={"cliente"}
                            payloads={"clientes"}/>                         
                    </div>
                    <div className='h-8 m-4 flex justify-center items-center p-2 text-[12px] text-gray-50'>
                        <div className='h-8 w-1/3 flex shadow justify-end mr-2 rounded bg-blue-400'>
                            <div className='flex w-1/2 justify-end items-center'>
                                <HandThumbUpIcon className="h-6 w-6 text-gray-50" />  
                            </div>                            
                            <span className='flex w-1/2 justify-center items-center'>{item.views}</span>
                        </div>
                        <div className='h-8 w-1/3 flex shadow justify-end ml-2 rounded bg-red-400'>
                            <div className='flex w-1/2 justify-end items-center'>
                              <EyeIcon className="h-6 w-6 text-gray-50" />  
                            </div>      
                            <span className='flex w-1/2 justify-center items-center'>{item.likes}</span>
                        </div>
                    </div>  
                </div>

                <div className="w-2/3 border flex-col ml-1">
                    <div className='h-8 border-b bg-gray-100 rounded-t flex items-center pl-2'>
                        <span className='w-1/2 font-bold ml-1 text-gray-500 text-[10px]'>  
                            Datos de cliente
                        </span>
                        <span className='w-1/2 font-bold ml-1 text-gray-500 text-[10px]'>  
                            Fecha de vencimiento : <Moment format="DD-MM-YYYY">{ item.vencimiento}</Moment>
                        </span>
                    </div>  
                    <form onSubmit={handleSubmit} className="rounded p-2 flex-col text-[10px] ">
                        <div className='w-full flex rounded-md'>
                            <div className="w-3/4 flex-col">
                                <label htmlFor="nombres" className="p-1 font-bold text-gray-500">Nombres</label>
                                <input
                                    type="text"
                                    onChange={(e)=>handleChange(e.target.name,e.target.value)}                                                                    
                                    value={nitem.nombres}
                                    name="nombres"
                                    className="h-7 pt-2 pl-2 block w-full text-[10px] border text-gray-600 border-gray-300 rounded focus:bg-gray-50 focus:border-gray-100"/>                           
                                    {errors.nombres && <p className="pl-2 text-[10px] italic text-red-400">{errors.nombres}</p>}                        
                            </div> 
                            <div className="w-1/4 flex-col pl-1">
                                <label htmlFor="nit" className="p-1 font-bold text-gray-500">NIT</label>
                                <input
                                    type="text"
                                    onChange={(e)=>handleChange(e.target.name,e.target.value)}
                                    value={nitem.nit}
                                    name="apellidos"
                                    className="h-7 pt-2 pl-2 block w-full border text-[10px] text-gray-600 border-gray-300 rounded focus:bg-gray-50 focus:border-gray-100"/>                                
                            </div>                             
                        </div>  

                        <div className='w-full flex rounded-md pt-1'>
                            <div className="w-2/4 flex-col">
                              <label htmlFor="direccion" className="p-1 font-bold text-gray-500">Dirección</label>
                              <input
                                type="text"
                                onChange={(e)=>handleChange(e.target.name,e.target.value)}                                                                    
                                value={nitem.direccion}
                                name="direccion"
                                className="h-7 pt-2 pl-2 block w-full text-[10px] border text-gray-600 border-gray-300 rounded focus:bg-gray-50 focus:border-gray-100"/>                                                           
                            </div> 
                            <div className="w-1/4 flex-col ml-1">
                              <label htmlFor="telefono" className="p-1 font-bold text-gray-500">Teléfono</label>
                              <input
                                type="text"
                                onChange={(e)=>handleChange(e.target.name,e.target.value)}                                                                    
                                value={nitem.telefono}
                                name="telefono"
                                className="h-7 pt-2 pl-2 block w-full text-[10px] border text-gray-600 border-gray-300 rounded focus:bg-gray-50 focus:border-gray-100"/>                                                           
                            </div>
                            <div className="w-1/4 flex-col ml-1">
                              <label htmlFor="celular" className="p-1 font-bold text-gray-500">Celular</label>
                              <input
                                type="text"
                                onChange={(e)=>handleChange(e.target.name,e.target.value)}                                                                    
                                value={nitem.celular}
                                name="calular"
                                className="h-7 pt-2 pl-2 block w-full text-[10px] border text-gray-600 border-gray-300 rounded focus:bg-gray-50 focus:border-gray-100"/>                                                           
                            </div>
                        </div> 

                        <div className='w-full flex rounded-md pt-1'>                            
                            <div className="w-4/12 flex-col">
                              <label htmlFor="email" className="p-1 font-bold text-gray-500">Email</label>
                              <input
                                type="text"
                                onChange={(e)=>handleChange(e.target.name,e.target.value)}                                                                    
                                value={nitem.email}
                                name="email"
                                className="h-7 pt-2 pl-2 block w-full text-[10px] border text-gray-600 border-gray-300 rounded focus:bg-gray-50 focus:border-gray-100"/>                                                           
                            </div> 
                            <div className="w-4/12 flex-col ml-1">
                              <label htmlFor="web" className="p-1 font-bold text-gray-500">Web</label>
                              <input
                                type="text"
                                onChange={(e)=>handleChange(e.target.name,e.target.value)}                                                                    
                                value={nitem.web}
                                name="web"
                                className="h-7 pt-2 pl-2 block w-full text-[10px] border text-gray-600 border-gray-300 rounded focus:bg-gray-50 focus:border-gray-100"/>                                                           
                            </div>
                            <div className="w-4/12 flex-col ml-1">
                              <label htmlFor="categoriaId" className="p-1 font-bold text-gray-500">Categoría</label>
                              <SelectData
                                options={c_items}
                                option={nitem.categoriaId}
                                handleChange={handleChanged}                                                         
                                name={"categoriaId"}/> 
                            </div>                                                        
                        </div>

                        <div className='w-full flex rounded-md pt-1'>
                            <div className="w-2/6 flex-col">
                              <label htmlFor="pais" className="p-1 font-bold text-gray-500">País</label>
                              <SelectPais
                                options={_paises}
                                option={nitem.pais}                                    
                                handleChange={handleChanges} 
                                name={"pais"}
                                tipo={"compuesto"}/> 
                            </div>
                            <div className="w-2/6 flex-col ml-1">
                              <label htmlFor="ciudad" className="p-1 font-bold text-gray-500">Ciudad</label>
                              <Select
                                options={ciudades}
                                option={nitem.ciudad}                                    
                                handleChange={handleChange} 
                                name={"ciudad"}
                                tipo={"local"}/>                                                           
                            </div>
                            <div className="w-1/6 flex-col ml-1">
                              <label htmlFor="hinicio" className="p-1 font-bold  text-gray-500">Hora Apertura</label>
                              <input
                                type="text"
                                onChange={(e)=>handleChange(e.target.name,e.target.value)}                                                                    
                                value={nitem.hinicio}
                                name="hinicio"
                                className="h-7 pt-2 pl-2 block w-full text-[10px] border text-gray-600 border-gray-300 rounded focus:bg-gray-50 focus:border-gray-100"/>                                                           
                            </div>

                            <div className="w-1/6 flex-col ml-1">
                              <label htmlFor="hfin" className="p-1 font-bold text-gray-500">Hora Cierre</label>
                              <input
                                type="text"
                                onChange={(e)=>handleChange(e.target.name,e.target.value)}                                                                    
                                value={nitem.hfin}
                                name="hfin"
                                className="h-7 pt-2 pl-2 block w-full text-[10px] border text-gray-600 border-gray-300 rounded focus:bg-gray-50 focus:border-gray-100"/>                                                                                                                                                                            
                            </div>
                        </div>

                        <div className='w-full flex rounded-md pt-1'>                            
                            <div className="w-1/4 flex-col">
                              <label htmlFor="facebook" className="p-1 font-bold text-gray-500">Facebbok</label>
                              <input
                                type="text"
                                onChange={(e)=>handleChange(e.target.name,e.target.value)}                                                                    
                                value={nitem.facebook}
                                name="facebook"
                                className="h-7 pt-2 pl-2 block w-full text-[10px] border text-gray-600 border-gray-300 rounded focus:bg-gray-50 focus:border-gray-100"/>                                                           
                            </div>
                            <div className="w-1/4 flex-col ml-1">
                              <label htmlFor="instagram" className="p-1 font-bold text-gray-500">Instagram</label>
                              <input
                                type="text"
                                onChange={(e)=>handleChange(e.target.name,e.target.value)}                                                                    
                                value={nitem.instagram}
                                name="instagram"
                                className="h-7 pt-2 pl-2 block w-full text-[10px] border text-gray-600 border-gray-300 rounded focus:bg-gray-50 focus:border-gray-100"/>                                                           
                            </div>
                            <div className="w-1/4 flex-col ml-1">
                              <label htmlFor="tiktok" className="p-1 font-bold text-gray-500">Tiktok</label>
                              <input
                                type="text"
                                onChange={(e)=>handleChange(e.target.name,e.target.value)}                                                                    
                                value={nitem.tiktok}
                                name="tiktok"
                                className="h-7 pt-2 pl-2 block w-full text-[10px] border text-gray-600 border-gray-300 rounded focus:bg-gray-50 focus:border-gray-100"/>                                                           
                            </div>  
                            <div className="w-1/4 flex-col ml-1">
                              <label htmlFor="video" className="p-1 font-bold text-gray-500">Video  </label>
                              <input
                                type="text"
                                onChange={(e)=>handleChange(e.target.name,e.target.value)}                                                                    
                                value={nitem.video}
                                placeholder='QC8iQqtG0hg'
                                name="video"
                                className="h-7 italic pt-2 pl-2 block w-full text-[10px] border text-gray-600 border-gray-300 rounded focus:bg-gray-50 focus:border-gray-100"/>                                                           
                            </div>                                             
                        </div>

                        <div className='w-full flex rounded-md pt-1'>                            
                            <div className="w-1/6 flex-col">
                              <label htmlFor="tipo" className="p-1 font-bold text-gray-500">Tipo</label>
                              <Select
                                options={_tipoCliente}
                                option={nitem.tipo}                                    
                                handleChange={handleChange} 
                                name={"tipo"}
                                tipo={"local"}/>                                                          
                            </div>                          
                            <div className="w-5/6 flex-col ml-1">
                              <label htmlFor="tags" className="p-1 font-bold text-gray-500">Tags</label>
                              <input
                                type="text"
                                onChange={(e)=>handleChange(e.target.name,e.target.value)}                                                                    
                                value={nitem.tags}
                                name="tags"
                                className="h-7 pt-2 pl-2 block w-full text-[10px] border text-gray-600 border-gray-300 rounded focus:bg-gray-50 focus:border-gray-100"/>                                                           
                            </div>                                              
                        </div>
                        <div className='w-full flex rounded-md pt-1'>                            
                            <div className="w-full flex-col">
                              <label htmlFor="descripcion" className="p-1 font-bold text-gray-500">Descripción</label>
                              <textarea
                                type="text"
                                onChange={(e)=>handleChange(e.target.name,e.target.value)}                                                                    
                                value={nitem.descripcion}
                                name="descripcion"
                                className="pt-2 pl-2 block w-full text-[10px] border text-gray-600 border-gray-300 rounded focus:bg-gray-50 focus:border-gray-100"/>                                                           
                            </div>                                                                         
                        </div>

                        <div className='w-full flex rounded-md pt-1'>                            
                            <div className="w-full flex-col">
                                <button
                                    type="submit"
                                    className="h-8 w-24 bg-orange-400  hover:bg-orange-300 rounded">
                                    <span className='font-bold  text-gray-50'>{nitem.id ? "Actualizar": "Registrar"}</span>
                                </button>                               
                            </div>                                                                         
                        </div>
                </form>    
                   
                </div>    
            </div>

            <div className={tab === '2' ? "visible flex-col p-1 h-480 ":"hidden"}>                                                               
                <div className='h-430 w-full flex'>
                    { nitem.latitude &&   nitem.longitude ?
                    <FormMapa
                        item={nitem}
                        mapClicked={mapClicked}
                    />: null}  
                </div>
                <div className='h-10 w-full flex mt-1 text-[10px] items-center'>
                  <button 
                    type="button"
                    onClick={()=> handleSubmits()}
                    className={nitem.id ? "w-40 h-7 rounded bg-orange-500 text-white font-bold items-center justify-center" : "w-40 h-9 rounded bg-sky-500 text-white font-bold flex" }>                                
                    <span className='font-bold  text-gray-50'>{nitem.id ? "Actualizar": "Registrar"}</span>                   
                  </button>
                </div>
            </div>

            <div className={tab === '3' ? "visible flex-col p-1 h-480 border-2":"hidden"}>
                <div className='h-1/3 border flex w-full p-1'>
                    <FormPortada
                     item={nitem}
                     payload={"portada"}
                     payloads={"portadas"}/>   
                 </div>
                 <div className='h-1/3 border flex w-full'>

                 </div>
                 <div className='h-1/3 border flex w-full'>

                 </div>
            </div>
            <div className={tab === '4' ? "visible flex p-1 h-480 border-2":"hidden"}>
                <div className="w-1/3 border flex-col">
                    <div className='h-7 border-b bg-gray-100 rounded-t flex items-center pl-2'>
                        <span className='font-bold ml-1 text-gray-500 text-[10px]'>  
                            Imagen
                        </span>
                    </div>
                    <div className='m-4 flex justify-center items-center p-2'>                        
                        <FormImg
                            item={nitem}
                            payload={"cliente"}
                            payloads={"clientes"}/>                         
                    </div> 
                    <div className='h-8 m-4 flex justify-center items-center p-2 text-[12px] text-gray-50'>
                        <div className='h-8 w-1/3 flex shadow justify-end mr-2 rounded bg-blue-400'>
                            <div className='flex w-1/2 justify-end items-center'>
                                <HandThumbUpIcon className="h-6 w-6 text-gray-50" />  
                            </div>                            
                            <span className='flex w-1/2 justify-center items-center'>{item.views}</span>
                        </div>
                        <div className='h-8 w-1/3 flex shadow justify-end ml-2 rounded bg-red-400'>
                            <div className='flex w-1/2 justify-end items-center'>
                                <EyeIcon className="h-6 w-6 text-gray-50" />  
                            </div>      
                            <span className='flex w-1/2 justify-center items-center'>{item.likes}</span>
                        </div>
                    </div> 
                </div>   

                <div className="w-2/3 border flex-col ml-1">
                    <div className='h-7 border-b bg-gray-100 rounded-t flex items-center pl-2'>
                        <span className='font-bold ml-1 text-gray-500 text-[10px]'>  
                            Datos de cliente
                        </span>
                    </div> 
                                    <form onSubmit={handleSubmitp} className="rounded p-2 flex-col text-[10px] ">    
                                            <div className='w-full flex rounded-md p-2'>
                                                <div className="w-1/4 flex-col">
                                                        <label htmlFor="id" className="p-1 font-bold text-gray-500">ID</label>
                                                        <input
                                                            type="text"
                                                            onChange={(e)=>handleChange(e.target.name,e.target.value)}
                                                            value={nitem.id}
                                                            name="id"
                                                            readOnly={true}
                                                            className="h-7 pt-2 pl-2 bg-gray-50 block w-full border text-[10px] text-gray-600 border-gray-300 rounded focus:bg-gray-50 focus:border-gray-100"/>                                
                                                </div>   
                                                <div className="w-3/4 flex-col ml-1">
                                                    <label htmlFor="email" className="p-1 font-bold text-gray-500">Username</label>
                                                    <input
                                                        type="text"
                                                        onChange={(e)=>handleChange(e.target.name,e.target.value)}                                                                    
                                                        value={nitem.email}
                                                        readOnly={true}
                                                        name="email"
                                                        className="h-7 pt-2 pl-2  bg-gray-100 block w-full text-[10px] border text-gray-600 border-gray-300 rounded focus:bg-gray-50 focus:border-gray-100"/>                                                                                   
                                                </div>                                                                            
                                            </div>

                                            <div className='w-full flex rounded-md p-2'>
                                                <div className="w-5/12 flex-col">
                                                    <label htmlFor="password" className="p-1 font-bold text-gray-500">Password</label>
                                                    <input
                                                        type={tp}
                                                        onChange={(e)=>setpassword(e.target.value)}                                                                    
                                                        value={password}
                                                        required={true}
                                                        name="password"
                                                        className="h-7 pt-2 pl-2 block w-full text-[10px] border text-gray-600 border-gray-300 rounded focus:bg-gray-50 focus:border-gray-100"/>                                                                                   
                                                </div> 
                                                <div className="w-5/12 flex-col pl-1">
                                                    <label htmlFor="password1" className="p-1 font-bold text-gray-500">Re - Password</label>
                                                    <input
                                                        type={tp}
                                                        onChange={(e)=>setpassword1(e.target.value)}                                                                    
                                                        value={password1}
                                                        required={true}
                                                        name="password1"
                                                        className="h-7 pt-2 pl-2 block w-full text-[10px] border text-gray-600 border-gray-300 rounded focus:bg-gray-50 focus:border-gray-100"/>                                                                                   
                                                </div>  
                                                <div className="w-2/12 pl-1 flex pt-3 justify-center">
                                                      <button
                                                      type="button"
                                                      className='border rounded h-8 w-8 flex items-center justify-center'
                                                      onClick={() => handelpass() }>
                                                        { tp === "password" ?
                                                            <EyeIcon className="h-6 w-6 text-sky-500" /> : <EyeSlashIcon className="h-6 w-6 text-sky-500" />}
                                                        
                                                      </button>                                                    
                                                </div>                            
                                            </div>  

                                            <div className='w-full flex rounded-md pt-1 pl-2'>
                                                { password === password1 ?
                                                <div className="w-full flex-col">
                                                    <button
                                                        type="submit"
                                                        className="h-7 w-20 border bg-orange-400  hover:bg-orange-300 rounded-md">                                    
                                                        <span className='font-bold  text-gray-50'>Actualizar</span>
                                                    </button>
                                                </div>     
                                                :null}
                                            </div>
                                    </form>
                                </div>





            </div>
       </div>
    </div>     
    <Loading loading={loading}/>
    </>    
  );
}

export default ClienteEdit;