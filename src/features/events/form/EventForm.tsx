import { useState } from 'react'
import { Button, Form, Header, Segment } from 'semantic-ui-react'

type Props = {
  setFormOpen: (value: boolean) => void
}

export default function EventForm({ setFormOpen }: Props) {
  const [title, setTitle] = useState('') 
  
  function onSubmit() {
    console.log('test')
  }
  
  return (
    <Segment clearing>
      <Header content='Create Event' />
      <Form onSubmit={onSubmit}>
        <Form.Field>
          <input 
            className='bordering' 
            type='text' 
            placeholder='Event Title'
          />
        </Form.Field>
        <Form.Field>
          <input 
            className='bordering' 
            type='text' 
            placeholder='Category'
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <input 
            className='bordering' 
            type='text' 
            placeholder='Description'
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <input 
            className='bordering' 
            type='text' 
            placeholder='City'
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <input 
            className='bordering' 
            type='text' 
            placeholder='Venue'
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <input 
            className='bordering' 
            type='text' 
            placeholder='Date'
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </Form.Field>
        <Button type='submit' color='teal' floated='right'>
          <span className='btn'>Submit</span>
        </Button>
        <Button 
          onClick={() => 
            setFormOpen(false)
          }
          type='submit' 
          color='black' 
          floated='right'
        >
          <span className='btn'>Cancel</span>
        </Button>
      </Form>      
    </Segment>
  )
}
