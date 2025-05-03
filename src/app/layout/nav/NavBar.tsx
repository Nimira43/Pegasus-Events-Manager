import { NavLink } from 'react-router-dom'
import { Button, Container, Menu, MenuItem } from 'semantic-ui-react'
import SignedOutButtons from './SignedOutButtons'

export default function NavBar() {
  return (
      <Menu inverted={true} fixed='top'>
        <Container>
          <MenuItem
            header
            as={NavLink}
            to='/'
          >
            <img src='/logo1.png' alt='logo'></img>
            <span className='logo'>Pegasus</span>
          </MenuItem>
          <MenuItem
            as={NavLink}
            to='/events'
            className='heading'
          >
            <span className='heading'>Events</span>
          </MenuItem>
          <MenuItem>
            <Button 
              as={NavLink}
              to='/createEvent'
              floated='right' 
              basic 
              inverted 
              color='teal'>
              <span className='btn'>Create Event</span>
            </Button>
          </MenuItem>
          <SignedOutButtons />
        </Container>  
      </Menu>
  )
}
