import { configureStore } from "@reduxjs/toolkit";
// const { getDefaultMiddleware } = require("@reduxjs/toolkit");
// const reduxLogger = require("redux-logger");
// const cakeReducer = require("../features/cake/cakeSlice");
import cakeReducer from "../features/cake/cakeSlice";
import icecreamReducer from "../features/icecream/icecreamSlice";
import userReducer from "../features/user/userSlice";
// const logger = reduxLogger.createLogger();

const store = configureStore({
	//argument
	//key reducer
	reducer: {
		cake: cakeReducer,
		icecream: icecreamReducer,
		user: userReducer,
	},
	// middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
	//slice name for the first part and 2nd is reducer func
});

export default store;
