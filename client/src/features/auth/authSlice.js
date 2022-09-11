import { createSlice } from "@reduxjs/toolkit";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const token = cookies.get("token");

const authSlice = createSlice({
  name: "auth",
  initialState: { token: token ? token : null },
  reducers: {
    setCredentials: (state, action) => {
      const { access_token } = action.payload;
      state.token = access_token;
    },
    logOut: (state) => {
      state.token = null;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentToken = (state) => state.auth.token;
