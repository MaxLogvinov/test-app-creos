import { createAsyncThunk } from '@reduxjs/toolkit';
import { Designers, Result } from '../../types';

const API_URL = 'https://sandbox.creos.me/api/v1/designer/';

export const fetchGetDesigners = createAsyncThunk<Result[], void, { rejectValue: string }>(
  'designers/get',
  async (_, { rejectWithValue }) => {
    try {
      let allDesigners: Result[] = [];
      let page = 1;
      let hasMoreData = true;

      while (hasMoreData) {
        const response = await fetch(`${API_URL}?page=${page}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          }
        });

        if (response.status === 404) {
          hasMoreData = false;
          break;
        }

        if (!response.ok) {
          throw new Error(`Error code: ${response.status}`);
        }

        const data: Designers = await response.json();
        allDesigners = [...allDesigners, ...data.results];

        hasMoreData = data.results.length > 0;
        page += 1;
      }

      return allDesigners;
    } catch (error: unknown) {
      let errorMessage = 'An error occurred';

      if (error instanceof Error) {
        errorMessage = error.message;
      } else if (typeof error === 'string') {
        errorMessage = error;
      }

      return rejectWithValue(errorMessage);
    }
  }
);
