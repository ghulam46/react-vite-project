/* eslint-disable react/prop-types */
import { useState } from 'react';
import Header from './component/Header';

function App() {
  const [likes, setLikes] = useState(0);
  
  function handleClick() {
    setLikes(likes + 1);
  }
  return (
    <>
      <Header />

      <button onClick={handleClick}>Like ({likes})</button>
      {/*<Header author="Sandika Galih"/>*/}
    </>
  );
}

export default App
