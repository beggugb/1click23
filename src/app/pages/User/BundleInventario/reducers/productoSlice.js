import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import {toastr} from 'react-redux-toastr'
import _crudService  from "@services/crud.service"

export const productosData = createAsyncThunk(
    "producto/data",
    async(dato,thunkAPI)=>{
        try{                    
          const data = await _crudService._data(dato,'productos');                                                  
            return { response: data }
        }catch(error){                  
            return thunkAPI.rejectWithValue();           
        }   
    }
)
export const productosCreate = createAsyncThunk(
  "producto/create",
  async(dato,thunkAPI)=>{
      try{      
          const data = await _crudService._create(dato,'productos');                                      
          toastr.success('Producto', 'Dato creado')           
          return { response: data }
      }catch(error){                
          toastr.error('Producto', 'Código existente')           
          return thunkAPI.rejectWithValue();           
      }   
  }
)

export const productosUpdate = createAsyncThunk(
  "producto/update",
  async(dato,thunkAPI)=>{
      try{      
          const data = await _crudService._update(dato,'productos');  
          toastr.success('Cliente', 'Actualizado')                                     
          return { response: data }
      }catch(error){                  
          return thunkAPI.rejectWithValue();           
      }   
  }
)

export const productosItem = createAsyncThunk(
  "producto/item",
  async(pky,thunkAPI)=>{    
      try{      
          const item = await _crudService._item(pky,'productos');                                              
          return { response: item }
      }catch(error){                  
          return thunkAPI.rejectWithValue();           
      }   
  }
)


export const productosDelete = createAsyncThunk(
  "producto/delete",
  async(dato,thunkAPI)=>{
      try{      
          const data = await _crudService._delete(dato,'productos');    
          toastr.warning('Cliente', 'cliente eliminado')                                  
          return { response: data }
      }catch(error){            
        let rr = error.response.data.message        
        toastr.error('Cliente', rr.message) 
        return thunkAPI.rejectWithValue();           
      }   
  }
)

export const productosItems = createAsyncThunk(
  "producto/searchitems",
  async(dato,thunkAPI)=>{
      try{      
          const data = await _crudService._searchItems(dato,'stock');  
                                            
          return { response: data }
      }catch(error){                  
          return thunkAPI.rejectWithValue();           
      }   
  }
)




export const productosStock = createAsyncThunk(
  "producto/searchstock",
  async(dato,thunkAPI)=>{
      try{      
          const data = await _crudService._searchStock(dato,'stock');                                                
          return { response: data }
      }catch(error){                  
          return thunkAPI.rejectWithValue();           
      }   
  }
)

export const productosStocks = createAsyncThunk(
  "producto/searchstocks",
  async(dato,thunkAPI)=>{
      try{      
          const data = await _crudService._searchStocks(dato,'stock');                                                
          return { response: data }
      }catch(error){                  
          return thunkAPI.rejectWithValue();           
      }   
  }
)






const initialState = { 
  loading:false,
  data:[],
  items:[],
  total:0,
  pagina:0,
  paginas:0,
  item:{},
  smodulo:""
};  


const productosSlice = createSlice({
  name: "producto",
  initialState,  
  reducers:{
    resetItem:(state)=>{
      state.item ={}
    },
    setProductos:(state,action)=>{      
      state.items = action.payload
    },
    setModulo:(state,action)=>{      
      state.smodulo = action.payload
    },
    setLista:(state,action)=>{
      state.items =action.payload
    },
    resetData:(state)=>{
      state.data    = []  
      state.total   = 0
      state.pagina  = 0
      state.paginas = 0   
    },    
  },
  extraReducers(builder) { 
    builder
      .addCase(productosData.pending,(state) =>{
          state.loading = true            
      })
      .addCase(productosData.fulfilled,(state,action)=>{
          state.loading = false
          state.data  = action.payload.response.data    
          state.total = action.payload.response.total          
          state.pagina = action.payload.response.pagina          
          state.paginas = action.payload.response.paginas          
      })
      .addCase(productosData.rejected,(state)=>{
        state.loading = false
       
      })   

      .addCase(productosItem.pending,(state) =>{
        state.loading = true            
        state.item    = {}
      })
      .addCase(productosItem.fulfilled,(state,action)=>{
          state.loading = false
          state.item    = action.payload.response              
      })
      .addCase(productosItem.rejected,(state)=>{
        state.loading = false
        state.item    = {}
      })
      /** create */
      .addCase(productosCreate.pending,(state) =>{
        state.loading = true            
        state.item    = {}
      })
      .addCase(productosCreate.fulfilled,(state,action)=>{
          state.loading = false
          state.item    = action.payload.response              
      })
      .addCase(productosCreate.rejected,(state)=>{
        state.loading = false
        state.item    = {}
      })
      /** update */
      .addCase(productosUpdate.pending,(state) =>{
        state.loading = true            
        state.item    = {}
      })
      .addCase(productosUpdate.fulfilled,(state,action)=>{
          state.loading = false
          state.item    = action.payload.response              
      })
      .addCase(productosUpdate.rejected,(state)=>{
        state.loading = false
        state.item    = {}
      })

      .addCase(productosDelete.pending,(state) =>{
        state.loading = true            
      })
      .addCase(productosDelete.fulfilled,(state,action)=>{
          state.loading = false
          state.data  = action.payload.response.data    
          state.total = action.payload.response.total          
          state.pagina = action.payload.response.pagina          
          state.paginas = action.payload.response.paginas          
      })
      .addCase(productosDelete.rejected,(state)=>{
        state.loading = false        
      }) 

     

      .addCase(productosItems.pending,(state) =>{
        state.loading = true            
      })
      .addCase(productosItems.fulfilled,(state,action)=>{
          state.loading = false
          state.items  = action.payload.response                      
      })
      .addCase(productosItems.rejected,(state)=>{
        state.loading = false
      
      })

      .addCase(productosStock.pending,(state) =>{
        state.loading = true            
      })
      .addCase(productosStock.fulfilled,(state,action)=>{
          state.loading = false
          state.items  = action.payload.response                      
      })
      .addCase(productosStock.rejected,(state)=>{
        state.loading = false
      
      })

      .addCase(productosStocks.pending,(state) =>{
        state.loading = true            
      })
      .addCase(productosStocks.fulfilled,(state,action)=>{
          state.loading = false
          state.items  = action.payload.response                      
      })
      .addCase(productosStocks.rejected,(state)=>{
        state.loading = false
      
      })
      
    
  }    
});
export const { resetItem, resetData, setLista, setProductos, setModulo } = productosSlice.actions
const { reducer } = productosSlice;
export default reducer;  
