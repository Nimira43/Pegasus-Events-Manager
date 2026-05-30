import { Tab } from 'semantic-ui-react'

export default function ProfileContent() {
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
      render: () => <div style={contentStyle}>About User</div>
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
