import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "../services/userApi";
 

// Get user from localStorage if available
let userFromStorage = null;

try {
  const storedUser = localStorage.getItem("user");

  if (storedUser && storedUser !== "undefined") {
    userFromStorage = JSON.parse(storedUser);
  } else {
    localStorage.removeItem("user"); // clean up corrupted data
  }
} catch (err) {
  console.warn("Invalid user data in localStorage", err);
  localStorage.removeItem("user");
}

const tokenFromStorage = localStorage.getItem("token") || null;

// REGISTER thunk
export const register = createAsyncThunk("auth/register", async (formData, { rejectWithValue }) => {
  try {
    const data = await registerUser(formData); // should return { user, token }
    if(data?.user){
        localStorage.setItem("user", JSON.stringify(data.data));
    }
 
    console.log("User registered successfully:", data);
    return data;
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || "Registration failed");
  }
});

// LOGIN thunk
export const login = createAsyncThunk("auth/login", async (formData, { rejectWithValue }) => {
  try {
    const data = await loginUser(formData); // should return { user, token }
   console.log("Login successful, token:", data.token);
    if(data.token){
        console.log("Token received:", data.token);
        localStorage.setItem("token", data.token);

}
    return data.token;
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || "Login failed");
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: userFromStorage,
    token: tokenFromStorage,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
