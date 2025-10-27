import { Form } from 'semantic-ui-react'
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
          {...register('email', {required: true})}
          error={errors.email && 'Email is required.'}
        />
        <Form.Input
          type='password' 
          defaultValue=''
          placeholder='Password'
          {...register('password', {required: true})}
          error={errors.password && 'Password is required.'}
        />
      </Form>
    </ModalWrapper>
  )
}