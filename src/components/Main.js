import React from 'react';
import fire from '../fire'

function Main() {
    const logOutHandle = () =>{
        fire.auth().signOut()
        .then(() =>{
            console.log('logged Out');
        })
    }
    
    return (
        <div className='hero'>
            <nav>
                <h2>Authentication</h2>
                <button onClick={logOutHandle}>Logout</button>
            </nav>
        </div>
    )
}

export default Main
