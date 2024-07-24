import { createSlice } from '@reduxjs/toolkit';
import { fetchGetComments } from '../thunks/commentsThunk';
import { CommentsState } from '../../types';

const initialCommentsState: CommentsState = {
  commentsData: [],
  isLoadingCommentsData: false,
  errorCommentsData: false,
  errorMessageCommentsData: ''
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState: initialCommentsState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchGetComments.fulfilled, (state, action) => {
        state.commentsData = action.payload;
        state.isLoadingCommentsData = false;
        state.errorCommentsData = false;
      })
      .addCase(fetchGetComments.pending, state => {
        state.commentsData = [];
        state.isLoadingCommentsData = true;
        state.errorCommentsData = false;
      })
      .addCase(fetchGetComments.rejected, (state, action) => {
        state.commentsData = [];
        state.isLoadingCommentsData = false;
        state.errorCommentsData = true;
        state.errorMessageCommentsData =
          action.payload || 'Произошла неизвестная ошибка. Попробуйте повторить позже';
      });
  }
});
//eslint-disable-next-line
export const {} = commentsSlice.actions;
export default commentsSlice.reducer;
