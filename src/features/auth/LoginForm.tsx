import { Button, Form } from 'semantic-ui-react'
import ModalWrapper from '../../common/modals/ModalWrapper'
import { FieldValues, useForm } from 'react-hook-form'
import { useAppDispatch } from '../../app/store/store'
import { closeModal } from '../../common/modals/modalSlice'

export default function LoginForm() {
  const {
    register, 
    handleSubmit,
    formState: {
      isSubmitting,
      isValid,
      isDirty,
      errors
    }
  } = useForm({
    mode: 'onTouched'
  })

  const dispatch =  useAppDispatch()

  function onSubmit(data: FieldValues) {
    console.log(data)
    dispatch(closeModal())
  }

  return (
    <ModalWrapper header='Login to Pegasus'>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Input 
          defaultValue=''
          placeholder='Email'
          {...register('email', {
            required: true,
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Please enter a valid email address.'
            }

          })}
          error={errors.email && 'Email is required.'}
        />
        <Form.Input
          type='password' 
          defaultValue=''
          placeholder='Password'
          {...register('password', {
            required: true,
            pattern: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/
          })}
          error={errors.password && 'Password is required.'}
        />
        <Button 
          loading={isSubmitting}
          disabled={!isValid || !isDirty || isSubmitting}
          type='submit'
          fluid
          size='large'
          color='teal'
          content='Login' 
        >
          <span className='btn'>Login</span>
        </Button>
      </Form>
    </ModalWrapper>
  )
}