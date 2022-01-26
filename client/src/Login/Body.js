import React, { useEffect, useState } from "react"

function LoginBody() {

    let username = "Bruh bruh"
    let password = "password bruh"
  
    let [usernameState, setUsernameState] = useState('')
    let [passwordState, setPasswordState] = useState('')

    return (
        <div className="App">
            <h1>Login</h1>
            <input type="text" placeholder="Username..." onChange={(event) => {
                setUsernameState(usernameState = event.target.value)
                console.log(usernameState)
            }} />
            <br />
            <input type="password" placeholder="Password..." onChange={(event) => {
                setPasswordState(passwordState = event.target.value)
                console.log(passwordState)
            }}/>
            <br />
            <button onClick={() => {
                if (usernameState === username && passwordState === password) {
                alert("Successfully logged in")
                } else {
                window.location.reload();
                alert("Wrong username or password")
                }
            }}>Submit</button>
        </div>
    )
}

export default LoginBody