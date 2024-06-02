import {usersApi} from '@/api/user/usersApi';
import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import loading from '@/slices/loadingSlice';
import {taskApi} from '@/api/task/taskApi';

const store = configureStore({
  reducer: {
    loading,
    [usersApi.reducerPath]: usersApi.reducer,
    [taskApi.reducerPath]: taskApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().prepend([usersApi.middleware, taskApi.middleware]),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
export default store;
