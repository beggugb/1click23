import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import { productosData, productosItem, productosDelete, resetItem, depItems, setModulo  } from '@reducers/inventario/productoSlice'
import { catesItems  } from '@reducers/inventario/cateSlice'
import { _modelProducto, _columndProductos } from '@data/dataModels'
import { QueueListIcon } from "@heroicons/react/24/outline";
import Table from '@components/tables/Table'
import Menu from '@components/menus/MenuSingle'
import SearchInput from '@components/inputs/Searchs'
import SelectModel from '@components/selects/SelectModel'
import SelectIndex from '@components/selects/SelectIndex'
import Loading from '@components/snippets/Loading'
import ModalProducto from '../includes/ModalProducto'
import ModalEtiquetas from '../includes/ModalEtiquetas'

const TipoIndex = () => {
    const dispatch = useDispatch()     
    const navigate = useNavigate() 
    const { data, total, pagina, paginas, loading } = useSelector((state) => state.producto)  
    const {item } = useSelector((state) => state.cliente) 
    const [columnDefs, setcolumnDefs] = useState(_columndProductos); 
    const [typeTable, settypeTable] = useState("table");
    const [indicador, setindicador] = useState(0);
    const [parametro, setparametro] = useState("");
    const [prop, setprop] = useState("nombre");
    const [view, setview] = useState(false);
    const [views, setviews] = useState(false);    
  
 


    const setIndicador = (key) =>{ 
        if(key === indicador){
          setindicador(0) 
        }else{
          setindicador(key) 
        }      
    }

    const getDatas = (peg) =>{
        let iok = {
            pagina:peg,
            num:12,
            prop:prop,
            parametro:"",
            clienteId : item.id              
          }
          dispatch(productosData(iok))   
    }
    const cargarDependencias = () => {
        let dato={
          pky: item.id
        }        
        dispatch(catesItems(dato))      
    }

    useEffect(() => {            
        getDatas(1) 
        cargarDependencias()
        dispatch(setModulo('productos'))     
      return () => {      
        /*dispatch(resetData()) */
                  
      };
    }, []);
    
    const handleData = (pagina,num) =>{
        if(pagina > 0){
            let iok={
                pagina : pagina,
                num:num,
                parametro: parametro,
                prop: prop,
                clienteId : item.id
        }
        dispatch(productosData(iok)) 
        }
    }
    const handleNew = () =>{
        dispatch(resetItem())        
        navigate('/admin/inventario/productos/new');
    }
    const handleEdit = () =>{
        if(indicador){
            let iok ={
              id: indicador,
              tipo: "unit"
            }
            dispatch(productosItem(iok))                    
            navigate('/admin/inventario/productos/new');        
          }
    }

    const handleDetail = () =>{
        if(indicador){
            let iok ={
              id: indicador,
              tipo: "list"
            }
            console.log(iok)
          dispatch(productosItem(iok))
          setviews(true)
          }
    }

    const handleShow = () =>{
        if(indicador){
            let iok ={
              id: indicador,
              tipo: "list"
            }
            console.log(iok)
          dispatch(productosItem(iok))
          setview(true)
          }
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

    const handleParametro = () =>{
      let iok = {
        pagina:1,
        num:12,
        prop:prop,
        parametro:"",
        clienteId : item.id              
      }
      dispatch(productosData(iok))   
    }

    const handleSearch = (e) =>{    
        e.preventDefault();
          let iok = {
            pagina      : pagina,
            num         : 12,
            parametro   : parametro,
            prop        : prop,
            clienteId   : item.id
        }        
        dispatch(productosData(iok)) 
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
                  options={_modelProducto}
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
           payload={"productos"}
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
    <ModalProducto view={view} setview={setview}/>         
    <ModalEtiquetas view={views} setview={setviews}/>     
    <Loading loading={loading}/>
  </>
   );
}

export default TipoIndex;
