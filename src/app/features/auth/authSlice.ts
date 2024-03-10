import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice, nanoid } from "@reduxjs/toolkit";

interface userType {
  fullName: string;
  email: string;
  password: string;
  username: string;
  userId: string;
  userImage?: string;
  userRole: "admin" | "user";
}
interface auth {
  user: userType;
  status: "idle" | "success" | "error" | "loading";
  error: string | undefined;
}

const initialState = {} as auth;

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn: {
      reducer: (state, action: PayloadAction<userType>) => {
        state.user = action.payload;
      },
      prepare: (values: {
        username: string;
        password: string;
      }): { payload: userType } => {
        return {
          payload: {
            userId: nanoid(),
            fullName: "Some S N",
            email: "some@some.com",
            password: values.password,
            username: values.username,
            userImage: "image",
            userRole: "admin", // or "user"
          },
        };
      },
    },
    signUp: {
      reducer: (state, action: PayloadAction<userType>) => {
        state.user = action.payload;
      },
      prepare: (values: {
        password: string;
        email: string;
        fullName: string;
      }): { payload: userType } => {
        return {
          payload: {
            userId: nanoid(),
            fullName: values.fullName,
            email: values.email,
            password: values.password,
            username: values.email.split("@")[0],
            userImage: "image",
            userRole: "admin", // or "user"
          },
        };
      },
    },

    logoutUser: (state) => {
      state.user = {} as userType;
    },
  },
});

export const { signIn, signUp, logoutUser } = authSlice.actions;

export default authSlice.reducer;
