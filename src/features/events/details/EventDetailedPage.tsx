import EventDetailedChat from './EventDetailedChat'
import EventDetailedHeader from './EventDetailedHeader'
import EventDetailedInfo from './EventDetailedInfo'
import EventDetailedSidebar from './EventDetailedSidebar'

export default function EventDetailedPage() {
  return (
    <>
      <h1>EventDetailedPage</h1>
      <EventDetailedHeader />
      <EventDetailedInfo />
      <EventDetailedChat />
      <EventDetailedSidebar />
    </>
  )
}