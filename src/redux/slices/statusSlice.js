/**
 * This file helps us maintain the global state of the slice
 */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  verificationSuccess: null
};

export const contractSlice = createSlice({
  name: 'status',
  initialState,
  reducers: {
    setVerificationStatus: (state, action) => {
      state.verificationSuccess = action.payload;
    }
  }
});

export const { setVerificationStatus } = contractSlice.actions;

export default contractSlice.reducer;
