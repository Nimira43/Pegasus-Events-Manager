import { MenuItem, Button } from 'semantic-ui-react'
import { useAppDispatch } from '../../store/store'

export default function SignedOutButtons() {
  const dispatch = useAppDispatch()
  
  return (
    <MenuItem position='right'>
      <Button
        basic inverted color='teal'
        onClick={() => setAuth(true)}
      >
        <span className='btn'>Login</span>
      </Button>
      <Button basic inverted color='teal' style={{marginLeft: '0.5em'}}>
        <span className='btn'>Register</span>
      </Button>
    </MenuItem>
  )
}