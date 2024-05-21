import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk } from './store.ts'

export type CounterState = {
  count: number
}

const initialState: CounterState = {
  count: 0
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementSuccess: (state, action: PayloadAction<number>) => {
      state.count += action.payload
    },
    decrementSuccess: (state, action: PayloadAction<number>) => {
      state.count -= action.payload
    },
    resetSuccess: (state) => {
      state.count = initialState.count
    }
  }
})

export const incrementAsync = (): AppThunk => async (dispatch) => {
  setTimeout(() => {
    dispatch(incrementSuccess(1))
  }, 1000)
}

export const decrementAsync = (): AppThunk => async (dispatch) => {
  setTimeout(() => {
    dispatch(decrementSuccess(1))
  }, 1000)
}

export const resetAsync = (): AppThunk => async (dispatch) => {
  setTimeout(() => {
    dispatch(resetSuccess())
  }, 1000)
}

export const { incrementSuccess, decrementSuccess, resetSuccess } = counterSlice.actions
export default counterSlice.reducer