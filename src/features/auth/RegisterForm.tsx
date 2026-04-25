import { Button, Form, Label } from 'semantic-ui-react'
import ModalWrapper from '../../app/common/modals/ModalWrapper'
import { FieldValues, useForm } from 'react-hook-form'
import { useAppDispatch } from '../../app/store/store'
import { closeModal } from '../../app/common/modals/modalSlice'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../../app/config/firebase'
import { signIn } from './authSlice'

export default function RegisterForm() {
  const {
    register, 
    handleSubmit,
    setError,
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

  async function onSubmit(data: FieldValues) {
    try {
      const userCreds = await createUserWithEmailAndPassword(auth, data.email, data.password)
      await updateProfile(userCreds.user, {
        displayName: data.displayName
      })
      dispatch(signIn(userCreds.user))
      dispatch(closeModal())
    } catch (error: any) {
      setError('root.serverError', {
        type: '400', message: error.message
      })
    }  
  }

  return (
    <ModalWrapper header='Register to Pegasus'>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Input 
          defaultValue=''
          placeholder='Display name'
          {...register('displayName', {
            required: true,
          })}
          error={
            errors.displayName && 'Display name is required.' 
          }
        />
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
        {errors.root && (
          <Label
            basic
            color='red'
            style={{
              display: 'block',
              marginBottom: 10
            }}
            content={errors.root.serverError.message}
          />
        )}
        <Button 
          loading={isSubmitting}
          disabled={!isValid || !isDirty || isSubmitting}
          type='submit'
          fluid
          size='large'
          color='teal' 
        >
          <span className='btn'>Register</span>
        </Button>
      </Form>
    </ModalWrapper>
  )
}