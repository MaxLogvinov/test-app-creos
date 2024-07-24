import { combineReducers, configureStore } from '@reduxjs/toolkit';
import designersSlice from './slices/designersSlice';
import issuesSlice from './slices/issuesSlice';
import themeSlice from './slices/themeSlice';
import commentsSlice from './slices/commentsSlice';

const rootReducer = combineReducers({
  designers: designersSlice,
  issues: issuesSlice,
  theme: themeSlice,
  comments: commentsSlice
});

export const store = configureStore({
  reducer: rootReducer
});

// Тип для корневого состояния
export type RootState = ReturnType<typeof store.getState>;

// Тип для диспетчера
export type AppDispatch = typeof store.dispatch;
