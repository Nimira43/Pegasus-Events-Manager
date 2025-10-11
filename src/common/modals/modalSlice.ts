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