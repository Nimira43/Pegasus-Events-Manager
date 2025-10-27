import { Form } from 'semantic-ui-react'
import ModalWrapper from '../../common/modals/ModalWrapper'
import { FieldValues, useForm } from 'react-hook-form'

export default function LoginForm() {
  const {
    register, 
    handleSubmit
    formState: {
      isSubmitting,
      isValid,
      isDirty,
      errors
    }
  } = useForm({
    mode: 'onTouched'
  })

  function onSubmit(data: FieldValues) {
    console.log(data)
  }

  return (
    <ModalWrapper header='Login to Pegasus'
    >
      <Form>

      </Form>
    </ModalWrapper>
  )
}