import { Button, Icon } from "semantic-ui-react";

export default function SocialLogin() {
  return (
    <>
      <Button
        type='button'
        fluid
        color='black'
        style={{marginBottom: 10}}
      >
        <span className='btn'>
          Login wih GitHub
        </span>
      </Button>
      <Button
        type='button'
        fluid
        color='grey'
        style={{marginBottom: 10, }}
      >
        <span className='btn'>
          Login wih Google
        </span>
      </Button>
    
    </>
  )
}