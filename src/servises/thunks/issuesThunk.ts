import { createAsyncThunk } from '@reduxjs/toolkit';
import { Issue } from '../../types';

export const fetchGetIssues = createAsyncThunk<Issue[], void, { rejectValue: string }>(
  'issues/get',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('https://sandbox.creos.me/api/v1/issue/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`Код ошибки: ${response.status}`);
      }

      const data: Issue[] = await response.json();
      return data;
    } catch (error: unknown) {
      let errorMessage = 'Произошла ошибка';

      if (error instanceof Error) {
        errorMessage = error.message;
      } else if (typeof error === 'string') {
        errorMessage = error;
      }

      return rejectWithValue(errorMessage);
    }
  }
);
