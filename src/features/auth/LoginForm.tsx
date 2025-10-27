import { Form } from 'semantic-ui-react'
import ModalWrapper from '../../common/modals/ModalWrapper'

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

  return (
    <ModalWrapper header='Login to Pegasus'
    >
      <Form>

      </Form>
    </ModalWrapper>
  )
}