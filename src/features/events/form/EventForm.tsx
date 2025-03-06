import { ChangeEvent, useState } from 'react'
import { Button, Form, Header, Segment } from 'semantic-ui-react'
import { AppEvent } from '../../../app/types/events'
import { createId } from '@paralleldrive/cuid2'

type Props = {
  setFormOpen: (value: boolean) => void
  addEvent: (event: AppEvent) => void
}

export default function EventForm({ setFormOpen, addEvent }: Props) {
  const initialValues = {
    title: '',
    category: '',
    description: '',
    city: '',
    venue: '',
    date: '',
  }
  
  const [values, setValues] = useState(initialValues) 
  
  function onSubmit() {
    addEvent({ ...values, id: createId(), hostedBy: 'Phil', attendees: [], hostPhotoURL: '' })
    setFormOpen(false)
  }

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setValues({...values, [name]: value})
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
            value={values.title}
            name='title'
            onChange ={e => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input 
            className='bordering' 
            type='text' 
            placeholder='Category'
            value={values.category}
            name='category'
            onChange ={e => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input 
            className='bordering' 
            type='text' 
            placeholder='Description'
            value={values.description}
            name='description'
            onChange ={e => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input 
            className='bordering' 
            type='text' 
            placeholder='City'
            value={values.city}
            name='city'
            onChange ={e => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input 
            className='bordering' 
            type='text' 
            placeholder='Venue'
            value={values.venue}
            name='venue'
            onChange ={e => handleInputChange(e)}      
          />
        </Form.Field>
        <Form.Field>
          <input 
            className='bordering' 
            type='date' 
            placeholder='Date'
            value={values.date}
            name='date'
            onChange ={e => handleInputChange(e)}
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
