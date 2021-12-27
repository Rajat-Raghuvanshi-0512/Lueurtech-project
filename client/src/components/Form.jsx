import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import swal from 'sweetalert';

const Form = () => {
    const [state, setState] = useState({ name: "", email: "", pass: "", cpass: "" })
    const handleOnChange = (e) => {
        let value = e.target.value
        let name = e.target.name
        setState({ ...state, [name]: value })
    }
    const PostData = async (e) => {
        try {
            e.preventDefault();
            const { name, email, pass, cpass } = state;
            const res = await fetch("http://localhost:5000/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name, email, pass, cpass
                })
            })
            const data = await res.json();
            if (res.status === 400 || !data) {
                swal("Error!", `${data.errors[0].msg} ☹️`, "error");
            }
            else {
                setState({ name: "", email: "", pass: "", cpass: "" })
                swal("Success!", "Registration Successful😄", "success");
            }
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <>
            <div className="form">
                <img className="wave" src="img/wave.png" alt='' />
                <div className="container">
                    <div className="img">
                        <img src="img/bg.svg" alt='' />
                    </div>
                    <div className="login-content">
                        <form >
                            <img src="img/avatar.svg" alt='' />
                            <h2 className="title">Welcome</h2>
                            <div className="input-div one">
                                <div className="i">
                                    <i className="fas fa-user"></i>
                                </div>
                                <div className="div">
                                    <input type="text" className="input" value={state.name} name="name" onChange={handleOnChange} required placeholder='Username' />
                                </div>
                            </div>
                            <div className="input-div email">
                                <div className="i">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div className="div">
                                    <input type="email" className="input" name="email" onChange={handleOnChange} value={state.email} required placeholder='E-mail' />
                                </div>
                            </div>
                            <div className="input-div pass">
                                <div className="i">
                                    <i className="fas fa-lock"></i>
                                </div>
                                <div className="div">
                                    <input type="password" className="input" name="pass" onChange={handleOnChange} value={state.pass} required placeholder='Password' />
                                </div>
                            </div>
                            <div className="input-div cpass">
                                <div className="i">
                                    <i className="fas fa-lock"></i>
                                </div>
                                <div className="div">
                                    <input type="password" className="input" name="cpass" onChange={handleOnChange} value={state.cpass} required placeholder='Confirm Password' />
                                </div>
                            </div>
                            <Link to="/">Forgot Password?</Link>
                            <button className="btn" onClick={PostData}>Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form
