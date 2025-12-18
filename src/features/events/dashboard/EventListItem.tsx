import { Button, Item, ItemGroup, List, Segment, SegmentGroup } from 'semantic-ui-react'
import EventListAttendee from './EventListAttendee'
import { AppEvent } from '../../../app/types/events'
import { LuClock3 } from 'react-icons/lu'
import { MdOutlineLocationOn } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../../app/store/store'
import { deleteEvent } from '../eventSlice'

type Props = {
  event: AppEvent,
}

export default function EventListItem({ event }: Props) {
  const dispatch = useAppDispatch()

  return (
    <SegmentGroup>
      <Segment>
        <ItemGroup>
          <Item>
            <Item.Image size='tiny' circular src={event.hostPhotoURL || '/user.png'} />
            <Item.Content>
              <Item.Header>
                <span>{event.title}</span>
                </Item.Header>
              <Item.Description>
                <span>Hosted By {event.hostedBy}</span>
              </Item.Description>
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
            <EventListAttendee key={attendee.id} attendee={attendee} />
          ))}
        </List>
      </Segment>
      <Segment clearing>
        <span>{event.description}</span>
        <Button
          onClick={() => dispatch(deleteEvent(event.id))}
          color='teal'
          floated='right' 
        >
          <span className='btn'>Delete</span>
        </Button> 
        <Button
          as={Link}
          to={`/events/${event.id}`}
          color='black'
          floated='right' 
        >
          <span className='btn'>View</span>
        </Button> 
      </Segment>
    </SegmentGroup>
  )
}
