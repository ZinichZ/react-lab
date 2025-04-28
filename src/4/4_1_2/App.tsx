// #4_1_2
// Использован useState вместо useRef для принудительного перерендера

import { useState } from 'react';

export default function Toggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <button onClick={() => {
      setIsOn(!isOn);
    }}>
      {isOn ? 'Вкл' : 'Выкл'}
    </button>
  );
}