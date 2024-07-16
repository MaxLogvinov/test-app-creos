import { createSlice } from '@reduxjs/toolkit';
import { fetchGetIssues } from '../thunks/issuesThunk';
import { IssuesState } from '../../types';

const initialIssuesState: IssuesState = {
  issuesData: [],
  isLoadingIssuesData: false,
  errorIssuesData: false,
  errorMessageIssuesData: ''
};

const issuesSlice = createSlice({
  name: 'issues',
  initialState: initialIssuesState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchGetIssues.fulfilled, (state, action) => {
        state.issuesData = action.payload;
        state.isLoadingIssuesData = false;
        state.errorIssuesData = false;
      })
      .addCase(fetchGetIssues.pending, state => {
        state.issuesData = [];
        state.isLoadingIssuesData = true;
        state.errorIssuesData = false;
      })
      .addCase(fetchGetIssues.rejected, (state, action) => {
        state.issuesData = [];
        state.isLoadingIssuesData = false;
        state.errorIssuesData = true;
        state.errorMessageIssuesData =
          action.payload || 'Произошла неизвестная ошибка. Попробуйте повторить позже';
      });
  }
});
//eslint-disable-next-line
export const {} = issuesSlice.actions;
export default issuesSlice.reducer;
