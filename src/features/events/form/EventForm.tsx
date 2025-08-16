import { ChangeEvent, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Button, Form, Header, Segment } from 'semantic-ui-react'
import { useAppDispatch, useAppSelector } from '../../../app/store/store'
import { createEvent, updateEvent } from '../eventSlice'
import { createId } from '@paralleldrive/cuid2'
import { FieldValues, useForm } from 'react-hook-form'

export default function EventForm() {
  const { 
    register, 
    handleSubmit, 
    formState: { 
      errors,
      isValid 
    }
  } = useForm({
    mode: 'onTouched'
  })
  
  let {id} = useParams()
  const event = useAppSelector(state => state.events.events.find(e => e.id === id))
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  function onSubmit(data: FieldValues) {
    console.log(data)
  }
  
  return (
    <Segment clearing>
      <Header 
        content='Event Details'
        sub
      />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Input 
          placeholder='Event Title'
          defaultValue={event?.title || ''}
          {...register('title', {required: true})}
          error={errors.title && 'Title is required'}
        />
        <Form.Input 
          placeholder='Category'
          defaultValue={event?.category || ''}
          {...register('category', {required: 'Category is required'})}
          error={errors.category && errors.category.message}
        />
        <Form.TextArea  
          placeholder='Description'
          defaultValue={event?.description || ''}
          {...register('description', {required: 'Description is required'})}
          error={errors.description && errors.description.message}
        />
        <Header
          content='Location Details'
          sub
        />
        <Form.Input 
          placeholder='City'
          defaultValue={event?.city || ''}
          {...register('city', {required: 'City is required'})}
          error={errors.city && errors.city.message}
        />
        <Form.Input 
          placeholder='Venue'
          defaultValue={event?.venue}
          {...register('venue', {required: 'Venue is required'})}
          error={errors.venue && errors.venue.message}
        />
        <Form.Input  
          type='date'
          placeholder='Date'
          defaultValue={event?.date}
          {...register('date', {required: 'Venue is required'})}
          error={errors.date && errors.date.message}
        />
        <Button 
          disabled={!isValid}
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
