import { useState } from 'react';
import Count from './Count';
import ResetButton from './ResetButton';
import Title from './Title';
import CountButton from './CountButton';
import ButtonContainer from './ButtonContainer';

export default function Card() {
  const [count, setCount] = useState(0);
  return (
    <div className="card">
      <Title />
      <Count count={count} />
      <ResetButton setCount={setCount} />
      <ButtonContainer>
        <CountButton type="minus" setCount={setCount} />
        <CountButton type="plus" setCount={setCount} />
      </ButtonContainer>
    </div>
  );
}