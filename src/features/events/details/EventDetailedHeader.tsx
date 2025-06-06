import { Button, Header, Image, Item, Segment } from 'semantic-ui-react'

export default function EventDetailedHeader() {
  return (
    <Segment.Group>
      <Segment 
        basic 
        attached='top'
        style={{padding: '0'}}
      >
        <Image src={`/assets/drinks.jpg`} fluid />
        <Segment basic>
          <Item.Group>
            <Item>
              <Item.Content>
                <Header
                  size='huge'
                  content='Event Title'
                  style={{color: 'white'}}
                />
                <p>Event Date</p>
                <p>Hosted by <strong>Lenny</strong></p>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Segment> 
      <Segment attached='bottom'>
        <Button>Cancel Attending</Button>
        <Button>Join Event</Button>
        <Button 
          color='teal'
          floated='right'
        >
          Manage Event
        </Button>
      </Segment> 
    </Segment.Group>
  )
}