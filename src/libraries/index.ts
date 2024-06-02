import {usersApi} from '@/api/user/usersApi';
import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import loading from '@/slices/loadingSlice';
import {taskApi} from '@/api/task/taskApi';
import {categoryApi} from '@/api/category/categoryApi';

const store = configureStore({
  reducer: {
    loading,
    [usersApi.reducerPath]: usersApi.reducer,
    [taskApi.reducerPath]: taskApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().prepend([
      usersApi.middleware,
      taskApi.middleware,
      categoryApi.middleware,
    ]),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
export default store;
