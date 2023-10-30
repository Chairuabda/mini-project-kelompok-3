/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-useless-catch */
/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	user: {
		id: null,
		username: "",
		email: "",
		fullname: "",
		coin: null,
	},
	isLogin: false,
};

export const AuthReducer = createSlice({
	name: "AuthReducer",
	initialState,
	reducers: {
		setUser: (state, action) => {
			const { id, email, username, password, fullname, coin } =
				action.payload;

			state.user = {
				id,
				email,
				username,
				password,
				fullname,
				coin,
			};
			
		},
		loginSuccess: (state, action) => {
			state.isLogin = true;
		},
		logoutSuccess: (state, action) => {
			state.isLogin = false;
			localStorage.removeItem("token");
		},
		keepLoginSuccess: (state) => {
			state.isLogin = true;
		},
	},
});


export const login = (email, password) => {
	return async (dispatch) => {
		try {
			const res = await axios.post(
				"http://localhost:8080/auth/login",
				{
					email,
					password,
				}
			)
			localStorage.setItem("token", res?.data?.data?.token);
			dispatch(setUser(res?.data?.data?.user));
			dispatch(loginSuccess());
		} catch (err) {
			// alert(err?.response?.data);
      throw err
		}
	};
};

export const keepLogin = () => {
	return async (dispatch) => {
		try {
			const token = localStorage.getItem("token");

			if (token) {
				const res = await axios.get(
					"http://localhost:8080/auth/keep-login",
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
				);

				dispatch(setUser(res?.data?.data));
				dispatch(keepLoginSuccess());
			}
		} catch (err) {
			localStorage.removeItem("token");
			alert(err?.response?.data);
		}
	};
};

export const {
	loginSuccess,
	logoutSuccess,
	setUser,
	keepLoginSuccess,
} = AuthReducer.actions;

export default AuthReducer.reducer;
