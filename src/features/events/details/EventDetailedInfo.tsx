import { Segment, Grid, Button } from 'semantic-ui-react'
import { MdOutlineDescription, MdOutlineLocationOn } from 'react-icons/md'
import { BsCalendar3 } from 'react-icons/bs'

export default function EventDetailedInfo() {
  return (
    <Segment.Group>
      <Segment attached='top'>
        <Grid>
          <Grid.Column width={1}>
            <MdOutlineDescription className='icon'/>
          </Grid.Column>
          <Grid.Column width={15}>
            <p>Event Description</p>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached>
        <Grid verticalAlign='middle'>
          <Grid.Column width={1}>
            <BsCalendar3 className='icon' />
          </Grid.Column>
          <Grid.Column width={15}>
            <span>Event Date</span>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached>
        <Grid verticalAlign='middle'>
          <Grid.Column width={1}>
            <MdOutlineLocationOn className='icon' />
          </Grid.Column>
          <Grid.Column width={11}>
            <span>Event Venue</span>
          </Grid.Column>
          <Grid.Column width={4}>
            <Button 
              color='teal' 
            >
            <span className='btn-general'>Show Map</span>
            </Button>
          </Grid.Column>
        </Grid>
      </Segment>
    </Segment.Group>
  )
}