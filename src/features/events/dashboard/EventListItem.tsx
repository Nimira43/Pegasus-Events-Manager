import { Button, Item, ItemGroup, Label, List, Segment, SegmentGroup } from 'semantic-ui-react'
import EventListAttendee from './EventListAttendee'
import { AppEvent } from '../../../app/types/events'
import { LuClock3 } from 'react-icons/lu'
import { MdOutlineLocationOn } from 'react-icons/md'
import { Link } from 'react-router-dom'

type Props = {
  event: AppEvent,
}

export default function EventListItem({ event }: Props) {

  return (
    <SegmentGroup>
      <Segment>
        <ItemGroup>
          <Item>
            <Item.Image size='tiny' circular src={event.hostPhotoURL || '/user.png'} />
            <Item.Content>
              <Item.Header>
                <h4>{event.title}</h4>
                </Item.Header>
              <Item.Description>
                <span>Hosted By {event.hostedBy}</span>
              </Item.Description>
              {event.isCancelled && (
                <Label 
                  style={{ top: '-40px' }}
                  ribbon='right'
                  color='black'
                  content='This event has been cancelled.'               
                />
              )}
            </Item.Content>
          </Item>
        </ItemGroup>
      </Segment>
      <Segment>
        <span>
          <LuClock3 className='icon' /> {event.date}
          <MdOutlineLocationOn className='icon' /> {event.venue}
        </span>
      </Segment>
      <Segment secondary>
        <List horizontal>
          {event.attendees.map(attendee => (
            <EventListAttendee
              key={attendee.id}
              attendee={attendee}
            />
          ))}
        </List>
      </Segment>
      <Segment clearing>
        <p>{event.description}</p>
        <Button
          as={Link}
          to={`/events/${event.id}`}
          color='teal'
          floated='right' 
        >
          <span className='btn'>View</span>
        </Button>
      </Segment>
    </SegmentGroup>
  )
}
