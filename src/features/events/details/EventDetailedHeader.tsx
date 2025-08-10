import { Button, Header, Image, Item, Segment } from 'semantic-ui-react'
import { AppEvent } from '../../../app/types/events'
import { Link } from 'react-router-dom'

type Props = {
  event: AppEvent
}

export default function EventDetailedHeader({event}: Props) {
  const eventImageStyle = {
    filter: 'brightness(30%)'
  }
  const eventImageTextStyle = {
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    width: '100%',
    height: 'auto',
    color: 'white'
  }

  return (
    <Segment.Group>
      <Segment 
        basic 
        attached='top'
        style={{padding: '0'}}
      >
        <Image 
          src={`/assets/${event.category}.jpg`} 
          fluid 
          style={eventImageStyle}
        />
        <Segment 
          basic
          style={eventImageTextStyle}
        >
          <Item.Group>
            <Item>
              <Item.Content>
                <Header
                  size='huge'
                  content={event.title}
                  style={{color: 'white'}}
                />
                <p>{event.date}</p>
                <p>Hosted by <strong>{event.hostedBy}</strong></p>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Segment> 
      <Segment attached='bottom'>
        <Button
          color='black'
        >
          <span className='btn-general'>Cancel</span>
        </Button>
        <Button
          color='black'
        >
          <span className='btn-general'>Join</span>
        </Button>
        <Button 
          as={Link}
          to={`/manage/${event.id}`}
          color='teal'
          floated='right'
        >
          <span className='btn-general'>Manage</span>
        </Button>
      </Segment> 
    </Segment.Group>
  )
}