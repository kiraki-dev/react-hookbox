import styled from '@emotion/styled';
import { useImmediateEffect } from '@react-hookbox/use-immediate-effect';
import { useEffect, useState } from 'react';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('useEffect', `count=${count}`, 'runs after rendering');
  }, [count]);

  useImmediateEffect(() => {
    console.log('useImmediateEffect', `count=${count}`, 'runs during rendering');
  }, [count]);

  console.log('render', `count=${count}`);

  return (
    <StyledApp>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </StyledApp>
  );
}

export default App;
