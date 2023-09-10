import { configureStore} from '@reduxjs/toolkit'
import { reducer as toastrReducer} from 'react-redux-toastr'
import authReducer      from '@reducers/auth/authSlice'
import imagenReducer    from '@reducers/crm/imagenSlice' 
import usuarioReducer   from '@reducers/auth/usuarioSlice'
import clienteReducer   from '@reducers/crm/clienteSlice'
import categoriaReducer from '@reducers/crm/categoriaSlice'
import sucursalReducer  from '@reducers/crm/sucursalSlice'
import trabajoReducer   from '@reducers/crm/trabajoSlice'
import horarioReducer   from '@reducers/crm/horarioSlice'
import productoReducer  from '@reducers/inventario/productoSlice'
import cateReducer      from '@reducers/inventario/cateSlice'


const reducer ={  
    auth        : authReducer,    
    toastr      : toastrReducer,    
    imagen      : imagenReducer,    
    usuario     : usuarioReducer,
    cliente     : clienteReducer,    
    categoria   : categoriaReducer,    
    sucursal    : sucursalReducer,
    horario     : horarioReducer,
    producto    : productoReducer,
    cate        : cateReducer,
    trabajo     : trabajoReducer
}

export const store = configureStore({
    reducer: reducer,
    devTools: true,
})