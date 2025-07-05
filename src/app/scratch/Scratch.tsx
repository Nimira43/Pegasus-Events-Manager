import { Button } from 'semantic-ui-react'
import { useAppDispatch, useAppSelector } from '../store/store'

export default function Scratch() {
  const {data} = useAppSelector(state => state.test)
  const dispatch = useAppDispatch()

  return (
    <div>
      <h1>Redux Testing Page</h1>
      <h3>Data: {data}</h3>
      <Button onClick={()} />
    </div>
  )
}