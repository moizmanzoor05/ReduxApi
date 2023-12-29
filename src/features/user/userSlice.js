import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: "Moiz Manzoor"
}

const userSlice = createSlice({name: "user", initialState, reducers:{}})

export default userSlice.reducer