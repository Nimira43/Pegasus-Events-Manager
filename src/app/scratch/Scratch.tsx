import { Button } from 'semantic-ui-react'
import { useAppDispatch, useAppSelector } from '../store/store'
import { decrement, increment, incrementByAmount } from './testSlice'
import { openModal } from '../../common/modals/modalSlice'

export default function Scratch() {
  const {data} = useAppSelector(state => state.test)
  const dispatch = useAppDispatch()

  return (
    <div>
      <h1>Redux Testing Page</h1>
      <h3>Data: {data}</h3>
      <Button 
        onClick={() => dispatch(increment())} 
        color='teal'
      >
        <span className='btn'>Increment</span>  
      </Button>
      <Button 
        onClick={() => dispatch(decrement())} 
        color='black'
      >
        <span className='btn'>Decrement</span>  
      </Button>
      <Button 
        onClick={() => dispatch(incrementByAmount(5))} 
        color='teal'
      >
        <span className='btn'>Increment By 5</span>  
      </Button>
      <Button 
        onClick={() => dispatch(
          openModal({
            type: 'TestModal',
            data: data
          })
        )} 
        color='teal'
      >
        <span className='btn'>Open Modal</span>  
      </Button>
    </div>
  )
}