import { MenuItem, Button } from 'semantic-ui-react'

type Props = {
  setAuth: (value: boolean) => void
}

export default function SignedOutButtons({setAuth}: Props) {
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