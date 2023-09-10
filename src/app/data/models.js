export const _itemUsuario =[
    {label:"nombres",type:"string"},
    {label:"apellidos",type:"string"},
    {label:"direccion",type:"string"},
    {label:"username",type:"short"},
    {label:"pass1",type:"short"},
    {label:"pass2",type:"short"}
]
export const _itemConfig =[
    {label:"nombre",type:"string"},
    {label:"nit",type:"short"},
    {label:"email",type:"email"}    
]
export const _itemCliente =[
    {label:"nombres",type:"string"},    
    {label:"apellidos",type:"string"},
    {label:"direccion",type:"string"},
    {label:"telefono",type:"number"},
    {label:"nit",type:"short"},
    {label:"email",type:"email"}
]
export const _itemProveedor =[
    {label:"razonSocial",type:"string"},
    {label:"nit",type:"short"},
    {label:"email",type:"email"}
]
export const _itemComprobante =[
    {label:"total",type:"number"},
    {label:"nCheque",type:"string"}
]

export const _itemProducto =[
    {label:"nombre",type:"string"},
    {label:"codigo",type:"codigo"},
    {label:"precioVenta",type:"number"},
    {label:"tientrega",type:"number"},
    {label:"tientregaret",type:"number"},
    {label:"consumopro",type:"number"}
]
export const _validateConfig = (type,dato) =>{        
    let res = false
    switch(type){
        case 'email':
        res = temail(dato)
        break;
        case 'string':
        res = tstring(dato)
        break;
        case 'short':
        res = tshort(dato)
        break;
        case 'number':
        res = tnumber(dato)
        break;
        case 'codigo':
        res = tcodigo(dato)
        break;
        default:
        break;
    }
    return res    
}

const temail = (dato) =>{    
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (dato.match(validRegex)) {          
      return "";  
    } else {          
      return "* formato invalido email";  
    }
}
const tstring = (dato) =>{        
    if (dato.length < 2){
        return "El campo debe ser mayor a 2  carácteres";    
    }else if(dato.length > 40){
        return "El campo debe ser menor de 40 carácteres";    
    }else{
        return "";    
    }
}    
const tshort = (dato) =>{        

    if (dato.length < 2){
        return "El campo debe ser mayor a 2  carácteres";    
    }else if(dato.length > 15){
        return "El campo debe ser menor de 15 carácteres";    
    }else{
        return "";    
    }
}  
const tnumber = (dato) =>{        
    var validRegex = /^\s*[+-]?(\d+|\d*\.\d+|\d+\.\d*)([Ee][+-]?\d+)?\s*$/;
    if (dato.match(validRegex)) {                  
        if(dato.length < 10){
            return ""; 
        }else{
            return "Máximo 10 dígitos";    
        }
      } else {          
        return "* formato númerico invalido";  
    }
}  

const tcodigo = (dato) =>{        
    var validRegex = /^\s*[+-]?(\d+|\d*\.\d+|\d+\.\d*)([Ee][+-]?\d+)?\s*$/;
    if (dato.match(validRegex)) {                          
        return "";         
      } else {          
        return "* formato númerico invalido";  
    }
} 

export const _producto = {
    nombre          :"",
    nombreCorto     :"",
    clasificacion   :"",
    codigo          :"",
    colores         :[],
    consumopro      :0,
    descripcion     :"",
    estado          :"",
    filename        :"default.jpg",
    inCatalogo      :false,
    inOferta        :false, 
    lote            :"",
    medida          :"",
    minseguridad    :0,
    nivel           :"",
    pDescuento      :0,
    precioCosto     :0,
    precioOferta    :0,
    precioVenta     :0,
    puntoreorden    :0,
    stockmaximo     :0,
    stockminimo     :0,
    stockseguridad  :0,
    subcategoria    :"",
    tientrega       :0,
    tientregaret    :0,
    tipo            :"",
    vencimiento     :"",
    categoriaId     :1,
    modeloId        :1,
    volumenId       :1,
    origenId        :1,
    unidadId        :1,
    marcaId         :1,
    tipoId          :1,
    industriaId     :1
}