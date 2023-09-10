import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import {toastr} from 'react-redux-toastr'
import _crudService  from "@services/crud.service"

export const sucursalItems = createAsyncThunk(
    "sucursal/items",
    async(thunkAPI)=>{
        try{                    
          const data = await _crudService._items('sucursales');                                                    
          return { response: data }
        }catch(error){                  
            return thunkAPI.rejectWithValue();           
        }   
    }
)

export const sucursalData = createAsyncThunk(
  "sucursal/data",
  async(dato,thunkAPI)=>{
      try{                    
        const data = await _crudService._data(dato,'sucursales');                                                  
          return { response: data }
      }catch(error){                  
          return thunkAPI.rejectWithValue();           
      }   
  }
)

export const sucursalItem = createAsyncThunk(
  "sucursal/item",
  async(pky,thunkAPI)=>{    
      try{      
          const item = await _crudService._item(pky,'sucursales');                
          return { response: item }
      }catch(error){                  
          return thunkAPI.rejectWithValue();           
      }   
  }
)

export const sucursalUpdate = createAsyncThunk(
  "sucursal/update",
  async(dato,thunkAPI)=>{
      try{      
          const data = await _crudService._update(dato,'sucursales');  
          toastr.success('sucursal', 'Actualizada')                                       
          return { response: data }
      }catch(error){                  
          return thunkAPI.rejectWithValue();           
      }   
  }
)

export const sucursalCreate = createAsyncThunk(
  "sucursal/create",
  async(dato,thunkAPI)=>{
      try{      
          const data = await _crudService._create(dato,'sucursales');                                      
          toastr.success('sucursal', 'Dato creado') 
          return { response: data }
      }catch(error){                
          toastr.error('sucursal', 'Código existente')           
          return thunkAPI.rejectWithValue();           
      }   
  }
)

export const sucursalDelete = createAsyncThunk(
  "sucursal/delete",
  async(dato,thunkAPI)=>{
      try{      
          const data = await _crudService._delete(dato,'sucursales');    
          toastr.warning('sucursal', 'sucursal eliminado')                                  
          return { response: data }
      }catch(error){            
        let rr = error.response.data.message        
        toastr.error('sucursal', rr.message) 
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
  item:{}
};  


const sucursalSlice = createSlice({
  name: "sucursal",
  initialState,  
  reducers:{
    resetItem:(state)=>{
      state.item ={}
    },
    setSucursal:(state,action)=>{
      state.items = action.payload
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
      .addCase(sucursalItems.pending,(state) =>{
          state.loading = true            
      })
      .addCase(sucursalItems.fulfilled,(state,action)=>{
          state.loading = false
          state.items   = action.payload.response
      })
      .addCase(sucursalItems.rejected,(state)=>{
        state.loading = false
       
      })   
      .addCase(sucursalData.pending,(state) =>{
        state.loading = true            
      })
      .addCase(sucursalData.fulfilled,(state,action)=>{
          state.loading = false
          state.data  = action.payload.response.data    
          state.total = action.payload.response.total          
          state.pagina = action.payload.response.pagina          
          state.paginas = action.payload.response.paginas          
      })
      .addCase(sucursalData.rejected,(state)=>{
        state.loading = false
      
      }) 
      .addCase(sucursalItem.pending,(state) =>{
        state.loading = true            
        state.item    = {}
      })
      .addCase(sucursalItem.fulfilled,(state,action)=>{
          state.loading = false
          state.item    = action.payload.response              
      })
      .addCase(sucursalItem.rejected,(state)=>{
        state.loading = false
        state.item    = {}
      })
      .addCase(sucursalCreate.pending,(state) =>{
        state.loading = true            
        state.item    = {}
      })
      .addCase(sucursalCreate.fulfilled,(state,action)=>{
          state.loading = false
          state.data  = action.payload.response.data    
          state.total = action.payload.response.total          
          state.pagina = action.payload.response.pagina          
          state.paginas = action.payload.response.paginas            
      })
      .addCase(sucursalCreate.rejected,(state)=>{
        state.loading = false
        state.item    = {}
      })
      /** update */
      .addCase(sucursalUpdate.pending,(state) =>{
        state.loading = true            
        state.item    = {}
      })
      .addCase(sucursalUpdate.fulfilled,(state,action)=>{
        state.loading = false
        state.data  = action.payload.response.data    
        state.total = action.payload.response.total          
        state.pagina = action.payload.response.pagina          
        state.paginas = action.payload.response.paginas              
      })
      .addCase(sucursalUpdate.rejected,(state)=>{
        state.loading = false
        state.item    = {}
      })
    
      .addCase(sucursalDelete.pending,(state) =>{
        state.loading = true            
      })
      .addCase(sucursalDelete.fulfilled,(state,action)=>{
          state.loading = false
          state.data  = action.payload.response.data    
          state.total = action.payload.response.total          
          state.pagina = action.payload.response.pagina          
          state.paginas = action.payload.response.paginas          
      })
      .addCase(sucursalDelete.rejected,(state)=>{
        state.loading = false        
      }) 
  }    
});
export const { resetItem, resetData, setSucursal } = sucursalSlice.actions
const { reducer } = sucursalSlice;
export default reducer;  
