// #4_8_3
// Выделен хук useInterval из useCounter для лучшего разделения ответственности

import { useCounter } from './useCounter.ts';

export default function Counter() {
  const count = useCounter(1000);
  return <h1>Seconds passed: {count}</h1>;
}
