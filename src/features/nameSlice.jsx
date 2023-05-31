import { createSlice } from '@reduxjs/toolkit';

export const TOKEN_STORAGE_KEY = 'jwtToken';

export const selectFirstName = (state) => state.name.firstName;
export const selectLastName = (state) => state.name.lastName;

const nameSlice = createSlice({
  name: 'name',
  initialState: {
    firstName: '',
    lastName: ''
  },
  reducers: {
    updateName: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    }
  }
});

export const { updateName } = nameSlice.actions;
export default nameSlice;