import { Dropdown, Image, Menu } from 'semantic-ui-react'
import { Link, useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../store/store'

export default function SignedInMenu() {
  const {currentUser} = useAppSelector(state => state.auth)

  const navigate = useNavigate()

  function handleSignOut() {
    setAuth(false)
    navigate('/')
  }

  return (
    <Menu.Item position='right'>
      <Image avatar spaced='right' src='/user.png' />
      <Dropdown pointing='top left' text='Lenny'>
        <Dropdown.Menu>
          <Dropdown.Item as={Link} to='/createEvent' text='Create Event' />
          <Dropdown.Item text='My Profile' />
          <Dropdown.Item onClick={handleSignOut} text='Sign Out' />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  )
}