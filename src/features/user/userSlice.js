import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = { 
    loading:false,
    user:null,
    error:''
}

// this generates Pending,fulfilled and rejected

export const fetchUsers = createAsyncThunk(['user/fetchUsers'],() => { 
  return axios
             .get('https://jsonplaceholder.typicode.com/users')
             .then(res => res.data)
})

const userSlice = createSlice({ 
    name:'user',
    initialState,
    extraReducers: builder => { 
       builder.addCase(fetchUsers.pending, state => { 
        state.loading = true;
        state.user = null;
        state.error = ''
       });
      builder.addCase(fetchUsers.fulfilled, (state,action) => { 
        state.loading = false;
        state.user = action.payload;
        state.error = ''
      })
      builder.addCase(fetchUsers.rejected, (state,action) => { 
        state.loading = false;
        state.user = null;
        state.error = action.error.message
      })
    }
})


export default userSlice.reducer;
