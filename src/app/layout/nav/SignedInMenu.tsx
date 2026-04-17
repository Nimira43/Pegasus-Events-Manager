import { Dropdown, Image, Menu } from 'semantic-ui-react'
import { Link, useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../store/store'
import { signOut } from 'firebase/auth'
import { auth } from '../../config/firebase'

export default function SignedInMenu() {
  const {currentUser} = useAppSelector(state => state.auth)
  const navigate = useNavigate()

  async function handleSignOut() {
    await signOut(auth)
    navigate('/')
  }

  return (
    <Menu.Item position='right'>
      <Image avatar spaced='right' src='/user.png' />
      <Dropdown pointing='top left' text={currentUser?.email as string}>
        <Dropdown.Menu>
          <Dropdown.Item as={Link} to='/createEvent' text='Create Event' />
          <Dropdown.Item text='My Profile' />
          <Dropdown.Item onClick={handleSignOut} text='Sign Out' />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  )
}