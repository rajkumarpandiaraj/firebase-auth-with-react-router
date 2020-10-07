import React,{useEffect, useState} from 'react';
import './App.css';
import Form from './components/Form';
import Main from './components/Main';
import PrivateRoute from './components/PrivateRoute';
import fire from './fire'
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hasAcc, setHasAcc] = useState(true);
  
  useEffect(() =>{
    AuthListener();
  })

  const signUpHandle = (e) =>{
    e.preventDefault();
    console.log('suc');
    fire.auth().createUserWithEmailAndPassword(email, password)
    .then(cred => {
      console.log(cred.user);
      setEmail('');
      setPassword('');
    })
  }

  

  const logInHandle = (e) =>{
    e.preventDefault();
    fire.auth()
    .signInWithEmailAndPassword(email, password)
    .then(cred => {
      console.log(cred.user);
      console.log('logged In');
      setEmail('');
      setPassword('');

    })
  }

  const AuthListener = () =>{
    fire.auth().onAuthStateChanged(user =>{
      if(user){
        setUser(user);
      }else{
        setUser('')
      }
    })
  }

  const hasAccHandle = () =>{
    setHasAcc(!hasAcc);
  }
  return (
    <Router>
    <div className="App">
      <PrivateRoute path='/' user={user} component={Main} />
      <Route exact path='/login'>
          <Form hasAcc={hasAcc}
                      email={email}
                      password={password}
                      setEmail={setEmail}
                      setPassword={setPassword}
                      signUpHandle={signUpHandle}
                      logInHandle={logInHandle}
                      hasAccHandle={hasAccHandle}/>
      </Route>
      {/* {
        !user && <Form hasAcc={hasAcc}
                  email={email}
                  password={password}
                  setEmail={setEmail}
                  setPassword={setPassword}
                  signUpHandle={signUpHandle}
                  logInHandle={logInHandle}
                  hasAccHandle={hasAccHandle}
                  />
      }
      {
        user && <Main logOutHandle={logOutHandle}/>
      } */}
    </div>
    </Router>

  );
}

export default App;
