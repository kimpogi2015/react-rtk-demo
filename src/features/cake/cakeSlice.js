// const createSlice = require("@reduxjs/toolkit").createSlice;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	numOfCakes: 10,
};

const cakeSlice = createSlice({
	//argument
	name: "cake",
	// initialState: initialState,
	// pag same lang pwede isa nalang like this
	initialState,
	reducers: {
		// ito ung mga actions
		//function
		ordered: (state) => {
			state.numOfCakes--;
			//decrement -1 lang lagi to
		},
		restocked: (state, action) => {
			state.numOfCakes += action.payload;
			//store.dispatch(cakeActions.restocked(3)); kung ano ang ilagay () kunwari (3) i add nya sa += ay iadd sa current value
		},
	},
});

export default cakeSlice.reducer;
export const { ordered, restocked } = cakeSlice.actions;
