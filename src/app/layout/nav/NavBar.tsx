import { Button, Container, Menu, MenuItem } from 'semantic-ui-react'

export default function NavBar() {
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
