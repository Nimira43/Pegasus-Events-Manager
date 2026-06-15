import { Grid, Header, Tab } from 'semantic-ui-react'

export default function ProfileAbout() {
  return (
    <Tab>
      <Grid>
        <Grid.Column width={16}>
          <Header
            floated='left'
            icon='user'
            content={'About User'}
          />
        </Grid.Column>
      </Grid>
    </Tab>
  )
}