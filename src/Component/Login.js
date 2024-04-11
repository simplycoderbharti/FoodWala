import React, { useEffect, useState } from 'react'
// import './Login.css';
import './Login.css';
import boy from '../images/boy.png'
import { useNavigate } from 'react-router-dom';


function Login() {
    let password = ""
    let username = ""
    const [name, setName] = useState("")
    const [pass, setPass] = useState('')
    const [userError, setUserError] = useState({})
    const [passError, setPassError] = useState({})
    const [Success, setSuccess] = useState({})
    const Navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()

        if (name === username && pass === password) {

            setPassError({})
            setUserError({})
            setSuccess({ success: "Congratulation" })
            Navigate('/home')
        }
        else if (name !== username && pass === password) {
            setUserError({ Username: "UserName does not exit!!" })
            setPassError({})
        } else if (name === username && pass !== password) {
            setPassError({ Password: "please write correct password" })
            setUserError({})
        } else {
            alert("please fillcorrect info")
            setSuccess({})
        }
    }
    return (
        <section>
            <div className="container margin">
                <div className="row">
                    <div className="col-lg-6">
                        <img src={boy} alt="login" width="100%" />
                    </div>
                    <div className="col-lg-4 form">
                        <form action="" onSubmit={handleSubmit}>
                            <h2>login page</h2>
                            <input type="text" onChange={(e) => setName(e.target.value)} id="name" />
                            <label htmlFor="name">{userError.Username}</label>
                            <input type="password" onChange={(e) => setPass(e.target.value)} id="pass" />
                            <label htmlFor="pass">{passError.Password}</label>
                            <button type="submit" className="loginButton">login</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login