import { Container, Menu, MenuItem } from "semantic-ui-react";

export default function NavBar() {
  return (
    <Menu inverted={true} fixed='top'>
      <Container>
        <MenuItem header>
          <img src='/logo.png' alt='logo' />
        </MenuItem>
      </Container>
    </Menu>
  )
}
