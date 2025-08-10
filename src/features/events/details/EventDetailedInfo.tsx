import { Segment, Grid, Button } from 'semantic-ui-react'
import { MdOutlineDescription, MdOutlineLocationOn } from 'react-icons/md'
import { BsCalendar3 } from 'react-icons/bs'
import { AppEvent } from '../../../app/types/events'

type Props = {
  event: AppEvent
}

export default function EventDetailedInfo({event}: Props) {
  return (
    <Segment.Group>
      <Segment attached='top'>
        <Grid>
          <Grid.Column width={1}>
            <MdOutlineDescription className='icon'/>
          </Grid.Column>
          <Grid.Column width={15}>
            <p>{event.description}</p>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached>
        <Grid verticalAlign='middle'>
          <Grid.Column width={1}>
            <BsCalendar3 className='icon' />
          </Grid.Column>
          <Grid.Column width={15}>
            <span>{event.date}</span>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached>
        <Grid verticalAlign='middle'>
          <Grid.Column width={1}>
            <MdOutlineLocationOn className='icon' />
          </Grid.Column>
          <Grid.Column width={11}>
            <span>{event.venue}</span>
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