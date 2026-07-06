import { useState } from 'react'
import { Button, Card, Grid, Header, Image } from 'semantic-ui-react'
import { Profile } from '../../app/types/profile'
import { TbPhoto, TbTrash } from 'react-icons/tb'
import { auth } from '../../app/config/firebase'

type Props = {
  profile: Profile
  contentStyle: React.CSSProperties
}

export default function ProfilePhotos({ profile, contentStyle }: Props) {
  const [editMode, setEditMode] = useState(false)
  const isCurrentUser = auth.currentUser?.uid === profile.id
  
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
                <TbPhoto
                  size={24}
                  style={{
                    marginRight: 8
                  }}
                  />
                <span>
                  Photos
                </span>
              </div>
            </Header>
            {isCurrentUser && 
              <Button
                basic
                content={
                  editMode
                  ? 'Cancel'
                  : 'Add Photo'
                }
                onClick={
                  () => setEditMode(!editMode)
                }
              />
            }
          </div>
        </Grid.Column>

        <Grid.Column width={16}>
          {editMode ? (
            <p>Photo Uploads</p>
          ) : (
            <>
              <Card.Group itemsPerRow={5}>
                <Card>
                  <Image src='/user.png' />
                    {isCurrentUser &&                      
                      <Button.Group>
                        <Button basic>
                          Main
                        </Button>
                        <Button basic 
                        >
                          <TbTrash />
                        </Button>
                      </Button.Group>   
                    }  
                </Card>
              </Card.Group>
            </>
          )}
        </Grid.Column>
      </Grid>
    </div>
  )
}