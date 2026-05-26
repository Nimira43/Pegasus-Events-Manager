import { createBrowserRouter } from 'react-router-dom'
import App from '../layout/App'
import EventDashboard from '../../features/events/dashboard/EventDashboard'
import EventDetailedPage from '../../features/events/details/EventDetailedPage'
import EventForm from '../../features/events/form/EventForm'
import Scratch from '../scratch/Scratch'
import AccountPage from '../../features/auth/AccountPage'
import ProfilePage from '../../features/profiles/ProfilePage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/events', element: <EventDashboard /> },
      { path: '/events/:id', element: <EventDetailedPage /> },
      { path: '/manage/:id', element: <EventForm /> },
      { path: '/createEvent', element: <EventForm key='create' /> },
      { path: '/profiles/:id', element: <ProfilePage /> },
      { path: '/account', element: <AccountPage /> },
      { path: '/scratch', element: <Scratch /> },
    ]
  }
])