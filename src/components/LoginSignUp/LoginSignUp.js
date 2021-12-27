import React, { useState } from 'react'
import './LoginSignUp.css'

const LoginSignUp = () => {
    const [showLogin, setShowLogin] = useState(false);

    return (
        <div className={`LoginSignUp ${showLogin && 'active'}`}>
            <div className="LoginSignUp-container">
                <div className='blueBg'>
                    <div className='box signin'>
                        <h2>Ya tienes una cuenta?</h2>
                        <button  
                            onClick={() => setShowLogin(!showLogin)}
                            className="signinBtn"
                        >Iniciar</button>
                    </div>
                    <div className='box signup'>
                        <h2>No tienes una cuenta?</h2>
                        <button  
                            onClick={() => setShowLogin(!showLogin)}
                            className="signupBtn"
                        >Registrate Aqui</button>
                    </div>
                </div>
                <div className={`formBx ${showLogin && 'active'}`}>
                    <div className='form signinForm'>
                        <form>
                            <h3>Sign In</h3>
                            <input type="text" placeholder='Username' />
                            <input type="password" placeholder='Password' />
                            <input type="submit" value="Login" />
                            <a href='#' className='forgot'>Forgot Password</a>
                        </form>
                    </div>

                    <div className='form signupForm'>
                        <form>
                            <h3>Sign Up</h3>
                            <input type="text" placeholder='Username' />
                            <input type="text" placeholder='Email' />
                            <input type="password" placeholder='Password' />
                            <input type="password" placeholder='Confirm Password' />
                            <input type="submit" value="Register" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginSignUp
