import { Button, Icon, Item, ItemGroup, List, Segment, SegmentGroup } from 'semantic-ui-react'
import EventListAttendee from './EventListAttendee'
import { AppEvent } from '../../../app/types/events'

type Props = {
  event: AppEvent,
  selectEvent: (event: AppEvent) => void
  deleteEvent: (eventId: string) => void
}

export default function EventListItem({
  event,
  selectEvent,
  deleteEvent
}: Props) {
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
          <Icon name='clock' /> {event.date}
          <Icon name='marker' /> {event.venue}
        </span>
      </Segment>
      <Segment secondary>
        <List horizontal>
          {event.attendees.map((attendee: any) => (
            <EventListAttendee key={attendee.id} attendee={attendee} />
          ))}
        </List>
      </Segment>
      <Segment clearing>
        <span>{event.description}</span>
        <Button
          color='teal'
          floated='right' 
          onClick={() => deleteEvent(event.id)}>
          <span className='btn'>Delete</span>
        </Button> 
        <Button
          color='black'
          floated='right' 
          onClick={() => selectEvent(event)}>
          <span className='btn'>View</span>
        </Button> 
      </Segment>
    </SegmentGroup>
  )
}
