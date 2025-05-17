import { Dropdown, Image, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

type Props = {
  setAuth: (value: boolean) => void
}

export default function SignedInMenu({ setAuth }: Props) {
  return (
    <Menu.Item position='right'>
      <Image avatar spaced='right' src='/user.png' />
      <Dropdown pointing='top left' text='Lenny'>
        <Dropdown.Menu>
          <Dropdown.Item as={Link} to='/createEvent' text='Create Event' />
          <Dropdown.Item text='My Profile' />
          <Dropdown.Item onClick={() => setAuth(false)} text='Sign Out' />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  )
}