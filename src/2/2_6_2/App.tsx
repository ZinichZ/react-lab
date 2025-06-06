// #2_6_2
// Предотвращена мутации initialPosition для избежания смещения фона

import { useState } from 'react';
import Background from './Background';
import Box from './Box';

export type Position = { x: number; y: number };

const initialPosition = {
  x: 0,
  y: 0
};

export default function Canvas() {
  const [shape, setShape] = useState({
    color: 'orange',
    position: initialPosition
  });

  function handleMove(dx: number, dy: number) {
    setShape({
      ...shape,
      position: {x: shape.position.x + dx, y: shape.position.y + dy}
    });
  }

  function handleColorChange(e: any) {
    setShape({
      ...shape,
      color: e.target.value
    });
  }

  return (
    <>
      <select value={shape.color} onChange={handleColorChange}>
        <option value="orange">orange</option>
        <option value="lightpink">lightpink</option>
        <option value="aliceblue">aliceblue</option>
      </select>
      <Background position={initialPosition} />
      <Box color={shape.color} position={shape.position} onMove={handleMove}>
        Drag me!
      </Box>
    </>
  );
}