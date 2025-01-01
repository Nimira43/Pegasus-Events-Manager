import { Button, Form, Header, Segment } from 'semantic-ui-react'

export default function EventForm() {
  return (
    <Segment clearing>
      <Header>
        <span>Create Event</span>
      </Header>
      <Form>
        <Form.Field>
          <input type='text' placeholder='Event Title' />
        </Form.Field>
        <Form.Field>
          <input type='text' placeholder='Category' />
        </Form.Field>
        <Form.Field>
          <input type='text' placeholder='Description' />
        </Form.Field>
        <Form.Field>
          <input type='text' placeholder='City' />
        </Form.Field>
        <Form.Field>
          <input type='text' placeholder='Venue' />
        </Form.Field>
        <Form.Field>
          <input type='text' placeholder='Date' />
        </Form.Field>
        <Button type='submit' color='teal' floated='right'>
          <span className='btn'>Submit</span>
        </Button>
        <Button type='submit' color='black' floated='right'>
          <span className='btn'>Cancel</span>
        </Button>
      </Form>      
    </Segment>
  )
}
