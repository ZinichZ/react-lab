// #2_1_1
// Исправлен некорректный вызов обработчика события в компоненте LightSwitch

export default function LightSwitch() {
  function handleClick() {
    let bodyStyle = document.body.style;
    if (bodyStyle.backgroundColor === 'black')
      bodyStyle.backgroundColor = 'white';
    else
      bodyStyle.backgroundColor = 'black';
  }

  return (
    <button onClick={handleClick}>Toggle the lights</button>
  );
}