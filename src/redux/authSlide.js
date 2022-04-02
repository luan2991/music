import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authApi from './../api/authApi';

const initialState = {
  isLoading: false,
  currentUser: '',
  errorMessage: '',
  errorMessageLogout: '',
};
export const loginUser = createAsyncThunk('auth/login', async (dataLogin, { rejectWithValue }) => {
  try {
    const { data } = await authApi.loginUser(dataLogin);

    return data;
  } catch (error) {
    console.log(error.response);
    return rejectWithValue(error.response.data.message);
  }
});

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (dataLogout, { rejectWithValue }) => {
    try {
      
      const { data } = await authApi.logoutUser(dataLogout);

      return data;
    } catch (error) {
      console.log(error.response);
      return rejectWithValue(error.response.data.message);
    }
  }
);

const authSlide = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Bắt đầu thực hiện action login (Promise pending)
    builder.addCase(loginUser.pending, (state) => {
      // Bật trạng thái loading
      state.isLoading = true;
    });

    // Khi thực hiện action login thành công (Promise fulfilled)
    builder.addCase(loginUser.fulfilled, (state, action) => {
      // Tắt trạng thái loading, lưu thông tin user vào store
      state.isLoading = false;
      state.currentUser = action.payload;
    });

    builder.addCase(loginUser.rejected, (state, action) => {
      // Tắt trạng thái loading, lưu thông báo lỗi vào store
      state.isLoading = false;
      state.errorMessage = action.payload;
    });

    builder.addCase(logoutUser.pending, (state) => {
      // Bật trạng thái loading
      state.isLoading = false;
    });

    // Khi thực hiện action logout thành công (Promise fulfilled)
    builder.addCase(logoutUser.fulfilled, (state, action) => {
      // Tắt trạng thái loading, thoát user

      state.currentUser = '';
    });
    builder.addCase(logoutUser.rejected, (state, action) => {
      // Tắt trạng thái loading, lưu thông báo lỗi vào store

      state.errorMessageLogout = action.payload;
    });
  },
});

// export const {  } = authSlide.actions;

export default authSlide.reducer;
