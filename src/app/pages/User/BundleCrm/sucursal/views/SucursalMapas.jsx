import { useDispatch, useSelector } from "react-redux";
import Loading from '@components/snippets/Loading'
import {useRef} from 'react';
import GoogleMapReact from 'google-map-react';
import { MapPinIcon } from "@heroicons/react/24/solid";
import{ mapStyles } from '@helpers/mapStyles'

const SucursalMapas = () => {
    const dispatch = useDispatch()      
    const { item } = useSelector((state) => state.cliente)
    const { data, total, pagina, paginas, loading } = useSelector((state) => state.sucursal)
    const mapRef = useRef()
   

    const LocationPin = () =>(        
        <MapPinIcon className="h-8 w-8 text-red-500" />        
    )
    const LocationPins = () =>(
        <MapPinIcon className="h-6 w-6 text-sky-600" />
    )
    
return (
  <>
    <div className="h-auto w-full flex-col">     
        <div className="h-500 mt-1 flex w-full border rounded">                     
        { item.latitude && item.longitude ?
               <GoogleMapReact
               ref={mapRef}
               bootstrapURLKeys={{
                key: 'AIzaSyAF83DBU51q3idSspsd7f4DtTk7vNwHpR8',
                libraries:['places', 'geometry', 'drawing', 'visualization'] 
               }}
               defaultCenter={{
                lat: parseFloat(item.latitude),
                lng: parseFloat(item.longitude)
               }}               
               defaultZoom={13}>
                <LocationPin                    
                    lat= {parseFloat(item.latitude)}
                    lng= {parseFloat(item.longitude)}
                /> 
                {
                  data.map((ite,index)=>(
                    <LocationPins
                    key={index}
                    lat= {parseFloat(ite.latitude)}
                    lng= {parseFloat(ite.longitude)}
                    />      
                  ))  
                }
                
              </GoogleMapReact>
            :null
            }
        </div>    
    </div>    
       
    <Loading loading={loading}/>
  </>
   );
}

export default SucursalMapas;
