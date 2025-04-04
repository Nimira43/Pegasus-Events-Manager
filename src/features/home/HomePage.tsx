import { Button, Container, Header, Image, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

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
          <span className='logo lg'>Pegasus</span>  
        </Header>
        <Button
          size='huge'
          as={Link}
          to='/events'
        >
          <span className='home-page-btn'>
            Get Started
          </span>   
        </Button>
      </Container>
    </Segment>

  )
}