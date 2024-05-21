import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import counterReducer from './counterSlice.ts'
import { useDispatch } from 'react-redux'

export type RootState = ReturnType<typeof store.getState>
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>
export type AppDispatch = typeof store.dispatch

const store = configureStore({
  reducer: {
    counter: counterReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat()
})

export const useAppDispatch = () => useDispatch<AppDispatch>()
export default store