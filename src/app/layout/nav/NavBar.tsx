import { NavLink } from 'react-router-dom'
import { Button, Container, Menu, MenuItem } from 'semantic-ui-react'
import SignedOutButtons from './SignedOutButtons'
import SignedInMenu from './SignedInMenu'
import { useAppSelector } from '../../store/store'
import { sampleData } from '../../api/sampleData'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '../../config/firebase'

export default function NavBar() {
  const { authenticated } = useAppSelector(state => state.auth)

  const seedData = () => {
    sampleData.forEach(async event => {
      const { id, ...rest } = event
      await setDoc(doc(db, 'events', id), {
        ...rest
      })
    })
  }

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
        {import.meta.env.DEV && (
          <MenuItem>
            <Button 
              inverted 
              color='teal'
              onClick={seedData}
            >
              <span className='btn'>Seed Data</span>
            </Button>
          </MenuItem>
        )}
        {authenticated
          ? <SignedInMenu />
          : <SignedOutButtons />
        }
      </Container>  
    </Menu>
  )
}
