import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import createFilter from "redux-persist-transform-filter";

import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";

const saveSubsetFilter = createFilter("user", ["currentUser"]);

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
  transforms: [saveSubsetFilter],
};

const rootReducer = combineReducers({
  user: userReducer,
});

export default persistReducer(persistConfig, rootReducer);
