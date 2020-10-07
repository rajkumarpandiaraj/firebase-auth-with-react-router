import React from 'react'

function Form(props) {
    const {hasAcc,
            email,
            setEmail,
            password,
            setPassword,
            signUpHandle,
            logInHandle,
            hasAccHandle,
            } = props;
    return (
        <div className='login'>
            <form className='loginContainer'>
                <label>Email</label>
                <input type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <label>Password</label>
                <input type='text' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <div className='btnContainer'>
                    {
                        !hasAcc && <div className='btnContainer'>
                                        <button onClick={signUpHandle}>SignUp</button>
                                        <p>Have an Acc ?<span onClick={hasAccHandle}>SignIn</span> </p>
                                    </div>
                    }
                    {
                        hasAcc && <div className='btnContainer'>
                                    <button onClick={logInHandle}>SignIn</button>
                                    <p>No Acc ?<span onClick={hasAccHandle}>SignUp</span> </p>
                                </div>
                    }
                </div>
            </form>
        </div>
    )
}

export default Form
