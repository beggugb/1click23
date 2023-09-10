import { MapPinIcon, ChartBarIcon, UsersIcon, TicketIcon , WrenchScrewdriverIcon } from "@heroicons/react/24/outline";



export const modulos = [
    {
        key:1,
        path:"/user",
        name: "Inicio",        
        layout: "/admin", 
        rolId:"cliente"
    },              
    {
        key:2,
        path:"/user/perfil",
        name: "Perfil",        
        layout: "/admin",         
        rolId:"cliente"         
    },
    {
        key:3,
        path:"/user/sucursales",
        name: "Sucursales",        
        layout: "/admin",         
        rolId:"cliente"         
    },
    {
        key:4,
        path:"/user/trabajos",
        name: "Trabajos",        
        layout: "/admin",         
        rolId:"cliente"         
    },   
    {
        key:5,
        path:"/inventario",
        name: "Inventario",        
        layout: "/admin",         
        rolId:"cliente"         
    },   
    
   
    {
        key:8,
        path:"/adm",
        name: "Inicio",        
        layout: "/admin",         
        rolId:"admin"         
    }, 
    {
        key:9,
        path:"/adm/clientes",
        name: "Clientes",        
        layout: "/admin",         
        rolId:"admin"         
    },
    {
        key:10,
        path:"/adm/categorias",
        name: "Categorias",        
        layout: "/admin",         
        rolId:"admin"         
    },
  
   
]

export const submodulos = [       
    {
        key:1,
        path:"/",
        name: "Sucursales",  
        layout: "/admin/user/sucursales",              
        moduloId: 3,
        icon:<WrenchScrewdriverIcon className="h-5 w-5 text-gray-600" />          
    },  
    {
        key:2,
        path:"/",
        name: "Mapas",  
        layout: "/admin/user/mapas",              
        moduloId: 3,
        icon:<MapPinIcon className="h-5 w-5 text-gray-600" />          
    },    
    {
        key:3,
        path:"/",
        name: "Perfil",  
        layout: "/admin/crm",              
        moduloId: 2,
        icon:<UsersIcon className="h-5 w-5 text-gray-600" />          
    },    
    {
        key:4,
        path:"/",
        name: "Productos",  
        layout: "/admin/inventario/productos",              
        moduloId: 5,
        icon:<TicketIcon className="h-5 w-5 text-gray-600" />          
    },
    {
        key:5,
        path:"/",
        name: "Categorías",  
        layout: "/admin/inventario/categorias",              
        moduloId: 5,
        icon:<TicketIcon className="h-5 w-5 text-gray-600" />          
    },       
    {
        key:8,
        path:"/",
        name: "Ventas",  
        layout: "/admin/movimientos/ventas",              
        moduloId: 6,
        icon:<WrenchScrewdriverIcon className="h-5 w-5 text-gray-600" />          
    },
    {
        key:11,
        path:"/",
        name: "Clientes",  
        layout: "/admin/adm/clientes",              
        moduloId: 9,
        icon:<ChartBarIcon className="h-5 w-5 text-gray-600" />         
    },    
    
]

export const getSubModulos = (moduloId) =>{
    return submodulos.filter(item => 
        item.moduloId === moduloId
)}


export const getModulos = (rolId) =>{
    return modulos.filter(item => 
        item.rolId === rolId
)}