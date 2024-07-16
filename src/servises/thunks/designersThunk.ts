import { createAsyncThunk } from '@reduxjs/toolkit';
import { Designers, Result } from '../../types';

export const fetchGetDesigners = createAsyncThunk<Result[], void, { rejectValue: string }>(
  'designers/get',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('https://sandbox.creos.me/api/v1/designer/?page=1', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`Код ошибки: ${response.status}`);
      }

      const data: Designers = await response.json();
      return data.results;
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
