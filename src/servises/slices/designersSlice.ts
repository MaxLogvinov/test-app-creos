import { createSlice } from '@reduxjs/toolkit';
import { fetchGetDesigners } from '../thunks/designersThunk';
import { DesignersState } from '../../types';

const initialDesignersState: DesignersState = {
  designersData: [],
  isLoadingDesignersData: false,
  errorDesignersData: false,
  errorMessageDesignersData: ''
};

const designersSlice = createSlice({
  name: 'designers',
  initialState: initialDesignersState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchGetDesigners.fulfilled, (state, action) => {
        state.designersData = action.payload;
        state.isLoadingDesignersData = false;
        state.errorDesignersData = false;
      })
      .addCase(fetchGetDesigners.pending, state => {
        state.designersData = [];
        state.isLoadingDesignersData = true;
        state.errorDesignersData = false;
      })
      .addCase(fetchGetDesigners.rejected, (state, action) => {
        state.designersData = [];
        state.isLoadingDesignersData = false;
        state.errorDesignersData = true;
        state.errorMessageDesignersData =
          action.payload || 'Произошла неизвестная ошибка. Попробуйте повторить позже';
      });
  }
});
//eslint-disable-next-line
export const {} = designersSlice.actions;
export default designersSlice.reducer;
