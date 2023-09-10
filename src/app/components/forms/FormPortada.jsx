import {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { apiUrl } from '@helpers'
import { image  } from '@reducers/crm/imagenSlice'
import { CloudArrowUpIcon } from "@heroicons/react/24/outline";
import Loading from '@components/snippets/Loading'



const FormPortada = ({item}) => {
  
    const dispatch = useDispatch()        
    const [imagePreviewUrl,setImagePreviewUrl] = useState('');    
    const {loading }= useSelector(state => state.imagen)
    
    const handleChangu = (e) =>{
        e.preventDefault()
        let readers = new FileReader()
        let files = e.target.files[0]
        readers.onloadend = () =>{            
            setImagePreviewUrl(readers.result)
        }
        readers.readAsDataURL(files)

        const formDatas = new FormData()
        formDatas.append("file",files)        
        let dato ={
            item: formDatas,
            pky: item.id,
            payload: 'portada'
        }                
        dispatch(image(dato)) 
    }


    return (        
        <>
        <div className="h-max flex w-full p-1 text-[10px]">
          <div className='h-32 w-2/6 flex items-center justify-center'>
          { item.id &&            
            <div className="h-max w-5/6 flex items-center justify-center">
                <label 
                htmlFor="dropzone-files" 
                className="w-full flex flex-col justify-center items-center h-20 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <div className="flex flex-col justify-center items-center pt-1 pb-1">
                    <CloudArrowUpIcon className="h-6 w-6 text-gray-500" />
                    <p className="mb-1  text-gray-500 dark:text-gray-400 text-center">
                        <span className="font-semibold">Haga clic para cargar</span></p>
                    <p className=" text-gray-500 dark:text-gray-400 text-center">
                        PNG, JPG or GIF 
                    </p>
                  
                </div>           
                <input 
                    name="qq"
                    id="dropzone-files" 
                    type="file" 
                    className="hidden" 
                    onChange={(e) => handleChangu(e)}
                />
                </label>                
            </div>
            }
          </div>  
          <div className='h-32 w-4/6 flex'>
            { imagePreviewUrl ? 
                <img alt="preview" className="h-32 w-full" src={imagePreviewUrl} />:
                <img alt='portada'
                     className="h-32 w-full border rounded shadow-md"          
                     src={`${apiUrl}static/images/portadas/lg/` + item.portada}
                /> 
            }
          </div>  
        </div>
        <Loading loading={loading}/>
        </>
    );
}

export default FormPortada;
