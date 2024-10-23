import { Container } from 'semantic-ui-react'
import EventDashboard from '../../features/events/dashboard/EventDashboard'
import NavBar from './nav/NavBar'

function App() {
  return (
    <div>
      <div>
        <NavBar />
        <Container className='main'>
          <EventDashboard />  
        </Container>

      </div>
    </div>
  )
}

export default App
