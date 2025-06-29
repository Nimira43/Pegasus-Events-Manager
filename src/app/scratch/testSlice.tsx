import { createSlice } from '@reduxjs/toolkit'

type State = {
  data: number
}

export const testSlice = createSlice({
  name: 'test',
  initialState
})