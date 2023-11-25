import React from 'react'
import Button from './Button'
import "./getStarted.css"

export default function GetStarted() {

  const [email, setEmail] = React.useState("")
  const handleSubmit = (event) =>{
    event.preventDefault()
    console.log(email)
  }

  const greaterThan = ">"
  return (
    <form onSubmit={handleSubmit}>
      <p className="hero-description">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
       
      <div className='form-group'>
        <input type="email" placeholder='Email Address' className='form-input' value={email} onChange={(event) => {
          setEmail(event.target.value)
        }}/>
        <Button padding='18px 45px' size="22px" >Get Started {greaterThan} </Button>
        
      </div>
    </form>

  )
}
