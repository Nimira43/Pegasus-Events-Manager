import { Button } from 'semantic-ui-react'

function App() {
  return (
    <div>
      <div>
        <h1>eDiary</h1>
        <button className='ui icon red button'> 
          <i className="user icon"></i>
          Button
        </button>
        <Button icon='smile' content='Button' color='blue'/>
      </div>
    </div>
  )
}

export default App
