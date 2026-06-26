import { FieldValues, useForm } from 'react-hook-form'
import { useFireStore } from '../../app/hooks/firestore/useFirestore'
import { Profile } from '../../app/types/profile'
import { updateProfile } from 'firebase/auth'
import { auth } from '../../app/config/firebase'
import { Form, FormField, Input, TextArea, Button } from 'semantic-ui-react'

type Props = {
  profile: Profile
  setEditMode: (value: boolean) => void
}

export default function ProfileForm({ profile, setEditMode }: Props) {
  const { update } = useFireStore('profiles')

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty, isValid }
  } = useForm({
    mode: 'onTouched',
    defaultValues: {
      displayName: profile.displayName,
      description: profile.description
    }
  })

  async function onSubmit(data: FieldValues) {
    await update(profile.id, data)

    if (profile.displayName !== data.displayName) {
      await updateProfile(auth.currentUser!, {
        displayName: data.displayName
      })
    }

    setEditMode(false)
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormField error={!!errors.displayName}>
        <label
          className='font-medium'
        >
          Display Name
        </label>
        <Input
          placeholder='Display Name'
          {...register('displayName', { required: true })}
        />
        {errors.displayName && (
          <div style={{ color: 'red', marginTop: 5 }}>
            Display name is required
          </div>
        )}
      </FormField>

      <FormField>
        <label className='font-medium'>
          About
        </label>
        <TextArea
          placeholder='Tell us more about yourself'
          {...register('description')}
        />
      </FormField>

      <Button
        loading={isSubmitting}
        disabled={isSubmitting || !isValid || !isDirty}
        floated='right'
        type='submit'
        color='teal'       
      >
        <span className='btn-general'>
          Update Profile
        </span>      
      </Button>
    </Form>
  )
}
