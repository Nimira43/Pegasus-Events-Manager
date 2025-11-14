import { User } from '../../app/types/user'

type State = {
  authenticated: boolean
  currentUser: User | null
}

const initialState: State = {
  authenticated: false,
  currentUser: null
}