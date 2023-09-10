import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import {toastr} from 'react-redux-toastr'
import _crudService  from "@services/crud.service"


export const clientesItem = createAsyncThunk(
  "clientes/item",
  async(pky,thunkAPI)=>{    
      try{      
          const item = await _crudService._item(pky,'clientes');   
                       
          return { response: item }
      }catch(error){                  
          return thunkAPI.rejectWithValue();           
      }   
  }
)

export const clientesVerificar = createAsyncThunk(
  "clientes/verificar",
  async(pky,thunkAPI)=>{    
      try{      
          const item = await _crudService._verificar(pky,'clientes','cliente');                                      
          return { response: item }
      }catch(error){                  
          return thunkAPI.rejectWithValue();           
      }   
  }
)


export const clientesData = createAsyncThunk(
    "clientes/data",
    async(dato,thunkAPI)=>{
        try{                    
          const data = await _crudService._data(dato,'clientes');                                                  
            return { response: data }
        }catch(error){                  
            return thunkAPI.rejectWithValue();           
        }   
    }
)


export const clientesItems = createAsyncThunk(
    "clientes/items",
    async(dato,thunkAPI)=>{
        try{                    
          const data = await _crudService._itemsList(dato,'clientes');   
        
          return { response: data }
        }catch(error){                  
            return thunkAPI.rejectWithValue();           
        }   
    }
  )
  export const clientesCreate = createAsyncThunk(
    "clientes/create",
    async(dato,thunkAPI)=>{
        try{      
            const data = await _crudService._create(dato,'clientes');                                      
            toastr.success('Cliente', 'Dato creado') 
            return { response: data }
        }catch(error){            
            toastr.error('Cliente', "error de registro")       
            return thunkAPI.rejectWithValue();           
        }   
    }
  )
  
  export const clientesUpdate = createAsyncThunk(
    "clientes/update",
    async(dato,thunkAPI)=>{
        try{      
            const data = await _crudService._update(dato,'clientes');  
            toastr.success('Cliente', 'Actualizado')         
                                  
            return { response: data }
        }catch(error){                  
            return thunkAPI.rejectWithValue();           
        }   
    }
  )
  
  
  
  
  export const clientesDelete = createAsyncThunk(
    "clientes/delete",
    async(dato,thunkAPI)=>{
        try{      
            const data = await _crudService._delete(dato,'clientes');    
            toastr.warning('Cliente', 'cliente eliminado')                                  
            return { response: data }
        }catch(error){            
          let rr = error.response.data.message        
          toastr.error('Cliente', rr.message) 
          return thunkAPI.rejectWithValue();           
        }   
    }
  )

  const initialState = { 
    loading:false,
    resp:"",
    item:{},        
    data:[],
    total:0,
    pagina:0,
    paginas:0,
    existente:false,
    /*items:[],    
    item:{},
    estados:[],
    pTotal:0,
    pSaldo:0,
    pPago:0*/
  };  
  const clienteSlice = createSlice({
    name: "cliente",
    initialState,  
    reducers:{
      resetCliente:(state)=>{
        state.item ={}
        state.estados=[]
        state.pTotal = 0
        state.pSaldo = 0
        state.pPago  = 0
      },
      resetClientes:(state)=>{
        state.data    = []  
        state.items   = []  
        state.total   = 0
        state.pagina  = 0
        state.paginas = 0   
      },    
    },
    extraReducers(builder) { 
        builder
        .addCase(clientesItem.pending,(state) =>{
          state.loading = true            
          state.item    = {}
        
        })
        .addCase(clientesItem.fulfilled,(state,action)=>{
            state.loading    = false
            state.item       = action.payload.response
        })
        .addCase(clientesItem.rejected,(state)=>{
          state.loading = false            
        })
        .addCase(clientesUpdate.pending,(state) =>{
          state.loading = true            
          state.item    = {}
        })
        .addCase(clientesUpdate.fulfilled,(state,action)=>{
            state.loading = false
            state.item    = action.payload.response              
        })
        .addCase(clientesUpdate.rejected,(state)=>{
          state.loading = false
          state.item    = {}
        })
        
        .addCase(clientesData.pending,(state) =>{
              state.loading = true            
          })
          .addCase(clientesData.fulfilled,(state,action)=>{
              state.loading = false
              state.data  = action.payload.response.data    
              state.total = action.payload.response.total          
              state.pagina = action.payload.response.pagina          
              state.paginas = action.payload.response.paginas          
          })
          .addCase(clientesData.rejected,(state)=>{
            state.loading = false
           
          })   

          .addCase(clientesVerificar.pending,(state) =>{
            state.loading      = true            
            state.existente    = {}
          })
          .addCase(clientesVerificar.fulfilled,(state,action)=>{
              state.loading    = false
              state.existente  = action.payload.response
          })
          .addCase(clientesVerificar.rejected,(state)=>{
            state.loading = false            
          })
        /*    
          .addCase(clientesItems.pending,(state) =>{
            state.loading = true            
          })
          .addCase(clientesItems.fulfilled,(state,action)=>{
            state.loading = false
            state.items  = action.payload.response                      
          })
          .addCase(clientesItems.rejected,(state)=>{
            state.loading = false     
          })
    
          .addCase(clientesItem.pending,(state) =>{
            state.loading = true            
            state.item    = {}
          })
          .addCase(clientesItem.fulfilled,(state,action)=>{
              state.loading = false
              state.item    = action.payload.response.row
              state.estados = action.payload.response.rows.data 
              state.pTotal  = action.payload.response.rows.pTotal
              state.pSaldo  = action.payload.response.rows.pSaldo
              state.pPago   = action.payload.response.rows.pPago   
          })
          .addCase(clientesItem.rejected,(state)=>{
            state.loading = false            
          })
          */
          .addCase(clientesCreate.pending,(state) =>{
            state.loading = true            
            state.item    = {}
            state.resp    = ""
          })
          .addCase(clientesCreate.fulfilled,(state,action)=>{
              state.loading = false
              state.item    = action.payload.response              
              state.resp    = "success"
          })
          .addCase(clientesCreate.rejected,(state)=>{
            state.loading = false      
            state.resp    = "error"      
          })
          
         
        /*
          .addCase(clientesDelete.pending,(state) =>{
            state.loading = true            
          })
          .addCase(clientesDelete.fulfilled,(state,action)=>{
              state.loading = true
              state.data  = action.payload.response.data    
              state.total = action.payload.response.total          
              state.pagina = action.payload.response.pagina          
              state.paginas = action.payload.response.paginas          
          })
          .addCase(clientesDelete.rejected,(state)=>{
            state.loading = false        
          }) */
    
         
      }    
    });
    export const { resetCliente, resetClientes} = clienteSlice.actions
    const { reducer } = clienteSlice;
    export default reducer;  
    


