import { createSlice } from "@reduxjs/toolkit";
import { ordered as cakeOrdered } from "../cake/cakeSlice";
// const { cakeActions } = require("../cake/cakeSlice");
// const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
	numOfIcecreams: 20,
};

const icecreamSlice = createSlice({
	name: "icecream",
	initialState,
	reducers: {
		ordered: (state) => {
			state.numOfIcecreams--;
		},
		restocked: (state, action) => {
			state.numOfIcecreams += action.payload;
		},
	},
	// first way
	// wala ung action sa (state, action) dahil wala namang payload nag decrement lang
	// extraReducers: {
	// 	["cake/ordered"]: (state) => {
	// 		state.numOfIcecreams--;
	// 	},
	// },

	// 2nd way
	extraReducers: (builder) => {
		builder.addCase(cakeOrdered, (state) => {
			state.numOfIcecreams--;
		});
	},
});

export default icecreamSlice.reducer;
export const { ordered, restocked } = icecreamSlice.actions;
