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

      <button onClick={handleClick}>Like ({likes})</button>
      {/*<Header author="Sandika Galih"/>*/}
    </>
  );
}

export default App
