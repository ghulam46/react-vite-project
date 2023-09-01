/* eslint-disable react/prop-types */
import { useState } from 'react';
import Header from './component/Header';
import Profile from './component/Profile';

function App() {
  const [likes, setLikes] = useState(0);
  
  function handleClick() {
    setLikes(likes + 1);
  }
  return (
    <>
      <Header />
      <Profile /><br />
      <User name= "Ghulam" title="Frontend Developer" email="ghulam@gmail.com"/>
      <User name= "Ammar" title="Backend Developer" email="ammar@gmail.com"/>
      <button onClick={handleClick}>Like ({likes})</button>
      {/*<Header author="Sandika Galih"/>*/}
    </>
  );
}

const User = (props) => {
  return (
    <>
      <h1>{props.name}</h1>
      <h1>{props.title}</h1>
      <h1>{props.email}</h1>
    </>
  );
}

export default App
