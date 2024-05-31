import {RootState} from '@/libraries';
import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

interface ILoadingState {
  visibleLoading: boolean;
}

const initialState: ILoadingState = {
  visibleLoading: false,
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setVisibleLoading(state, action: PayloadAction<boolean>) {
      state.visibleLoading = action.payload;
    },
  },
});

export const {setVisibleLoading} = loadingSlice.actions;
export const selectLoading = (state: RootState) => state.loading;

export default loadingSlice.reducer;
