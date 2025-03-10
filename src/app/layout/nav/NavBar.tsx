import { Button, Container, Menu, MenuItem } from 'semantic-ui-react'

type Props = {
  setFormOpen: (value: boolean) => void
}

export default function NavBar({setFormOpen}: Props) {
  return (
      <Menu inverted={true} fixed='top'>
        <Container>
          <MenuItem header>
            <img src='/logo1.png' alt='logo'></img>
            <span className='logo'>Pegasus</span>
          </MenuItem>
          <MenuItem>
            <span className='heading'>Events</span>
          </MenuItem>
          <MenuItem >
            <Button 
              onClick={() => setFormOpen(true)}
              floated='right' 
              basic 
              inverted 
              color='teal'>
              <span className='btn'>Create Event</span>
            </Button>
          </MenuItem>
          <MenuItem position='right'>
            <Button basic inverted color='teal'>
              <span className='btn'>Login</span>
            </Button>
            <Button basic inverted color='teal' style={{marginLeft: '0.5em'}}>
              <span className='btn'>Register</span>
            </Button>
          </MenuItem>
        </Container>  
      </Menu>
  )
}
