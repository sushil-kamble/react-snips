import { useState } from "react";
function Twoway() {
  const [data, setData] = useState("");

  return (
    <div>
      <h1>Two Way Data Binding</h1>
      <hr />
      <input
        type="text"
        placeholder="Type here..."
        onChange={e => setData(e.target.value)}
      />
      <h1>Data: {data}</h1>
    </div>
  );
}

export default Twoway;
