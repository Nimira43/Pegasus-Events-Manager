import { Button, Form } from 'semantic-ui-react'
import ModalWrapper from '../../common/modals/ModalWrapper'
import { FieldValues, useForm } from 'react-hook-form'
import { useAppDispatch } from '../../app/store/store'
import { closeModal } from '../../common/modals/modalSlice'
import { signIn } from './authSlice'

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
    dispatch(signIn(data))
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
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
          })}
          error={
            errors.email?.type === 'required' && 'Email is required.' ||
            errors.email?.type === 'pattern' && 'Email is invalid.'
          }
        />
        <Form.Input
          type='password' 
          defaultValue=''
          placeholder='Password'
          {...register('password', {
            required: true,
            pattern: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/
          })}
          error={
            errors.password?.type === 'required' && 'Password is required.' ||
            errors.password?.type === 'pattern' && 'Password must have 8 or more characters with at least one uppercase letter, a symbol and a number.'
          }
        />
        <Button 
          loading={isSubmitting}
          disabled={!isValid || !isDirty || isSubmitting}
          type='submit'
          fluid
          size='large'
          color='teal' 
        >
          <span className='btn'>Login</span>
        </Button>
      </Form>
    </ModalWrapper>
  )
}