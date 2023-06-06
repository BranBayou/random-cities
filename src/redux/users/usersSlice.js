import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://random-data-api.com/api/v2/users?size=20';

export const getUsers = createAsyncThunk('users/getUsers', async (_, thunkAPI) => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue({ error: 'Error connecting to the API' });
  }
});

const initialState = {
  users: [],
  loading: false,
  error: '',
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.fulfilled, (state, action) => {
        const usersList = Array.isArray(action.payload) // Check if payload is an array
          ? action.payload.map((user) => ({
            id: user.id,
            user_name: user.first_name,
            phone: user.phone_number,
            avatar: user.avatar,
            birthday: user.date_of_birth,
            zip: user.address.zip_code,
            country: user.address.country,
            socialSecurity: user.social_security_number,
            creditCard: user.credit_card.cc_number,
          }))
          : []; // If payload is not an array, assign an empty array

        return {
          ...state,
          loading: false,
          users: usersList,
        };
      })
      .addCase(getUsers.pending, (state) => ({
        ...state,
        loading: true,
        error: '',
      }))
      .addCase(getUsers.rejected, (state, action) => ({
        ...state,
        error: action.payload.error,
        loading: false,
      }));
  },
});

export default usersSlice.reducer;
