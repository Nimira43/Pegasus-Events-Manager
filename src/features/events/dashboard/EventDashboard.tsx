import { Grid } from 'semantic-ui-react'
import EventList from './EventList'
import EventForm from '../form/EventForm'
import { sampleData } from '../../../app/api/sampleData'
import { useEffect, useState } from 'react'
import { AppEvent } from '../../../app/types/events'


export default function EventDashboard() {
  const [events, setEvents] = useState<AppEvent[]>([])
  useEffect(() => {
    setEvents(sampleData)
  }, [])

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList/>
      </Grid.Column>
      <Grid.Column width={6}>
        {formOpen && 
          <EventForm
            setFormOpen={setFormOpen}
            updateEvent={updateEvent}
            addEvent={addEvent}
            selectedEvent={selectedEvent}
            key={selectedEvent ? selectedEvent.id : 'create'}
          />}
      </Grid.Column>
    </Grid>      
  )
}
