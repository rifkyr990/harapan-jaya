import { createSlice } from "@reduxjs/toolkit";

interface IUser {
  username: string;
  email: string;
}

const initialData: IUser = {
  username: "",
  email: "",
};

// Define slice config to create function reducer and action
const userSlice = createSlice({
  name: "user",
  initialState: { ...initialData },
  reducers: {
    setSignIn: (initialState, action) => {
      console.log("CHECK ACTION REDUX FROM USER SIGNIN:", action);
      return action.payload;
    },
    setSignOut: () => {
      localStorage.removeItem('user');
      return { ...initialData };
    },
    setUpdateProfile: (initialState, action) => {
      console.log("NEW PROFILE UPDATE", action.payload);

      return { ...initialState, ...action.payload };
    },
  },
});

// Export action
export const { setSignIn, setSignOut, setUpdateProfile } = userSlice.actions;

// Export reducer
export default userSlice.reducer;
