import { Button, Grid, Header } from 'semantic-ui-react'
import { Profile } from '../../app/types/profile'
import { useState } from 'react'
import { LiaUser } from 'react-icons/lia'
import ProfileForm from './ProfileForm'

type Props = {
  profile: Profile
  contentStyle: React.CSSProperties
}

export default function ProfileAbout({ profile, contentStyle }: Props) {
  const [editMode, setEditMode] = useState(false)

  return (
    <div style={contentStyle}>
      <Grid>
        <Grid.Column width={16}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Header
              as='h3'
              style={{ margin: 0 }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <LiaUser
                  size={24}
                  style={{
                    marginRight: 8
                  }}
                />
                <span>
                  About {profile.displayName}
                </span>
              </div>
            </Header>

            <Button
              basic
              content={
                editMode
                  ? 'Cancel'
                  : 'Edit Profile'
              }
              onClick={
                () => setEditMode(!editMode)
              }
            />
          </div>
        </Grid.Column>

        <Grid.Column width={16}>
          {editMode ? (
            <ProfileForm
              profile={profile}
              setEditMode={setEditMode}
            />
          ) : (
            <>
              <div style={{ marginBottom: 10 }}>
                <strong>
                  Member since {profile.createdAt}
                </strong>
                <div style={{ marginTop: 10 }}>
                  {profile.description}
                </div>
              </div>
            </>
          )}
        </Grid.Column>
      </Grid>
    </div>
  )
}
