import TestModal from '../../app/scratch/TestModal'
import { useAppSelector } from '../../app/store/store'

export default function ModalManager() {
  const modalLookup = {
    TestModal
  }

  const {type, data, open} = useAppSelector(state => state.modals)

  return (
    <div>Modal Manager</div>
  )
}