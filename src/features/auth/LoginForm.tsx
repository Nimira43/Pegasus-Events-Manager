import { Button, Form, Label } from 'semantic-ui-react'
import ModalWrapper from '../../app/common/modals/ModalWrapper'
import { FieldValues, useForm } from 'react-hook-form'
import { useAppDispatch } from '../../app/store/store'
import { closeModal } from '../../app/common/modals/modalSlice'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../app/config/firebase'

export default function LoginForm() {
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
      await signInWithEmailAndPassword(auth, data.email, data.password)
      dispatch(closeModal())
    } catch (error: any) {
      setError('root.serverError', {
        type: '400', message: error.message
      })
    }  
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
          <span className='btn'>Login</span>
        </Button>
      </Form>
    </ModalWrapper>
  )
}