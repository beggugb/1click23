import axios from 'axios'
import { apiUrl } from '@helpers'
import authHeader  from '@bundleAuth/services/auth-header.js'


const _getItem = async (pky, endpoint) => {    
    const response = await axios
      .get(apiUrl + `${endpoint}/item/${pky.id}/${pky.tipo}`, {
        headers: { ...authHeader(), "Content-Type": "application/json" },
      });    
    return response.data.result
};

const _update = async (dato, endpoint) => {          
    const response = await axios
      .put(apiUrl + `${endpoint}/${dato.id}/${dato.tip}`, dato, {
        headers: { ...authHeader(), "Content-Type": "application/json" },
      });         
    return response.data.result    
};

const _upImagen = async (dato,pky, endpoint) => {     
 
  if(endpoint === 'empresa'){
    const response = await axios
    .put(apiUrl + `files/${endpoint}/item/${pky}`, dato);    
    localStorage.setItem("@empresaUnity22", JSON.stringify(response.data.result));      
    return response.data.result    
  }else{
    const response = await axios
    .put(apiUrl + `files/${endpoint}/item/${pky}`, dato);    
    return response.data.result   
  }    
};

const _create = async (dato, endpoint) => {    
  const response = await axios
    .post(apiUrl + `${endpoint}/unit`, dato, {
      headers: { ...authHeader(), "Content-Type": "application/json" },
    });    

  return response.data.result
};
const _delete = async (dato, endpoint) => {    
  const response = await axios
    .post(apiUrl + `${endpoint}/delete/item/list`, dato, {
      headers: { ...authHeader(), "Content-Type": "application/json" },
    });
  return response.data.result
};
const _item = async (pky, endpoint) => {    
  const response = await axios
    .get(apiUrl + `${endpoint}/item/${pky.id}/${pky.tipo}`, {
      headers: { ...authHeader(), "Content-Type": "application/json" },
    });    
  return response.data.result
};
const _items = async (endpoint) => {    
  const response = await axios
    .get(apiUrl + `${endpoint}/listas/items`, {
      headers: { ...authHeader(), "Content-Type": "application/json" },
    });    
  return response.data.result;
};

const _citems = async (dato,endpoint) => {    
  const response = await axios
    .get(apiUrl + `${endpoint}/listas/items/${dato.pky}`, {
      headers: { ...authHeader(), "Content-Type": "application/json" },
    });    
  return response.data.result;
};

const _data = async (dato, endpoint) => {    
  const response = await axios
    .post(apiUrl + `${endpoint}/data/list`, dato, {
      headers: { ...authHeader(), "Content-Type": "application/json" },
    });   
  return response.data.result
}; 
const _itemsList = async (dato,endpoint) => {        
  
  const response = await axios
  .post(apiUrl + `${endpoint}/listas/items`, dato, {        
    headers: { ...authHeader(), "Content-Type": "application/json" },
  });    
return response.data.result
};

const _searchItems = async (dato, endpoint) => {    
  const response = await axios
    .post(apiUrl + `${endpoint}/search/items`, dato, {
      headers: { ...authHeader(), "Content-Type": "application/json" },
    });    
  return response.data.result
};

const _aprobar = async (dato, endpoint) => {            
  const response = await axios
  .put(apiUrl + `${endpoint}/aprobar/item/${dato.item.id}`, dato, {
    headers: { ...authHeader(), "Content-Type": "application/json" },
  });               
return response.data.result    
};
const _searchStock = async (dato, endpoint) => {    
  const response = await axios
    .post(apiUrl + `${endpoint}/search/stock`, dato, {
      headers: { ...authHeader(), "Content-Type": "application/json" },
    });    
  return response.data.result
};
const _contabilidad = async (dato, endpoint) => {    
  const response = await axios
    .post(apiUrl + `contabilidad/${endpoint}`, dato, {
      headers: { ...authHeader(), "Content-Type": "application/json" },
    });    

  return response.data.result
};
const _aprobarUnit = async (dato, endpoint) => {            
  const response = await axios
  .put(apiUrl + `${endpoint}/aprobar/item/${dato.id}`, dato, {
    headers: { ...authHeader(), "Content-Type": "application/json" },
  });               
return response.data.result    
};
const _informes = async (dato, endpoint) => {    
  const response = await axios
    .post(apiUrl + `informes/${endpoint}`, dato, {
      headers: { ...authHeader(), "Content-Type": "application/json" },
    });    

  return response.data.result
};

const _searchStocks = async (dato, endpoint) => {    
  const response = await axios
    .post(apiUrl + `${endpoint}/search/stocks`, dato, {
      headers: { ...authHeader(), "Content-Type": "application/json" },
    });    
  return response.data.result
};

const _verificar = async (dato, endpoint,subs) => {    
  const response = await axios
    .post(apiUrl + `${endpoint}/${subs}/item/verifys`, dato, {
      headers: { ...authHeader(), "Content-Type": "application/json" },
    });    
  return response.data.result
};

const configService = {                
    _getItem,
    _verificar,
    _update,
    _upImagen,
    _create,
    _delete,
    _item,
    _items,
    _citems,
    _data,
    _itemsList,
    _searchItems,
    _aprobar,
    _searchStock,
    _searchStocks,
    _contabilidad,
    _aprobarUnit,
    _informes
};
    
export default configService;  