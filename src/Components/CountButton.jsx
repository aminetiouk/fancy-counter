import { MinusIcon, PlusIcon } from '@radix-ui/react-icons';

export default function CountButton({ setCount, type }) {
  const handleClick = () => {
    setCount(c => {
      if (type === 'minus') {
        const newCount = c - 1;
        if (newCount < 10) {
          return 0;
        }
        return newCount;
      } else {
        const newCount = c + 1;
        if (newCount > 10) {
          return 10;
        }
        return newCount;
      }
    });
  };

  return (
      <button className="count-btn" onClick={handleClick}>
        {type === 'minus' ? (
          <MinusIcon className="count-btn-icon" />
        ) : (
          <PlusIcon className="count-btn-icon" />
        )}
      </button>
  );
}