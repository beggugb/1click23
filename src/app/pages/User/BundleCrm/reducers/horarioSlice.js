import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import {toastr} from 'react-redux-toastr'
import _crudService  from "@services/crud.service"


export const horarioData = createAsyncThunk(
  "horario/data",
  async(dato,thunkAPI)=>{
      try{                    
        const data = await _crudService._data(dato,'horarios');                                                  
    
          return { response: data }
      }catch(error){                  
          return thunkAPI.rejectWithValue();           
      }   
  }
)



export const horarioUpdate = createAsyncThunk(
  "horario/update",
  async(dato,thunkAPI)=>{
      try{      
          const data = await _crudService._update(dato,'horarios');  
          toastr.success('horario', 'Actualizada')                                       
          return { response: data }
      }catch(error){                  
          return thunkAPI.rejectWithValue();           
      }   
  }
)



const initialState = { 
  loading:false,
  datas:[]  
};  


const horarioSlice = createSlice({
  name: "horario",
  initialState,  
  reducers:{
    resetItem:(state)=>{
      state.item ={}
    },
    setHorario:(state,action)=>{
      state.items = action.payload
    },
    resetData:(state)=>{
      state.datas    = []  
    },    
  },
  extraReducers(builder) { 
    builder
     
      .addCase(horarioData.pending,(state) =>{
        state.loading = true            
      })
      .addCase(horarioData.fulfilled,(state,action)=>{
          state.loading = false
          state.datas  = action.payload.response
      })
      .addCase(horarioData.rejected,(state)=>{
        state.loading = false
      
      }) 
  
  
      /** update */
      .addCase(horarioUpdate.pending,(state) =>{
        state.loading = true            
        state.item    = {}
      })
      .addCase(horarioUpdate.fulfilled,(state,action)=>{
        state.loading = false
        state.datas  = action.payload.response
      })
      .addCase(horarioUpdate.rejected,(state)=>{
        state.loading = false
        state.item    = {}
      })
    
    
  }    
});
export const { resetItem, resetData, setHorario } = horarioSlice.actions
const { reducer } = horarioSlice;
export default reducer;  
