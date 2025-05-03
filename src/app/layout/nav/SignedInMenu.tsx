import { Dropdown, Image, Menu } from 'semantic-ui-react'

export default function SignedInMenu() {
  return (
    <Menu.Item position='right'>
      <Image avatar spaced='right' src='/user.png' />
      <Dropdown pointing='top left' text='Lenny'>
        <Dropdown.Item />
      </Dropdown>
    </Menu.Item>
  )
}