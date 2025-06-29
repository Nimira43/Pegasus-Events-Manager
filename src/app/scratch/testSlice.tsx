import { createSlice } from '@reduxjs/toolkit'

type State = {
  data: number
}

const initialState: State = {
  data: 81
}


export const testSlice = createSlice({
  name: 'test',
  initialState
})