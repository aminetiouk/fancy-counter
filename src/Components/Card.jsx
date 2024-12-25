import Count from './Count';
import ResetButton from './ResetButton';
import Title from './Title';

export default function Card() {
  return (
    <div className="card">
      <Title />
      <Count count={0} />
      <ResetButton />
    </div>
  );
}