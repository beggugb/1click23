
export const _columndSucursal = [
    { id:0,field: 'Id', rts:'text',width:'1/12',est:'visible' },
    { id:1,field: 'Nombre',rts:'text', width:'4/12',est:'visible' },          
    { id:2,field: 'Ciudad',rts:'texto', width:'2/12',est:'visible' },            
    { id:3,field: 'Dirección', rts:'text',width:'5/12',est:'visible'},        
];

export const _columndTrabajos = [
    { id:0,field: 'Id', rts:'text',width:'1/12',est:'visible' },
    { id:1,field: 'Titulo',rts:'text', width:'4/12',est:'visible' },          
    { id:2,field: 'Vencimiento',rts:'fecha', width:'2/12',est:'visible' },            
    { id:3,field: 'Tipo', rts:'texto',width:'1/12',est:'visible'},        
    { id:4,field: 'Tiempo', rts:'texto',width:'2/12',est:'visible'},        
    { id:5,field: 'Ciudad', rts:'texto',width:'2/12',est:'visible'}            
];

export const _columndUsuarios = [
    { id:0,field: 'Id', rts:'text',width:'1/12',est:'visible' },
    { id:1,field: 'Nombres', rts:'text',width:'4/12',est:'visible' },
    { id:2,field: 'Username', rts:'texto',width:'2/12',est:'visible' },      
    { id:3,field: 'Rol', rts:'texto',width:'1/12',est:'visible' },
    { id:4,field: 'Sucursal', rts:'text',width:'3/12',est:'visible' }
];

export const _columndClientes = [
    { id:0,field: 'Id', rts:'text',width:'1/12',est:'visible' },            
    { id:1,field: 'Nombres', rts:'text',width:'4/12',est:'visible' },       
    { id:2,field: 'Dirección', rts:'text',width:'4/12',est:'hidden' },
    { id:3,field: 'Tipo', rts:'texto',width:'1/12',est:'visible' },         
    { id:4,field: 'Nit', rts:'texto',width:'2/12',est:'visible' },          
    { id:5,field: 'Teléfono', rts:'tel',width:'1/12',est:'hidden' },
    { id:6,field: 'Celular', rts:'cel',width:'1/12',est:'hidden' },    
    { id:7,field: 'País', rts:'texto',width:'2/12',est:'visible' },         
    { id:8,field: 'Ciudad', rts:'texto',width:'2/12',est:'visible' },       
    { id:9,field: 'Email', rts:'mail',width:'1/12',est:'hidden' },
    { id:10,field: 'Filename', rts:'text',width:'1/12',est:'hidden' }
];

export const _columndTickets = [
    { id:0,field: '', rts:'text',width:'1/12',est:'visible' },
    { id:1,field: 'Fecha', rts:'fecha',width:'1/12',est:'visible' },
    { id:2,field: 'Tipo', rts:'texto',width:'1/12',est:'visible' },
    { id:3,field: 'Estado', rts:'est',width:'1/12',est:'visible' },
    { id:4,field: 'Detalle', rts:'text',width:'5/12',est:'visible' },    
    { id:5,field: 'Cliente', rts:'text',width:'2/12',est:'visible' },
    { id:6,field: 'Usuario', rts:'text',width:'1/12',est:'hidden' },
    { id:7,field: 'clienteId', rts:'text',width:'1/12',est:'hidden' },
    { id:8,field: 'CI', rts:'text',width:'1/12',est:'visible' }
];

export const _infEstado = [
    { id:0,field: '', rts:'text',width:'1/12',est:'hidden' },
    { id:1,field: 'Proveedor', rts:'text',width:'3/12',est:'hidden' },
    { id:2,field: 'Fecha', rts:'fecha',width:'2/12',est:'visible' },
    { id:3,field: 'Descripción', rts:'text',width:'4/12',est:'visible' },
    { id:4,field: '$ Total', rts:'mnd',width:'2/12',est:'visible' },
    { id:5,field: '$ Pago', rts:'mnd',width:'2/12',est:'visible' },
    { id:6,field: '$ Saldo', rts:'mnds',width:'2/12',est:'visible' }
];

export const _infItems = [
    { id:0,field: '', rts:'texto',width:'1/12',est:'hidden'},
    { id:1,field: 'Nombre', rts:'text',width:'6/12',est:'visible'},        
    { id:2,field: '$ Valor', rts:'mnd',width:'2/12',est:'visible'},   
    { id:3,field: 'Cantidad', rts:'texto',width:'2/12',est:'visible'},     
    { id:4,field: 'Código', rts:'mnd',width:'2/12',est:'hidden'},
    { id:5,field: 'Unidad', rts:'mnd',width:'2/12',est:'hidden'},
    { id:6,field: 'Categoría', rts:'mnds',width:'2/12',est:'hidden'},
    { id:7,field: 'Marca', rts:'mnds',width:'2/12',est:'hidden'},
    { id:8,field: 'VentaId', rts:'mnds',width:'2/12',est:'hidden'},
    { id:9,field: 'ProductoId', rts:'mnds',width:'2/12',est:'hidden'},
    { id:10,field: 'Sub-Total', rts:'mnd',width:'2/12',est:'visible'},
    
];

export const _infPlan = [
    { id:0,field: '', rts:'texto',width:'1/12',est:'hidden'},
    { id:1,field: 'Cuota', rts:'texto',width:'1/12',est:'visible'},            
    { id:3,field: 'Monto', rts:'mnd',width:'2/12',est:'visible'},     
    { id:4,field: 'Estado', rts:'est',width:'2/12',est:'visible'},
    { id:5,field: 'F.Pago', rts:'fecha',width:'2/12',est:'visible'},    
    { id:6,field: 'F.Pagado', rts:'fecha',width:'2/12',est:'visible'}
];


export const _columndCajas = [
    { id:0,field: '', rts:'txt',width:'1/12',est:'visible' },
    { id:1,field: 'Fecha',rts:'fecha', width:'2/12',est:'visible' },  
    { id:2,field: 'Detalle',rts:'txt', width:'2/12',est:'visible' },      
    { id:3,field: 'Estado',rts:'est', width:'1/12',est:'visible' },
    { id:4,field: 'Inicial',rts:'moneda', width:'1/12',est:'hidden' },
    { id:5,field: 'Ingresos',rts:'moneda', width:'2/12',est:'visible' },
    { id:5,field: 'Egresos',rts:'moneda', width:'2/12',est:'visible' },
    { id:5,field: 'Total',rts:'moneda', width:'2/12',est:'visible' }    
];

export const _columndComprobantes = [
    { id:0,field: '', rts:'txt',width:'1/12',est:'visible' },
    { id:1,field: 'Número', rts:'texto',width:'1/12',est:'visible' },
    { id:2,field: 'Tipo', rts:'icon',width:'1/12',est:'visible' },
    { id:3,field: 'Estado', rts:'est',width:'1/12',est:'visible' },
    { id:4,field: 'Fecha', rts:'fecha',width:'1/12',est:'visible' },
    { id:5,field: 'Glosa', rts:'text',width:'4/12',est:'visible' },        
    { id:6,field: 'Total', rts:'mnd',width:'1/12',est:'visible' },
    { id:7,field: 'Gestión', rts:'num',width:'1/12',est:'visible' }
];
export const _columndPagos = [
    { id:0,field: '', rts:'txt',width:'1/12',est:'visible' },
    { id:1,field: 'NºCompra', rts:'num',width:'1/12',est:'visible' },
    { id:2,field: 'Proveedor', rts:'txt',width:'3/12',est:'visible' },
    { id:3,field: 'Tipo', rts:'txt',width:'1/12',est:'visible' },    
    { id:3,field: 'Cuota', rts:'num',width:'1/12',est:'visible' },    
    { id:4,field: 'Monto', rts:'moneda',width:'1/12',est:'visible' },
    { id:5,field: 'Estado', rts:'bool',width:'1/12',est:'visible' },
    { id:6,field: 'Fecha', rts:'fecha',width:'2/12',est:'visible' },    
    { id:7,field: 'NºNota', rts:'num',width:'1/12',est:'visible' }    
];
export const _columndCobros = [
    { id:0,field: 'Id', rts:'num',width:'1/12',est:'visible' },
    { id:1,field: 'NºVenta', rts:'num',width:'1/12',est:'visible' },
    { id:2,field: 'Cliente', rts:'txt',width:'3/12',est:'visible' },
    { id:3,field: 'Tipo', rts:'txt',width:'1/12',est:'visible' },    
    { id:3,field: 'Cuota', rts:'num',width:'1/12',est:'visible' },    
    { id:4,field: 'Monto', rts:'moneda',width:'1/12',est:'visible' },
    { id:5,field: 'Estado', rts:'bool',width:'1/12',est:'visible' },
    { id:6,field: 'Fecha', rts:'fecha',width:'2/12',est:'visible' },    
    { id:7,field: 'NºNota', rts:'num',width:'1/12',est:'visible' }    
];

export const _columndPlantillas = [
    { id:0,field: '', rts:'txt',width:'1/12',est:'visible' },
    { id:1,field: 'Nombres', rts:'text',width:'5/12',est:'visible' },
    { id:2,field: 'Obs', rts:'text',width:'3/12',est:'hidden' },
    { id:2,field: 'Crédito', rts:'boolean',width:'1/12',est:'visible' },
    { id:3,field: 'TDebe', rts:'num',width:'4/12',est:'hidden' },
    { id:3,field: 'THaber', rts:'num',width:'4/12',est:'hidden' },
    { id:4,field: 'Fecha creación', rts:'fecha',width:'3/12',est:'visible' },        
];



export const _columndVenta = [
    { id:0,field: '', rts:'txt',width:'1/12',est:'visible' },
    { id:1,field: 'Fecha',rts:'fecha', width:'1/12',est:'visible' },  
    { id:2,field: 'Detalle',rts:'text', width:'5/12',est:'visible' },      
    { id:3,field: 'Estado',rts:'est', width:'1/12',est:'visible' },
    { id:4,field: 'Total',rts:'mnd', width:'1/12',est:'visible' },
    { id:5,field: 'Cliente',rts:'text', width:'2/12',est:'visible'},        
    { id:6,field: 'Tipo',rts:'text', width:'1/12',est:'hidden' },
    { id:7,field: 'PagoTotal',rts:'positivo', width:'2/12',est:'hidden' },
    { id:8,field: 'SaldoTotal',rts:'mnds', width:'1/12',est:'visible' }
];

export const _columndCompra = [
    { id:0,field: 'Id', rts:'txt',width:'1/12',est:'visible' },
    { id:1,field: 'Fecha',rts:'fecha', width:'1/12',est:'visible' },  
    { id:2,field: 'Detalle',rts:'text', width:'5/12',est:'visible' },      
    { id:3,field: 'Estado',rts:'est', width:'1/12',est:'visible' },    
    { id:4,field: 'Total',rts:'mnd', width:'1/12',est:'visible' },
    { id:5,field: 'Proveedor',rts:'text', width:'2/12',est:'visible' },    
    { id:6,field: 'Tipo',rts:'text', width:'1/12',est:'hidden' },
    { id:7,field: 'PagoTotal',rts:'mnds', width:'2/12',est:'hidden' },
    { id:8,field: 'SaldoTotal',rts:'mnds', width:'1/12',est:'visible' }
];
export const _columndProveedor = [
    { id:0,field: 'Id', rts:'txt',width:'1/12',est:'visible' },
    { id:1,field: 'Código', rts:'texto',width:'1/12',est:'visible' },
    { id:2,field: 'Razon Social', rts:'text',width:'5/12',est:'visible' },
    { id:3,field: 'Nit', rts:'texto',width:'2/12',est:'visible' },    
    { id:4,field: 'T.Proveedor', rts:'texto',width:'2/12',est:'visible' },
    { id:5,field: 'T.Fiscal', rts:'texto',width:'1/12',est:'visible' },
    { id:6,field: 'Dirección', rts:'text',width:'3/12',est:'hidden' },

];
export const _columndProductos = [
    { id:0,field: 'Id',rts:'text', width:'1/12',est:'visible' },
    { id:1,field: 'Código', rts:'texto',width:'1/12',est:'visible' },
    { id:2,field: 'Nombre', rts:'text',width:'4/12',est:'visible' },    
    { id:3,field: 'Precio', rts:'mnd',width:'2/12',est:'visible' },
    { id:4,field: 'Categoría', rts:'texto',width:'2/12',est:'visible' },            
    { id:6,field: 'Filename', rts:'text',width:'1/12',est:'hidden' },
    { id:7,field: 'Stock', rts:'mnd',width:'2/12',est:'visible' }

];

export const _columndTicket  = [
    { id:0,field: '', rts:'txt',width:'1/12',est:'visible' },
    { id:1,field: 'Acción', rts:'txt',width:'6/12',est:'visible' },
    { id:2,field: 'Fecha', rts:'fecha',width:'2/12',est:'visible' },
    { id:3,field: 'Observación', rts:'txt',width:'1/12',est:'hidden' },    
    { id:4,field: 'Usuario', rts:'txt',width:'3/12',est:'visible' }
];

export const _modelCliente =[
    {"label":'nombres',"value":'nombres'},
    {"label":'nit',"value":'nit'},
    {"label":'direccion',"value":'direccion'}
  ]

  export const _modelTicket =[
    {"label":'detalle',"value":'detalle'},
    {"label":'nit',"value":'nit'},
    {"label":'ci',"value":'ci'}
]  

export const _modelCompra =[
    {"label":'proveedor',"value":'proveedor'},    
    {"label":'observaciones',"value":'observaciones'}
]

export const _modelVenta =[
    {"label":'cliente',"value":'cliente'},    
    {"label":'detalle',"value":'detalle'}
]

export const _modelProveedor =[
    {"label":'nombre',"value":'nombre'},
    {"label":'nit',"value":'nit'},
    {"label":'dirección',"value":'direccion'}
]
export const _modelTipoComprobante =[
    {"label":'ingreso',"value":'ingreso'},
    {"label":'egreso',"value":'egreso'},
    {"label":'diario',"value":'diario'}        
]

export const _modelProducto =[
    {"label":'nombre',"value":'nombre'},
    {"label":'codigo',"value":'codigo'}
]

