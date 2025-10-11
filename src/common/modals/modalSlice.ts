import { createSlice } from '@reduxjs/toolkit'

type State = {
  open: boolean
  type: string | null
  data: any
}

const initialState: State = {
  open: false,
  type: null,
  data: null
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: 
  },
})