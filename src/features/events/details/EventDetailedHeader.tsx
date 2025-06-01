import { Image, Segment } from 'semantic-ui-react'

export default function EventDetailedHeader() {
  return (
    <Segment.Group>
      <Segment 
        basic 
        attached='top'
        style={{padding: '0'}}
      >
       <Image src={`/assets/drinks.jpg`} fluid />
      </Segment>  
    </Segment.Group>
  )
}