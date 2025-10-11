import { ReactNode } from 'react'
import { ModalProps } from 'semantic-ui-react'

type Props = {
  children: ReactNode
  header: string
} & ModalProps

export default function ModalWrapper({
  children,
  header,
  ...props

}: Props) {
  return (
    <div>ModalWrapper</div>
  )
}