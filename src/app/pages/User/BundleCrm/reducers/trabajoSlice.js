import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import {toastr} from 'react-redux-toastr'
import _crudService  from "@services/crud.service"

export const trabajoItems = createAsyncThunk(
    "trabajo/items",
    async(thunkAPI)=>{
        try{                    
          const data = await _crudService._items('trabajos');                                                    
          
          return { response: data }
        }catch(error){                  
            return thunkAPI.rejectWithValue();           
        }   
    }
)

export const trabajoData = createAsyncThunk(
  "trabajo/data",
  async(dato,thunkAPI)=>{
      try{                    
        const data = await _crudService._data(dato,'trabajos');          
                                          
          return { response: data }
      }catch(error){                  
          return thunkAPI.rejectWithValue();           
      }   
  }
)

export const trabajoItem = createAsyncThunk(
  "trabajo/item",
  async(pky,thunkAPI)=>{    
      try{      
          const item = await _crudService._item(pky,'trabajos');                
          return { response: item }
      }catch(error){                  
          return thunkAPI.rejectWithValue();           
      }   
  }
)

export const trabajoUpdate = createAsyncThunk(
  "trabajo/update",
  async(dato,thunkAPI)=>{
      try{      
          const data = await _crudService._update(dato,'trabajos');  
          toastr.success('trabajo', 'Actualizada')                                       
          return { response: data }
      }catch(error){                  
          return thunkAPI.rejectWithValue();           
      }   
  }
)

export const trabajoCreate = createAsyncThunk(
  "trabajo/create",
  async(dato,thunkAPI)=>{
      try{      
          const data = await _crudService._create(dato,'trabajos');                                      
          toastr.success('trabajo', 'Dato creado') 
          return { response: data }
      }catch(error){                
          toastr.error('trabajo', 'Código existente')           
          return thunkAPI.rejectWithValue();           
      }   
  }
)

export const trabajoDelete = createAsyncThunk(
  "trabajo/delete",
  async(dato,thunkAPI)=>{
      try{      
          const data = await _crudService._delete(dato,'trabajos');    
          toastr.warning('trabajo', 'trabajo eliminado')                                  
          return { response: data }
      }catch(error){            
        let rr = error.response.data.message        
        toastr.error('trabajo', rr.message) 
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


const trabajoSlice = createSlice({
  name: "trabajo",
  initialState,  
  reducers:{
    resetItem:(state)=>{
      state.item ={}
    },
    settrabajo:(state,action)=>{
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
      .addCase(trabajoItems.pending,(state) =>{
          state.loading = true            
      })
      .addCase(trabajoItems.fulfilled,(state,action)=>{
          state.loading = false
          state.items   = action.payload.response
      })
      .addCase(trabajoItems.rejected,(state)=>{
        state.loading = false
       
      })   
      .addCase(trabajoData.pending,(state) =>{
        state.loading = true            
      })
      .addCase(trabajoData.fulfilled,(state,action)=>{
          state.loading = false
          state.data  = action.payload.response.data    
          state.total = action.payload.response.total          
          state.pagina = action.payload.response.pagina          
          state.paginas = action.payload.response.paginas          
      })
      .addCase(trabajoData.rejected,(state)=>{
        state.loading = false
      
      }) 
      .addCase(trabajoItem.pending,(state) =>{
        state.loading = true            
        state.item    = {}
      })
      .addCase(trabajoItem.fulfilled,(state,action)=>{
          state.loading = false
          state.item    = action.payload.response              
      })
      .addCase(trabajoItem.rejected,(state)=>{
        state.loading = false
        state.item    = {}
      })
      .addCase(trabajoCreate.pending,(state) =>{
        state.loading = true            
        state.item    = {}
      })
      .addCase(trabajoCreate.fulfilled,(state,action)=>{
          state.loading = false
          state.data  = action.payload.response.data    
          state.total = action.payload.response.total          
          state.pagina = action.payload.response.pagina          
          state.paginas = action.payload.response.paginas            
      })
      .addCase(trabajoCreate.rejected,(state)=>{
        state.loading = false
        state.item    = {}
      })
      /** update */
      .addCase(trabajoUpdate.pending,(state) =>{
        state.loading = true            
        state.item    = {}
      })
      .addCase(trabajoUpdate.fulfilled,(state,action)=>{
        state.loading = false
        state.data  = action.payload.response.data    
        state.total = action.payload.response.total          
        state.pagina = action.payload.response.pagina          
        state.paginas = action.payload.response.paginas              
      })
      .addCase(trabajoUpdate.rejected,(state)=>{
        state.loading = false
        state.item    = {}
      })
    
      .addCase(trabajoDelete.pending,(state) =>{
        state.loading = true            
      })
      .addCase(trabajoDelete.fulfilled,(state,action)=>{
          state.loading = false
          state.data  = action.payload.response.data    
          state.total = action.payload.response.total          
          state.pagina = action.payload.response.pagina          
          state.paginas = action.payload.response.paginas          
      })
      .addCase(trabajoDelete.rejected,(state)=>{
        state.loading = false        
      }) 
  }    
});
export const { resetItem, resetData, settrabajo } = trabajoSlice.actions
const { reducer } = trabajoSlice;
export default reducer;  
