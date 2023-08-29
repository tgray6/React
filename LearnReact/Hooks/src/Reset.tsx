import { memo } from 'react';

interface Props {
  onClick: () => void;
}

export const MemoizedResetButton = memo((props: Props) => {
  console.log('Resetting, should not see multiple re-renders when adding, subtracting, resetting');
  const { onClick } = props;
  return <button onClick={onClick}>Reset</button>;
});

//this is just for Reacts DevTools so it has a meaningful name
MemoizedResetButton.displayName = 'Reset';
