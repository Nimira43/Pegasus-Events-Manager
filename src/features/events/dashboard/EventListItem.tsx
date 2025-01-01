import { Button, Icon, Item, ItemGroup, List, Segment, SegmentGroup } from 'semantic-ui-react'
import EventListeAttendee from './EventListeAttendee'

export default function EventListItem() {
  return (
    <SegmentGroup>
      <Segment>
        <ItemGroup>
          <Item>
            <Item.Image size='tiny' circular src='/user.png' />
            <Item.Content>
              <Item.Header>
                <span>Event Title</span>
                </Item.Header>
              <Item.Description>
                <span>Hosted by Lenny</span>
              </Item.Description>
            </Item.Content>
          </Item>
        </ItemGroup>
      </Segment>
      <Segment>
        <span>
          <Icon name='clock' /> Date
          <Icon name='marker' /> Venue
        </span>
      </Segment>
      <Segment secondary>
        <List horizontal>
          <EventListeAttendee />
          <EventListeAttendee />
          <EventListeAttendee />
        </List>
      </Segment>
      <Segment clearing>
        <span>Description of Event</span>
        <Button color='teal' floated='right'>
          <span className='btn'>View</span>
        </Button> 
      </Segment>
    </SegmentGroup>
  )
}
