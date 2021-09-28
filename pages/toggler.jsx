import { useState } from "react";

function Toggler() {
  const [on, setOn] = useState(false);
  const toggle = () => {
    setOn(!on);
  };
  return (
    <div>
      <h1>Toggler</h1>
      <hr />
      <button onClick={toggle}>Toggle</button>
      {on && <h2>I am Visible</h2>}
    </div>
  );
}

export default Toggler;
