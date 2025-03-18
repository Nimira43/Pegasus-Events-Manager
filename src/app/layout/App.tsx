import { Container } from 'semantic-ui-react'
import NavBar from './nav/NavBar'
import { useState } from 'react'
import { AppEvent } from '../types/events'
import { Outlet } from 'react-router-dom'

function App() {
  const [formOpen, setFormOpen] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState<AppEvent | null>(null)

  function handleSelectEvent(event: AppEvent | null) {
    setSelectedEvent(event)
    setFormOpen(true)
  }
  
  function handleCreatedFormOpen() {
    setSelectedEvent(null)
    setFormOpen(true)
  }

  return (
    <>
      <NavBar setFormOpen={handleCreatedFormOpen}/>
      <Container className='main'>
        <Outlet />
      </Container>
    </>
  )
}

export default App