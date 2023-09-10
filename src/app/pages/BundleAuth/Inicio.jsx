import { useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { clientesCreate, clientesItem, clientesVerificar  } from '@reducers/crm/clienteSlice'
import { _paises, _tipoCliente, getCiudades } from '@data/dataLoad'
import Select from '@components/selects/Select'
import SelectPais from '@components/selects/SelectPais'
import { XMarkIcon, EyeIcon, EyeSlashIcon, HandThumbUpIcon } from "@heroicons/react/24/outline";
import Loading from '@components/snippets/Loading'


const _nitem = {
   nombres: "",
   direccion: "",
   nit: "",
   telefono: "",
   rol: "cliente",
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
   moneda:"",
   labelMoneda:"",
   tipo: "",
   icon: "",
   banner: "",
   slider: "",
   video: "",
   hinicio: "08:00",
   hfin: "18:00",
   likes: 0,
   views: 0,
   tags: "",
   nivel: "",
   username: "",
   password: "",
   categoriaId: 1,
   tip:"unit"
 }
const Inicio = () => {          
   const dispatch  = useDispatch() 
   const navigate = useNavigate()  
   const [nitem, setnitem] = useState(_nitem);
   const { existente, loading, item, resp } = useSelector((state) => state.cliente) 
   const [ciudades, setciudades] = useState([]);
   const [terminos, setterminos] = useState(false);
   const [view, setview] = useState(false);   
   const [password1, setPassword1] = useState(null);
   const [password2, setPassword2] = useState(null);
   const [tt, setTt] = useState('password');
   const [tab, settab] = useState('1');

   const [errors, seterrors] = useState({
      nombres:"",
      apellidos:"",
      direccion:"",
      telefono:"",
      nit:"",
      email:""
  });
  
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

  const handleChange = (prp,val) =>{      
   setnitem({
       ...nitem,
       [prp]: val
   })    
   } 
const handleChangeu = (prp,val) =>{          
   const { value, latitude, longitude }  = val
   setnitem({
       ...nitem,
       ciudad: value,
       latitude: latitude,
       longitude: longitude
   })
} 

const handleUP = () =>{
   /*sample borrra solo local */
   let iok={
      email: nitem.email
   }
   dispatch(clientesVerificar(iok))
     
}

const handleVerifi = () =>{      
   if(password1 !== password2){      
      seterrors({
         password: "las contraseñas deber ser iguales",        
      })
   }else{      
      seterrors({
         password: "",        
      })
   }
}

const handleSubmit = (e) =>{      
   e.preventDefault();                            
   if(!existente && terminos){
      let iok = {...nitem}
      iok.tip = "public"
      iok.rol = 'cliente'      
      iok.categoriaId = 1 
      iok.password = password1              
      dispatch(clientesCreate(iok));  
      handleEnvios()
   }else{
      console.log("error")
   }      
 
}

const handleEnvios = () =>{   
      setnitem(_nitem)
      setPassword1("")
      setPassword2("")
      setterminos(false)
      settab('2')   
   
}
const handleTerminos = () =>{
   let ii = terminos ? false : true
   setterminos(ii)
}

const handleEnv = () =>{
   navigate('/');   
}




 return (
   <div className="h-600 w-full flex border items-center justify-center">
      <div className="h-450 flex w-2/3 border shadow bg-gray-50">
         <div className="w-2/3 flex-col">
            <div className="h-12 flex">

            </div>
            <div className={tab === '1' ? "h-max flex-col m-4 rounded border-4 bg-white visible":"hidden"}>             
               <form onSubmit={handleSubmit} className="w-full rounded p-2 flex-col text-[10px] ">                   
                  <div className='flex-col rounded-md p-2'>                     
                        <label htmlFor="email" className="p-1 font-bold text-gray-500">Email</label>
                        <input
                           type="email"    
                           onChange={(e)=>handleChange(e.target.name,e.target.value)}
                           onBlur={() => handleUP()}                           
                           value={nitem.email}
                           name="email"       
                           required={true}                    
                           className="h-7 pt-2 pl-2 bg-gray-50 block w-full border text-[10px] text-gray-600 border-gray-300 rounded focus:bg-gray-50 focus:border-gray-100"/>                                                                          
                           {existente && <p className={existente ? "pl-2 text-[10px] italic text-red-600":"pl-2 text-[10px] italic text-white" }>el mail ya esta registrado</p>}                        
                  </div>

                  <div className='flex rounded-md p-2'>  
                     <div className="w-2/3 flex-col mr-1">                   
                        <label htmlFor="nombres" className="p-1 font-bold text-gray-500">Nombre (razón social)</label>
                        <input
                           type="text"    
                           onChange={(e)=>handleChange(e.target.name,e.target.value)}
                           value={nitem.nombres}
                           name="nombres"          
                           required={true}                                     
                           className="h-7 pt-2 pl-2 bg-gray-50 block w-full border text-[10px] text-gray-600 border-gray-300 rounded focus:bg-gray-50 focus:border-gray-100"/>                                                                          
                     </div>
                     <div className="w-1/3 flex-col mr-1">                   
                        <label htmlFor="nit" className="p-1 font-bold text-gray-500">Nit</label>
                        <input
                           type="text"    
                           onChange={(e)=>handleChange(e.target.name,e.target.value)}
                           value={nitem.nit}
                           name="nit"          
                           required={true}                                     
                           className="h-7 pt-2 pl-2 bg-gray-50 block w-full border text-[10px] text-gray-600 border-gray-300 rounded focus:bg-gray-50 focus:border-gray-100"/>                                                                          
                     </div>
                  </div>
                  
                  <div className='flex rounded-md p-2'>                     
                     <div className="w-1/2 flex-col mr-1">
                        <label htmlFor="pais" className="p-1 font-bold text-gray-500">Pais</label>
                        <SelectPais
                           options={_paises}
                           option={nitem.pais}                                    
                           handleChange={handleChanges} 
                           name={"pais"}
                           tipo={"compuesto"}/> 
                     </div>
                     <div className="w-1/2 flex-col ml-1">
                        <label htmlFor="ciudad" className="p-1 font-bold text-gray-500">Ciudad</label>
                        <Select
                           options={ciudades}
                           option={nitem.ciudad}                                    
                           handleChange={handleChangeu} 
                           name={"ciudad"}
                           tipo={"six"}/> 
                     </div>                        
                  </div>
                  <div className='flex rounded-md p-2'>                                          
                     <div className="w-5/12 flex-col">
                        <label htmlFor="password1" className="p-1 font-bold text-gray-500">Password</label>
                        <input
                           type={tt}
                           onChange={(e)=> setPassword1(e.target.value)}                          
                           value={password1}
                           name="password1"    
                           required={true}                                           
                           className="h-7 pt-2 pl-2 bg-gray-50 block w-full border text-[10px] text-gray-600 border-gray-300 rounded focus:bg-gray-50 focus:border-gray-100"/>                                                                                                     
                     </div>
                     <div className="w-5/12 flex-col ml-1">
                        <label htmlFor="password1" className="p-1 font-bold text-gray-500">Re-Password</label>
                        <input
                           type={tt}
                           onChange={(e)=> setPassword2(e.target.value)}                          
                           onBlur={() => handleVerifi()} 
                           value={password2}
                           name="password2"   
                           required={true}                                            
                           className="h-7 pt-2 pl-2 bg-gray-50 block w-full border text-[10px] text-gray-600 border-gray-300 rounded focus:bg-gray-50 focus:border-gray-100"/>                                                                                              
                           {errors.password && <p className="pl-2 text-[10px] italic text-red-400">{errors.password}</p>}                        
                     </div>                        
                     <div className="w-1/12 flex ml-2 pt-4 justify-center items-center">
                        <button
                        type="button"
                        onClick={() => setTt(tt === "text" ? "password":"text")}
                        className='h-7 w-7 flex'>
                           { tt === "password" ?
                             <EyeIcon className="h-5 w-5 text-sky-400" />:
                             <EyeSlashIcon className="h-5 w-5 text-red-400" />
                           }
                           
                        </button>
                     </div>                        
                  </div>  

                  <div className='h-7 border-b flex ml-4 mr-4 text-[11px]'>                  
                  <div className='h-6 w-1/12 flex items-center justify-center'>
                     <input 
                        type="checkbox"
                        value={terminos}
                        onChange={() => handleTerminos()} 
                     />
                  </div>
                  <div className='h-6 w-11/12 italic flex items-center justify-start pl-2 text-gray-600'>
                     <span>He leido y aceptado</span>
                     <button 
                     type="button"
                     onClick={()=> setview(true)}
                     className='ml-1 text-sky-400 font-bold italic'>Terminos y Condiciones</button>
                  </div>
               </div>

               <div className='h-14 flex pl-3 pr-3 text-[11px]'>                  
                  <div className='h-12 w-full flex items-center justify-center pl-2 text-gray-600'>                     
                     <button    
                     type='submit'                         
                     className={terminos && !existente ?'h-7 w-40 bg-sky-400 text-gray-50 font-bold border-none rounded' :'cursor-not-allowed h-7 w-40 bg-sky-200 text-gray-50 font-bold border-none rounded'}>
                        Registrar
                     </button>
                  </div>
               </div> 

           
                  
               </form>  
               
              

            </div>   
            <div className={tab === '2' ? "h-max flex-col m-2 rounded border-none visible":"hidden"}>             
               <div className='h-320 flex-col p-4'>
                  <div className='h-14 bg-gray-100 rounded-t flex border w-full items-center justify-center'>
                          <span className='text-gray-500'>Registro correcto !! </span>
                  </div>            
                  
                  <div className='h-52 flex border-l border-r w-full bg-gray-50 items-center justify-center text-[11px]'>
                     <div className='h-40 w-5/6 flex p-3 justify-center items-center'>                        
                        <div className='h-10 flex items-center justify-center'>
                           <button
                           onClick={() => handleEnv()}
                           className='h-8 w-40 bg-sky-500 border-none rounded flex items-center justify-center'
                           >
                              <span className='text-gray-50 font-bold'> Login</span>
                           </button>
                        </div>   
                     </div>
                  </div>            

                  <div className='h-10 text-[10px] text-sky-500 font-bold flex border w-full items-center p-2'>
                      <span>www.1click-bo.com</span>
                  </div>            
               </div>   
            </div>   

         </div>  
         <div className="border w-1/3 flex bg-sky-400">
            
         </div>  
      </div>
      <>
    { view ?
        <>
        <div className="justify-center items-center flex-1 fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="p-1 relative w-auto my-3 mx-auto max-w-lg flex-row justify-between">
                <div className="h-400 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <div className="ml-1 fixed h-10 w-500 border-none flex p-1 justify-between bg-none">                        
                     
                        <button 
                            onClick={() => setview(false)}
                            className="w-7 h-7 rounded-full bg-red-400 text-xs flex items-center justify-center text-white font-bold mr-4">                            
                            <XMarkIcon className="h-4 w-4 text-gray-50" />
                        </button>
                    </div>
                    
                    <div className="overflow-y-scroll pl-4 pr-4">
                     <div className='h-max flex-col mt-12 text-[10px] text-gray-600'>
                        <h6 className='font-bold text-center m-4'>POLÍTICA DE PRIVACIDAD</h6>
                        <p className='mt-1 text-justify'>
                        El presente Política de Privacidad establece los términos en que 1click usa y protege la información que es proporcionada por sus usuarios al momento de utilizar su sitio web y la aplicación móvil. Esta compañía está comprometida con la seguridad de los datos de sus usuarios. Cuando le pedimos llenar los campos de información personal con la cual usted pueda ser identificado, lo hacemos asegurando que sólo se empleade acuerdo con los términos de este documento. Sin embargo, esta Política de Privacidad puede cambiar con el tiempo o ser actualizada por lo que le recomendamos y enfatizamos revisar continuamente esta página para asegurarse que está de acuerdo con dichos cambios
                        </p>

                        <h6 className='font-bold mt-2'>Información que es recogida</h6>
                        <p className='mt-1 text-justify'>
                        Nuestro sitio web podrá recoger información personal, por ejemplo: Nombre, información de contacto comosu dirección de correo electrónica e información demográfica. Así mismo cuando sea necesario podrá ser requerida información específica para procesar algún pedido o realizar una entrega o facturación.
                        </p>

                        <h6 className='font-bold mt-2'>Uso de la información recogida</h6>
                        <p className='mt-1 text-justify'>
                        Nuestro sitio web y aplicación móvil emplea la información con el fin de proporcionar el mejor servicio posible, particularmente para mantener un registro de usuarios, de pedidos en caso que aplique, y mejorar nuestros productos y servicios. Es posible que sean enviados correos electrónicos periódicamente a través de nuestro sitio con ofertas especiales, nuevos productos y otra información publicitaria que consideremos relevante para usted o que pueda brindarle algún beneficio, estos correos electrónicos serán enviados a la dirección que usted proporcione y podrán ser cancelados en cualquier momento.1click está altamente comprometido para cumplir con el compromiso de mantener su información segura. Usamos los sistemas más avanzados y los actualizamos constantemente para asegurarnos que no exista ningún acceso no autorizado.
                        </p>

                        <h6 className='font-bold mt-2'>Enlaces a Terceros</h6>
                        <p className='mt-1 text-justify'>
                        Este sitio web pudiera contener en laces a otros sitios que pudieran ser de su interés. Una vez que usted de clic en estos enlaces y abandone nuestra página, ya no tenemos control sobre al sitio al que es redirigido y por lo tanto no somos responsables de lostérminos o privacidadni de la protección de sus datos en esos otros sitios terceros. Dichos sitios están sujetos a sus propias políticas de privacidad por lo cual es recomendable que los consulte para confirmar que usted está de acuerdo con estas.Control de su información personal. Esta compañía no venderá, cederá ni distribuirá la información personal que es recopilada sin su consentimiento, salvo que sea requerido por un juez con un orden judicial.1click Se reserva el derecho de cambiar los términos de la presente Política de Privacidad en cualquier momento.
                        </p>

                        
                        <p className='mt-6 mb-6 border-t text-justify'>
                           1click-bo.com 
                        </p>


                     </div>
                     
                    </div>                                                              
                </div>    
            </div>        
        </div>  
        <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
    : null  }
    </> 
    <Loading loading={loading}/>
   </div>   
 );
}

export default Inicio;
