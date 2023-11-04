import { useEffect, useState } from 'react';
import { FakeDataPromise } from './FakeDataPromise';
import { ApiSimulation } from './ApiSimulation';
const simplePromise = new Promise((resolve, reject) => {
  resolve('I am resolved');
});

console.log(simplePromise, 'simplePromise');

export const PromiseExercise = () => {
  const [text, setText] = useState('I am text');

  useEffect(() => {
    simplePromise.then((data) => {
      setText(data);
    });
  }, []);
  return (
    <div>
      <div>{text}</div>
      <FakeDataPromise />
      <ApiSimulation />
    </div>
  );
};
