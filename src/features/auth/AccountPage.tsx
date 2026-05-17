import { FieldValues, useForm } from 'react-hook-form'
import { Button, Form, Header, Segment } from 'semantic-ui-react'

export default function AccountPage() {
  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting,
      isValid
    }
  } = useForm({
    mode: 'onTouched'
  })

  function onSubmit(data: FieldValues) {
    console.log(data)
  }

  return (
    <Segment>
      <Header
        dividing
        size='large'
        content='Account'
      />
      <div>
        <Header
          color='teal'
          sub
          content='Change password'
        />
        <p>
          Use this form to change your password.
        </p>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Input
            type='password'
            defaultValue=''
            placeholder='Password'
            {...register('password1', { required: true })}
            error={errors.password1 && 'Password is required.'}
          />
          <Form.Input
            type='password'
            defaultValue=''
            placeholder='Confirm Password'
            {...register('password2', { required: true })}
            error={errors.password1 && 'Confirm Password is required.'}
          />
          <Button
            loading={isSubmitting}
            type='submit'
            disabled={!isValid || isSubmitting}
            size='large'
            positive
            content='Update Password'
          />
        </Form>
      </div>
    </Segment>
  )
}