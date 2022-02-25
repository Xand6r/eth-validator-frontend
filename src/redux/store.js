import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import statusReducer from './slices/statusSlice';

const rootReducer = combineReducers({
  status: statusReducer
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
    immutableCheck: false
  })
});

export default store;
