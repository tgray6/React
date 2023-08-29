import { useEffect, useReducer, useRef, useMemo, useCallback } from 'react';
import getPerson from './getPerson';
import LoadingIcons from 'react-loading-icons';
import { MemoizedResetButton } from './Reset';

function sillyExpensiveFunction(): number {
  console.log('Executing silly function');
  let sum = 0;
  for (let i = 0; i < 10000; i++) {
    sum += i;
  }
  return sum;
}

interface State {
  name: string | undefined;
  score: number;
  loading: boolean;
}

type Action =
  | {
      type: 'initialize';
      name: string;
    }
  | {
      type: 'increment';
    }
  | {
      type: 'decrement';
    }
  | {
      type: 'reset';
    };

function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'initialize': {
      return {
        name: action.name,
        score: 0,
        loading: false,
      };
    }
    case 'increment': {
      return {
        ...state,
        score: state.score + 1,
      };
    }
    case 'decrement': {
      return {
        ...state,
        score: state.score - 1,
      };
    }
    case 'reset': {
      return {
        ...state,
        score: 0,
      };
    }
    default: {
      return state;
    }
  }
}

export default function PersonScore() {
  const addButtonRef = useRef<HTMLButtonElement>(null);
  const [{ name, score, loading }, dispatch] = useReducer(reducer, {
    name: undefined,
    score: 0,
    loading: true,
  });

  useEffect(() => {
    getPerson().then(({ name }) => {
      dispatch({ type: 'initialize', name });
    });
  }, []);

  useEffect(() => {
    if (!loading) {
      addButtonRef.current?.focus();
    }
  }, [loading]);

  const expensiveCalculation = useMemo(() => sillyExpensiveFunction(), []);

  const handleReset = useCallback(() => dispatch({ type: 'reset' }), []);

  if (loading) {
    return <LoadingIcons.Circles />;
  }
  return (
    <div>
      <h3>
        {name}, {score}
      </h3>
      <p>{`Expensive calculation example: ${expensiveCalculation}`}</p>
      <button onClick={() => dispatch({ type: 'decrement' })}>Subtract</button>
      <button ref={addButtonRef} onClick={() => dispatch({ type: 'increment' })}>
        Add
      </button>
      <MemoizedResetButton onClick={handleReset} />
    </div>
  );
}
