import { ChangeEvent, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Button, Form, Header, Segment } from 'semantic-ui-react'
import { useAppDispatch, useAppSelector } from '../../../app/store/store'
import { createEvent, updateEvent } from '../eventSlice'
import { createId } from '@paralleldrive/cuid2'
import { FieldValues, useForm } from 'react-hook-form'

export default function EventForm() {
  const { register, handleSubmit } = useForm()
  let {id} = useParams()
  const event = useAppSelector(state => state.events.events.find(e => e.id === id))
  const dispatch = useAppDispatch()
  const navigate = useNavigate()


  function onSubmit(data: FieldValues) {
    console.log(data)

    // id = id ?? createId()
    
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    // event 
    //   ? dispatch(updateEvent({ ...event, ...values })) 
    //   : dispatch(createEvent({ ...values, id, hostedBy: 'Vanessa', attendees: [], hostPhotoURL: '' }))
    // navigate(`/events/${id}`)
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
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Input 
          placeholder='Event Title'
          defaultValue={event?.title || ''}
          {...register('title')}
        />
        <Form.Input 
          placeholder='Category'
          defaultValue={event?.category || ''}
          {...register('category')}
        />
        <Form.Input  
          placeholder='Description'
          defaultValue={event?.description || ''}
          {...register('description')}
        />
        <Form.Input 
          placeholder='City'
          defaultValue={event?.city || ''}
          {...register('city')}
        />
        <Form.Input 
          placeholder='Venue'
          defaultValue={event?.venue}
          {...register('venue')}
        />
        <Form.Input  
          type='date'
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
