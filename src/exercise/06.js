// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
import { useRef, useState, useEffect } from 'react'

function UsernameForm({onSubmitUsername}) {

  const usernameRef = useRef(null)
  // eslint-disable-next-line no-undef
  const [isError, setIsError] = useState(null);
  const [username, setUsername] = useState("");

  const handleChange = e => {
      e.preventDefault()
      // const val = e.target.value
      setUsername(e.target.value.toLowerCase())

      // val !== val.toLowerCase() 
      // ? setIsError("Username must be lower case")
      // : setIsError(null)
      
  }

  const handleSubmit = event => {
    event.preventDefault()
    // const formdata = new FormData(event.target)
    // const username = formdata.get('username')
    // console.log({username});
    // onSubmitUsername(username)
    
    // console.log('useRef.current', usernameRef.current);
    // console.log('useRef.current', usernameRef.current.value);
    // onSubmitUsername(usernameRef.current.value)
    onSubmitUsername(username)
    
    // setUsername(event.target.value.toLowerCase())
    
  }

  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='usernameid'>Username:</label>
        <input onChange={handleChange} ref={usernameRef} value={username} type="text" id='usernameid' name='username' />
      </div>
      <button type="submit" disabled={isError != null ? true : false}>Submit</button>
      {/* <div role="alert">
        {isError != null && isError}
      </div> */}

    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
