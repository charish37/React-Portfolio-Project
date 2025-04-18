import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    error: null,
    loading: false
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInStart: (state) => {
            state.loading = true;
        },
        signInSuccess: (state,action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        signInError: (state,action) => {
            state.loading = false;
            state.error = action.payload;
        },
        updateUserStart: (state) => {
            state.loading  = true;
        },
        updateUserSuccess: (state,action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        updateUserError: (state,action) => {
            state.error = action.payload;
            state.loading = false;
        }
    }
});

export const {signInStart, signInSuccess, signInError, updateUserError, updateUserSuccess, updateUserStart} = userSlice.actions;

export default userSlice.reducer;