import { ChangeEvent, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Button, Form, Header, Segment } from 'semantic-ui-react'
import { useAppDispatch, useAppSelector } from '../../../app/store/store'
import { createEvent, updateEvent } from '../eventSlice'
import { createId } from '@paralleldrive/cuid2'
import { useForm } from 'react-hook-form'

export default function EventForm() {
  const { register, handleSubmit } = useForm()
  let {id} = useParams()
  const event = useAppSelector(state => state.events.events.find(e => e.id === id))
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const initialValues = event ?? {
    title: '',
    category: '',
    description: '',
    city: '',
    venue: '',
    date: '',
  }
  
  const [values, setValues] = useState(initialValues) 

  function onSubmit() {
    id = id ?? createId()
    
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    event 
      ? dispatch(updateEvent({ ...event, ...values })) 
      : dispatch(createEvent({ ...values, id, hostedBy: 'Vanessa', attendees: [], hostPhotoURL: '' }))
    navigate(`/events/${id}`)
  }

  function handleInputChange(
    e: ChangeEvent<HTMLInputElement>
  ) {
    const { name, value } = e.target
    setValues({...values, [name]: value})
  }
  
  return (
    <Segment clearing>
      <Header 
        content={
          event 
          ? 'Update event' 
          : 'Create Event'
        } 
      />
      <Form onSubmit={onSubmit}>
        <Form.Input 
          className='bordering' 
          placeholder='Event Title'
          defaultValue={event?.title || ''}
          {...register('title')}
        />
        <Form.Input 
          className='bordering' 
          placeholder='Category'
          defaultValue={event?.category || ''}
          {...register('category')}
        />
        <Form.Input 
          className='bordering'  
          placeholder='Description'
          defaultValue={event?.description || ''}
          {...register('description')}
        />
        <Form.Input 
          className='bordering' 
          placeholder='City'
          defaultValue={event?.city || ''}
          {...register('city')}
        />
        <Form.Input 
          className='bordering' 
          placeholder='Venue'
          defaultValue={event?.venue}
          {...register('venue')}
        />
        <Form.Input 
          className='bordering'  
          placeholder='Date'
          defaultValue={event?.date}
          {...register('date')}
        />
        <Button 
          type='submit' 
          color='teal' 
          floated='right'
        >
          <span className='btn'>Submit</span>
        </Button>
        <Button 
          as={Link}
          to='/event'
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
