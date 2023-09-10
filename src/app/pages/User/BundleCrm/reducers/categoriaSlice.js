import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import {toastr} from 'react-redux-toastr'
import _crudService  from "@services/crud.service"

export const categoriasItems = createAsyncThunk(
    "categoria/items",
    async(thunkAPI)=>{
        try{                    
          const data = await _crudService._items('categorias');                                                  
            return { response: data }
        }catch(error){                  
            return thunkAPI.rejectWithValue();           
        }   
    }
)

export const categoriasData = createAsyncThunk(
  "categoria/data",
  async(dato,thunkAPI)=>{
      try{                    
        const data = await _crudService._data(dato,'categorias');                                                  
          return { response: data }
      }catch(error){                  
          return thunkAPI.rejectWithValue();           
      }   
  }
)

export const categoriasItem = createAsyncThunk(
  "categoria/item",
  async(pky,thunkAPI)=>{    
      try{      
          const item = await _crudService._item(pky,'categorias');                                       
          return { response: item }
      }catch(error){                  
          return thunkAPI.rejectWithValue();           
      }   
  }
)

export const categoriasUpdate = createAsyncThunk(
  "categoria/update",
  async(dato,thunkAPI)=>{
      try{      
          const data = await _crudService._update(dato,'categorias');  
          toastr.success('Categoria', 'Actualizada')                                       
          return { response: data }
      }catch(error){                  
          return thunkAPI.rejectWithValue();           
      }   
  }
)

export const categoriasCreate = createAsyncThunk(
  "categoria/create",
  async(dato,thunkAPI)=>{
      try{      
          const data = await _crudService._create(dato,'categorias');                                      
          toastr.success('Producto', 'Dato creado') 
          return { response: data }
      }catch(error){                
          toastr.error('Producto', 'Código existente')           
          return thunkAPI.rejectWithValue();           
      }   
  }
)

export const categoriasDelete = createAsyncThunk(
  "categoria/delete",
  async(dato,thunkAPI)=>{
      try{      
          const data = await _crudService._delete(dato,'categorias');    
          toastr.warning('Categoria', 'categoria eliminado')                                  
          return { response: data }
      }catch(error){            
        let rr = error.response.data.message        
        toastr.error('Categoria', rr.message) 
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


const categoriaSlice = createSlice({
  name: "categoria",
  initialState,  
  reducers:{
    setCategorias:(state,action)=>{      
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
    .addCase(categoriasData.pending,(state) =>{
      state.loading = true            
    })
    .addCase(categoriasData.fulfilled,(state,action)=>{
        state.loading = false
        state.data  = action.payload.response.data    
        state.total = action.payload.response.total          
        state.pagina = action.payload.response.pagina          
        state.paginas = action.payload.response.paginas          
    })
    .addCase(categoriasData.rejected,(state)=>{
      state.loading = false
    
    }) 
    .addCase(categoriasItem.pending,(state) =>{
      state.loading = true            
      state.item    = {}
    })
    .addCase(categoriasItem.fulfilled,(state,action)=>{
        state.loading = false
        state.item    = action.payload.response              
    })
    .addCase(categoriasItem.rejected,(state)=>{
      state.loading = false
      state.item    = {}
    })
    .addCase(categoriasCreate.pending,(state) =>{
      state.loading = true            
      state.item    = {}
    })
    .addCase(categoriasCreate.fulfilled,(state,action)=>{
        state.loading = false
        state.data  = action.payload.response.data    
        state.total = action.payload.response.total          
        state.pagina = action.payload.response.pagina          
        state.paginas = action.payload.response.paginas            
    })
    .addCase(categoriasCreate.rejected,(state)=>{
      state.loading = false
      state.item    = {}
    })
    /** update */
    .addCase(categoriasUpdate.pending,(state) =>{
      state.loading = true            
      state.item    = {}
    })
    .addCase(categoriasUpdate.fulfilled,(state,action)=>{
      state.loading = false
      state.data  = action.payload.response.data    
      state.total = action.payload.response.total          
      state.pagina = action.payload.response.pagina          
      state.paginas = action.payload.response.paginas              
    })
    .addCase(categoriasUpdate.rejected,(state)=>{
      state.loading = false
      state.item    = {}
    })

    .addCase(categoriasDelete.pending,(state) =>{
      state.loading = true            
    })
    .addCase(categoriasDelete.fulfilled,(state,action)=>{
        state.loading = false
        state.data  = action.payload.response.data    
        state.total = action.payload.response.total          
        state.pagina = action.payload.response.pagina          
        state.paginas = action.payload.response.paginas          
    })
    .addCase(categoriasDelete.rejected,(state)=>{
      state.loading = false        
    }) 


    .addCase(categoriasItems.pending,(state) =>{
          state.loading = true            
      })
      .addCase(categoriasItems.fulfilled,(state,action)=>{
          state.loading = false
          state.c_items   = action.payload.response
      })
      .addCase(categoriasItems.rejected,(state)=>{
        state.loading = false
       
    })
  }    
});
export const { resetItem, resetData, setCategorias } = categoriaSlice.actions
const { reducer } = categoriaSlice;
export default reducer;  
