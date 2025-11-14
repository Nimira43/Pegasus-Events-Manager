import { NavLink } from 'react-router-dom'
import { Button, Container, Menu, MenuItem } from 'semantic-ui-react'
import SignedOutButtons from './SignedOutButtons'
import SignedInMenu from './SignedInMenu'
import { useState } from 'react'

export default function NavBar() {
  const [auth, setAuth] = useState(false)

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
          name='Events'
          as={NavLink}
          to='/events'
        >
          <span className='heading'>Events</span>
        </MenuItem>
        <MenuItem
          name='Scratch'
          as={NavLink}
          to='/scratch'
        >
          <span className='heading'>Testing</span>
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
        {auth
          ?
          <SignedInMenu />
          :
          <SignedOutButtons />
        }
      </Container>  
    </Menu>
  )
}
