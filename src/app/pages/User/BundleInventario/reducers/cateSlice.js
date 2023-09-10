import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import {toastr} from 'react-redux-toastr'
import _crudService  from "@services/crud.service"

export const catesItems = createAsyncThunk(
    "cate/items",
    async(dato,thunkAPI)=>{
        try{                    
          const data = await _crudService._citems(dato,'cates');                                                  
            return { response: data }
        }catch(error){                  
            return thunkAPI.rejectWithValue();           
        }   
    }
)

export const catesData = createAsyncThunk(
  "cate/data",
  async(dato,thunkAPI)=>{
      try{                    
        const data = await _crudService._data(dato,'cates');                                                  
          return { response: data }
      }catch(error){                  
          return thunkAPI.rejectWithValue();           
      }   
  }
)

export const catesItem = createAsyncThunk(
  "cate/item",
  async(pky,thunkAPI)=>{    
      try{      
          const item = await _crudService._item(pky,'cates');                                       
          return { response: item }
      }catch(error){                  
          return thunkAPI.rejectWithValue();           
      }   
  }
)

export const catesUpdate = createAsyncThunk(
  "cate/update",
  async(dato,thunkAPI)=>{
      try{      
          const data = await _crudService._update(dato,'cates');  
          toastr.success('Cate', 'Actualizada')                                       
          return { response: data }
      }catch(error){                  
          return thunkAPI.rejectWithValue();           
      }   
  }
)

export const catesCreate = createAsyncThunk(
  "cate/create",
  async(dato,thunkAPI)=>{
      try{      
          const data = await _crudService._create(dato,'cates');                                      
          toastr.success('Producto', 'Dato creado') 
          return { response: data }
      }catch(error){                
          toastr.error('Producto', 'Código existente')           
          return thunkAPI.rejectWithValue();           
      }   
  }
)

export const catesDelete = createAsyncThunk(
  "cate/delete",
  async(dato,thunkAPI)=>{
      try{      
          const data = await _crudService._delete(dato,'cates');    
          toastr.warning('Cate', 'cate eliminado')                                  
          return { response: data }
      }catch(error){            
        let rr = error.response.data.message        
        toastr.error('Cate', rr.message) 
        return thunkAPI.rejectWithValue();           
      }   
  }
)

const initialState = { 
  loading:false,
  data:[],
  c_items:[],
  total:0,
  pagina:0,
  paginas:0,
  item:{}
};  


const cateSlice = createSlice({
  name: "cate",
  initialState,  
  reducers:{
    setCates:(state,action)=>{      
      state.c_items = action.payload
    },
    resetItem:(state)=>{
      state.item ={}
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
    .addCase(catesData.pending,(state) =>{
      state.loading = true            
    })
    .addCase(catesData.fulfilled,(state,action)=>{
        state.loading = false
        state.data  = action.payload.response.data    
        state.total = action.payload.response.total          
        state.pagina = action.payload.response.pagina          
        state.paginas = action.payload.response.paginas          
    })
    .addCase(catesData.rejected,(state)=>{
      state.loading = false
    
    }) 
    .addCase(catesItem.pending,(state) =>{
      state.loading = true            
      state.item    = {}
    })
    .addCase(catesItem.fulfilled,(state,action)=>{
        state.loading = false
        state.item    = action.payload.response              
    })
    .addCase(catesItem.rejected,(state)=>{
      state.loading = false
      state.item    = {}
    })
    .addCase(catesCreate.pending,(state) =>{
      state.loading = true            
      state.item    = {}
    })
    .addCase(catesCreate.fulfilled,(state,action)=>{
        state.loading = false
        state.data  = action.payload.response.data    
        state.total = action.payload.response.total          
        state.pagina = action.payload.response.pagina          
        state.paginas = action.payload.response.paginas            
    })
    .addCase(catesCreate.rejected,(state)=>{
      state.loading = false
      state.item    = {}
    })
    /** update */
    .addCase(catesUpdate.pending,(state) =>{
      state.loading = true            
      state.item    = {}
    })
    .addCase(catesUpdate.fulfilled,(state,action)=>{
      state.loading = false
      state.data  = action.payload.response.data    
      state.total = action.payload.response.total          
      state.pagina = action.payload.response.pagina          
      state.paginas = action.payload.response.paginas              
    })
    .addCase(catesUpdate.rejected,(state)=>{
      state.loading = false
      state.item    = {}
    })

    .addCase(catesDelete.pending,(state) =>{
      state.loading = true            
    })
    .addCase(catesDelete.fulfilled,(state,action)=>{
        state.loading = false
        state.data  = action.payload.response.data    
        state.total = action.payload.response.total          
        state.pagina = action.payload.response.pagina          
        state.paginas = action.payload.response.paginas          
    })
    .addCase(catesDelete.rejected,(state)=>{
      state.loading = false        
    }) 


    .addCase(catesItems.pending,(state) =>{
          state.loading = true            
      })
      .addCase(catesItems.fulfilled,(state,action)=>{
          state.loading = false
          state.c_items   = action.payload.response
      })
      .addCase(catesItems.rejected,(state)=>{
        state.loading = false
       
    })
  }    
});
export const { resetItem, resetData, setCates } = cateSlice.actions
const { reducer } = cateSlice;
export default reducer;  
