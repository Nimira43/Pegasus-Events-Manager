import EventListAttendee from './EventListAttendee'
import { Button, Icon, Item, ItemGroup, List, Segment, SegmentGroup } from 'semantic-ui-react'

export default function EventListItem() {
  return (
    <SegmentGroup>
      <Segment>
        <ItemGroup>
          <Item>
            <Item.Image size='tiny' circular src='/user.png'/>
            <Item.Content>
              <Item.Header>Event Title</Item.Header>
              <Item.Description>
                Hosted by NimiraTech
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
        <List horizonal>
          <EventListAttendee />
          <EventListAttendee />
          <EventListAttendee />
        </List>
      </Segment>
      <Segment clearing>
        <span>Description of the event</span>
        <Button color='black' floated='right' content='View' />
      </Segment>
    </SegmentGroup>
  )
}
