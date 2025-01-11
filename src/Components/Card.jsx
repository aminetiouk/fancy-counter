import { useState } from 'react';
import Count from './Count';
import ResetButton from './ResetButton';
import Title from './Title';
import CountButton from './CountButton';
import ButtonContainer from './ButtonContainer';

export default function Card() {
  const [count, setCount] = useState(0);
  const locked = count === 10 ? true : false;
  return (
    <div className={`card ${locked ? "card--limit" : ""}`}>
      <Title locked={locked}/>
      <Count count={count} />
      <ResetButton setCount={setCount} />
      <ButtonContainer>
        <CountButton type="minus" setCount={setCount} locked={locked} />
        <CountButton type="plus" setCount={setCount} locked={locked}/>
      </ButtonContainer>
    </div>
  );
}