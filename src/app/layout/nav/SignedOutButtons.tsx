import { MenuItem, Button } from 'semantic-ui-react'


export default function SignedOutButtons() {
  return (
    <MenuItem position='right'>
      <Button basic inverted color='teal'>
        <span className='btn'>Login</span>
      </Button>
      <Button basic inverted color='teal' style={{marginLeft: '0.5em'}}>
        <span className='btn'>Register</span>
      </Button>
    </MenuItem>
  )
}