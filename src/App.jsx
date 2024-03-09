/* eslint-disable react/prop-types */
import { useState } from 'react';
import Header from './component/Header';
import Profile from './component/Profile';
import "./App.css";

function App() {
  const [likes, setLikes] = useState(0);
  
  function handleClick() {
    setLikes(likes + 1);
  }

  const age = 19;
  const isGreen = true;

  return (
    // <div className='App'>
    //   {age >= 18 ? <h1>over age</h1> : <h1>under age</h1>}
    //   <h1 style={{color: isGreen ? "green" : "red"}}>this is color</h1>
    // </div>
    <>
      <Header />
      <Profile /><br />
      <User name= "Ghulam" title="Frontend Developer" email="ghulam@gmail.com"/>
      <User name= "Ammar" title="Backend Developer" email="ammar@gmail.com"/>
      <button className='btn btn-primary' onClick={handleClick}>Like ({likes})</button>
      <Header author="Sandika Galih"/>
    </>
  );
}

const User = (props) => {
  return (
    <>
      <h1 className='name'>{props.name}</h1>
      <h1>{props.title}</h1>
      <h1>{props.email}</h1>
    </>
  );
}

export default App
