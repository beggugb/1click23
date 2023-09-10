import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import {toastr} from 'react-redux-toastr'
import _crudService  from "@services/crud.service"


export const image = createAsyncThunk(   
  "imagen/varios",
  async(dato,thunkAPI)=>{    
      try{                   
          
        const data = await _crudService._upImagen(dato.item,dato.pky,dato.payload);       
        toastr.success('Imagen', 'Actualizada')            
        return { response: data }        
      }catch(error){                  
          return thunkAPI.rejectWithValue();           
      }   
  }
)


const initialState = { 
  loading:false
};  


const imagenSlice = createSlice({
  name: "imagen",
  initialState,    
  extraReducers(builder) { 
    builder
      .addCase(image.pending,(state) =>{
          state.loading = true            
      })
      .addCase(image.fulfilled,(state)=>{
          state.loading = false                  
      })
      .addCase(image.rejected,(state)=>{
        state.loading = false        
      })
     

      
  }    
});

const { reducer } = imagenSlice;
export default reducer;  
