import Count from './Count';
import ResetButton from './ResetButton';
import Title from './Title';
import ButtonContainer from './ButtonContainer';
import CountButton from './CountButton';

export default function Card() {
  return (
    <div className="card">
      <Title />
      <Count count={0} />
      <ResetButton />
      <ButtonContainer>
        <CountButton type="minus" />
        <CountButton type="plus" />
      </ButtonContainer>
    </div>
  );
}