import { useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { _columndClientes, _modelCliente } from '@data/dataModels'
import { clientesData, resetCliente, clientesItem  } from '@reducers/crm/clienteSlice'
import { categoriasItems } from '@reducers/crm/categoriaSlice'
import { QueueListIcon } from "@heroicons/react/24/outline";
import Table from '@components/tables/Table'
import SearchInput from '@components/inputs/Searchs'
import SelectIndex from '@components/selects/SelectIndex'
import SelectModel from '@components/selects/SelectModel'
import Loading from '@components/snippets/Loading'
import Menu from '@components/menus/MenuSingle'
import ModalCliente from '../includes/ModalCliente'
import ModalEstado from '../includes/ModalEstado'


const ClienteIndex = () => {
    const dispatch = useDispatch()  
    const navigate = useNavigate()    
    const { loading, data, pagina, paginas, total } = useSelector((state) => state.cliente)           
    const [parametro, setparametro] = useState("");
    const [prop, setprop] = useState("nombres");
    const [indicador, setindicador] = useState(0);
    const [view, setview] = useState(false);    
    const [views, setviews] = useState(false); 
    const [columnDefs, setcolumnDefs] = useState(_columndClientes);
    const [typeTable, settypeTable] = useState("table");
    
    const getDatas = (pag) =>{
        let iok={
            pagina:pag,
            num:12,
            prop:prop,
            parametro:""
        }
        dispatch(clientesData(iok))
    }

    const handleData = (pagina,num) =>{
        if(pagina > 0){
        let iok={
            pagina : pagina,
            num:num,
            parametro: parametro,
            prop: prop
        }
        dispatch(clientesData(iok))
        }
    }
    const handleParametro = () =>{
        let iok = {
          pagina : 1,
          num    : 12,
          parametro: "",
          prop   : "nombres"
        }
        dispatch(clientesData(iok))
    }
    const handleSearch = (e) =>{    
        e.preventDefault();
          let iok = {
            pagina : pagina,
            num    : 12,
            parametro:parametro,
            prop   :prop
        }        
        dispatch(clientesData(iok))    
    }


    useEffect(() => {
        getDatas(1)    
        setIndicador(0)  
        dispatch(categoriasItems())  
        return () => {
      
        };
    }, []);

    const setIndicador = (key,prp) =>{         
        if(key === indicador){
          setindicador(0) 
        }else{
          setindicador(key) 
        }      
    }
    const handleNew = () =>{
        dispatch(resetCliente())
        navigate('/admin/adm/clientes/new');   
    }
    const handleEdit = () =>{
        if(indicador){
            let iok={
              id: indicador,
              tipo: 'unit'
            }
        dispatch(clientesItem(iok))
        navigate('/admin/adm/clientes/new');      
        }
    }  
    const handleShow = () =>{        
        if(indicador){
         let iok={
           id: indicador,
           tipo: 'unit'
         }
       dispatch(clientesItem(iok))
       setview(true)
       }
     }

    const handleDetail = () =>{      
       /*if(indicador){
         let iok={
           id: indicador,
           tipo: 'unit'
         }
       dispatch(clientesItem(iok))
       setviews(true)
       }*/
    }   
    const handleTrash = () =>{

    }  
    const handleCham = (value) =>{              
      let newArray = [...columnDefs]        
      newArray.map((it, index)=>{                    
        if(value === it.field){
          newArray[index].est = it.est === 'visible' ? 'hidden': 'visible' 
          return 0
        }
        return null
      })
      setcolumnDefs(newArray)        
      
    } 
    

    
 return (
    <>
    <div className="h-full w-full flex-col">              
        <div className='h-10 w-full bg-gray-100 flex items-center'>
            <div className="w-2/6 flex">
                <Menu
                type={"action"}
                indicador={indicador}
                handleNew={handleNew} 
                handleEdit={handleEdit}
                handleDetail={handleDetail}
                handleShow={handleShow}
                handleTrash={handleTrash}/> 
            </div>

            <div className="w-1/6 flex justify-center">               
              <div className='border flex w-8 h-7 border-gray-300 justify-center rounded mr-1'>
                  <button
                    onClick={() => settypeTable(typeTable === "table"?"img":"table")}
                    type="button"
                    className={typeTable === "table"?"h-6 w-7 flex items-center justify-center rounded-r hover:bg-sky-200":"h-6 w-7 flex items-center justify-center rounded-r bg-sky-300 hover:bg-sky-200"}>
                    <QueueListIcon className="h-5 w-5 text-gray-500" />
                  </button>
                </div>      
                {typeTable === "table" ?
                <SelectIndex
                    options={columnDefs}                       
                    handleChange={handleCham} 
                    name={"tipo"}/>:null}
            </div>

            <div className="w-4/6 flex">               
              <div className='w-2/12 flex items-center justify-end'>
                <SelectModel
                  options={_modelCliente}
                  prop={prop}
                  setprop={setprop}
                />
              </div>
              <div className='w-10/12 flex'>
                <SearchInput
                    parametro={parametro}
                    setParametro={setparametro}
                    handleSearch={handleSearch}
                    handleParametro={handleParametro} 
                    data={data}
                    name="clientes"
                />
              </div>                             
            </div>
        </div>  
        <div className='h-500 mt-1 w-full flex'>
        <Table
           type={typeTable}
           payload={"clientes"}
           data={data}
           columnDefs={columnDefs}
           indicador={indicador}
           setIndicador={setIndicador}
           pagina={pagina}
           paginas={paginas}
           total={total}
           handleData={handleData}
           />
        </div>                                                                         
    </div>        
    <ModalCliente view={view} setview={setview}/>         
    <ModalEstado view={views} setview={setviews}/>        
    <Loading loading={loading}/>
    </>
    );
}

export default ClienteIndex;
