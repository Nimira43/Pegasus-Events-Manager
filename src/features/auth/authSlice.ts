import { createSlice } from '@reduxjs/toolkit'
import { User } from '../../app/types/user'

type State = {
  authenticated: boolean
  currentUser: User | null
}

const initialState: State = {
  authenticated: false,
  currentUser: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signedIn: (state, action) => {
      state.authenticated = true
    }
  }
})