// #4_8_1
// Вынесена логика таймера в пользовательский хук useCounter

import { useCounter } from "./useCounter";

export default function Counter() {
  const count = useCounter();
  return <h1>Seconds passed: {count}</h1>;
}
