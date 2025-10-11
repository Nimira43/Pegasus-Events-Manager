import { ReactNode } from 'react'
import { ModalProps } from 'semantic-ui-react'
import { useAppDispatch, useAppSelector } from '../../app/store/store'

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
  const dispatch = useAppDispatch()

  return (
    <div>ModalWrapper</div>
  )
}