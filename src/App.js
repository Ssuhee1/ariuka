import react, { useState } from 'react';

const App = () => {
  // Data
  const [answer, setAnswer] = useState('');
  const [expression, setExpression] = useState('');
  const alertMsg = 'Your expression is null ';

  // Method
  // === Sign
  const onSign = (sign) =>
    expression ? setExpression(expression + sign) : alert(alertMsg);
  // === number
  const onNumber = (number) => setExpression(expression + number);
  // === Clear
  const onClear = () => setExpression('');
  // === Remove
  const onRemove = () => {
    expression ? setExpression(expression.slice(0, -1)) : alert(alertMsg);
  };
  // === Enter
  const onEnter = () => (expression ? solve() : alert(alertMsg));
  // === Solve
  const solve = () => {
    try {
      setAnswer(eval(expression));
    } catch {
      alert('Aldaa');
    }
  };

  // JSX
  return (
    <div>
      {/* Header */}
      <h3>My calc</h3>
      {/* Input */}
      <input
        placeholder='Your expression'
        value={expression}
        disabled
        onChange={(e) => setExpression(e.target.value)}></input>
      <br />
      {/* Sing */}
      <div>
        <button onClick={() => onSign('+')}>+</button>
        <button onClick={() => onSign('-')}>-</button>
        <button onClick={() => onSign('*')}>*</button>
        <button onClick={() => onSign('/')}>/</button>
      </div>
      {/* Numbers */}
      <div>
        <div>
          <button onClick={() => onNumber('1')}>1</button>
          <button onClick={() => onNumber('2')}>2</button>
          <button onClick={() => onNumber('3')}>3</button>
        </div>
        <div>
          <button onClick={() => onNumber('4')}>4</button>
          <button onClick={() => onNumber('5')}>5</button>
          <button onClick={() => onNumber('6')}>6</button>
        </div>
        <div>
          <button onClick={() => onNumber('7')}>7</button>
          <button onClick={() => onNumber('8')}>8</button>
          <button onClick={() => onNumber('9')}>9</button>
        </div>
        <div>
          <button onClick={onClear}>clear</button>
          <button onClick={onRemove}>X</button>
          <button onClick={() => onNumber('0')}>0</button>
          <button onClick={onEnter}>enter</button>
        </div>
      </div>
      {/* Output */}
      <input placeholder='Your answer' disabled value={answer}></input>
    </div>
  );
};

export default App;
