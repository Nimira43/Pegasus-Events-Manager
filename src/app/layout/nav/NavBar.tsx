import { Container, Menu, MenuItem } from 'semantic-ui-react'

export default function NavBar() {
  return (
      <Menu inverted={true} fixed='top'>
        <Container>
          <MenuItem header>
            <img src='/logo1.png' alt='logo'></img>
            <span className='logo'>Pegasus</span>
          </MenuItem>
        </Container>  
      </Menu>
  )
}
