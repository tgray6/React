import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../api/authenticate";

interface State {
  user: undefined | IUser;
  permissions: undefined | string[];
  loading: boolean;
}

const initialState: State = {
  user: undefined,
  permissions: undefined,
  loading: false,
};

export const userSlice = createSlice({
  name: "userSlice_ThisValueIsNotSuperImportant",
  initialState,
  reducers: {
    authenticateAction: (state) => {
      state.loading = true;
    },
    authenticatedAction: (state, action: PayloadAction<IUser | undefined>) => {
      state.user = action.payload;
      state.loading = false;
    },
    authorizeAction: (state) => {
      state.loading = true;
    },
    authorizedAction: (state, action: PayloadAction<string[]>) => {
      state.permissions = action.payload;
      state.loading = false;
    },
  },
});
