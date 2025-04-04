import { Container, Header, Image, Segment } from 'semantic-ui-react'

export default function HomePage() {
  return (
    <Segment 
      inverted
      textAlign='center'
      vertical
      className='masthead'
    >
      <Container>
        <Header as='h1' inverted>
          <Image
            size='massive'
            src='/logo1.png'
            alt='logo'
            style={{
              marginBottom: 12
            }}
          />
          <span className='logo'>Pegasus</span>
          
        </Header>
      </Container>
    </Segment>

  )
}