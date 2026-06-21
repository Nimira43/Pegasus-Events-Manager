import { Tab } from 'semantic-ui-react'
import ProfileAbout from './ProfileAbout'
import { Profile } from '../../app/types/profile'

type Props = {
  profile: Profile
}

export default function ProfileContent({
  profile
}: Props) {
  const contentStyle = {
    background: 'white',
    padding: '1.5rem',
    borderRadius: '4px',
    minHeight: '200px',
    boxShadow: '0 2px 4px rgba(34,36,38,0.12)',
  }

  const panes = [
    {
      menuItem: 'About',
      render: () => (
        <ProfileAbout
          profile={profile}
          contentStyle={contentStyle}
        />
      )
    },
    {
      menuItem: 'Photos',
      render: () => <div style={contentStyle}>Photos</div>
    },
    {
      menuItem: 'Events',
      render: () => <div style={contentStyle}>Events</div>
    },
    {
      menuItem: 'Followers',
      render: () => <div style={contentStyle}>Followers</div>
    },
    {
      menuItem: 'Following',
      render: () => <div style={contentStyle}>Following</div>
    }
  ]

  return (
    <Tab
      menu={{ fluid: true, vertical: true }}
      menuPosition="right"
      panes={panes}
    />
  )
}
