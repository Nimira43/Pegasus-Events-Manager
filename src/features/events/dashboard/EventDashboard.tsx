import { Grid } from 'semantic-ui-react'
import EventList from './EventList'
import EventForm from '../form/EventForm'
import { sampleData } from '../../../app/api/sampleData'

type Props = {
  formOpen: boolean
}

export default function EventDashboard({formOpen}: Props) {
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={sampleData}/>
      </Grid.Column>
      <Grid.Column width={6}>
        {formOpen && 
        <EventForm />}
      </Grid.Column>
    </Grid>      
  )
}
