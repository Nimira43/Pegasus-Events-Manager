import { Button } from 'semantic-ui-react'

function App() {
  return (
    <>
      <h1 className='logo'>Pegasus</h1>
      <hr />
      <p>Events Manager</p>
        <Button
          icon='user'
          content='Login' 
          color='orange'
        />
        <Button
          icon='user'
          content='Logout' 
          color='black'
        />
    </>
  )
}

export default App