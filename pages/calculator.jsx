import { useEffect, useState } from "react";

function Calculator() {
  const [op1, setOp1] = useState(0);
  const [op2, setOp2] = useState(0);
  const [op, setOp] = useState("+");
  const [ans, setAns] = useState(0);
  const [number, setNumber] = useState(0);
  const [task, setTask] = useState("factorial");
  const [sol, setSol] = useState(0);

  useEffect(() => {
    setAns("...");
    setSol("...");
  }, [op1, op2, op, number]);

  const solve = e => {
    e.preventDefault();
    const o1 = parseInt(op1);
    const o2 = parseInt(op2);
    setAns(parseInt(op1) + parseInt(op2));
    switch (op) {
      case "+":
        setAns(o1 + o2);
        break;
      case "-":
        setAns(o1 - o2);
        break;
      case "*":
        setAns(o1 * o2);
        break;
      case "/":
        setAns(o1 / o2);
        break;
      default:
        setAns(0);
        break;
    }
  };
  const calculate = e => {
    e.preventDefault();
    const num = parseInt(number);
    switch (task) {
      case "factorial":
        let ansFac = 1;
        for (let i = 1; i <= num; i++) {
          ansFac *= i;
        }
        setSol(ansFac);
        break;
      case "fibonacci":
        const fib = [0, 1];

        for (let i = 2; i <= num; i++) {
          fib.push(fib[i - 1] + fib[i - 2]);
        }
        setSol(fib[num]);
        break;
      default:
        setAns(0);
        break;
    }
  };
  return (
    <div>
      <h1>Calculator</h1>
      <hr />
      <form>
        <input
          type="number"
          placeholder="op1"
          onChange={e => setOp1(e.target.value)}
        />
        <select onChange={e => setOp(e.target.value)}>
          <option value="+">Add</option>
          <option value="-">Subtract</option>
          <option value="*">Multiply</option>
          <option value="/">Divide</option>
        </select>
        <input
          type="number"
          placeholder="op2"
          onChange={e => setOp2(e.target.value)}
        />
        <button type="submit" onClick={solve}>
          Solve
        </button>
        <hr />
        <h1>
          {op1 + "  " + op + " " + op2} = {ans}
        </h1>
      </form>
      <hr />
      <form>
        <h1>Advanced Calculator</h1>
        <hr />
        <input type="number" onChange={e => setNumber(e.target.value)} />
        <select onChange={e => setTask(e.target.value)}>
          <option value="factorial">Factorial</option>
          <option value="fibonacci">Fibonacci Number</option>
        </select>
        <hr />
        <button type="submit" onClick={calculate}>
          Solve
        </button>
        <h1>
          {number + " -> "} {sol}
        </h1>
      </form>
    </div>
  );
}

export default Calculator;
