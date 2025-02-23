import { useState } from 'react';

export function ReactOnClick() {
  const [text, setText] = useState('Ktory przycisk zostal klikniety');
  const [number, setNumber] = useState(0);

  function handleClick(event) {
    setText(event.target.innerHTML);
  }

  function handleClickNumber(event) {
    setNumber(event.target.innerHTML);
  }
  return (
    <div>
      <h1>React OnClick</h1>
      <button onClick={handleClick}>Drugi przycisk</button>
      <button onClick={handleClick}>Pierwszy przycisk</button>

      <button onClick={handleClickNumber}>5</button>
      <button onClick={handleClickNumber}>10</button>
      <p>{text}</p>
      <p>{number}</p>
    </div>
  );
}
