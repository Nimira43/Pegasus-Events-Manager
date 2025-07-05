import { Button } from 'semantic-ui-react'
import { useAppSelector } from '../store/store'

export default function Scratch() {
  const {data} = useAppSelector(state => state.test)
  

  return (
    <div>
      <h1>Redux Testing Page</h1>
      <h3>Data: {data}</h3>
      <Button onClick={()} />
    </div>
  )
}