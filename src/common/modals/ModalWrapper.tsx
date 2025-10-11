import { ReactNode } from 'react'
import { ModalProps } from 'semantic-ui-react'
import { useAppSelector } from '../../app/store/store'

type Props = {
  children: ReactNode
  header: string
} & ModalProps

export default function ModalWrapper({
  children,
  header,
  ...props

}: Props) {
  const {open} = useAppSelector(state => state.modals)

  return (
    <div>ModalWrapper</div>
  )
}