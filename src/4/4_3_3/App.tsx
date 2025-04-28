// #4_3_3
// Предотвращено двойное срабатывание setInterval, очищая setInterval при размонтировании

import { useState } from 'react';
import Counter from './Counter.tsx';

export default function Form() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(s => !s)}>{show ? 'Hide' : 'Show'} counter</button>
      <br />
      <hr />
      {show && <Counter />}
    </>
  );
}
