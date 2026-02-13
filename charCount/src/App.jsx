import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState("");
  const limit = 100;
  const remaining = limit - data.length;

  return (
    <div>
      <textarea
        value={data}
        maxLength={limit}
        onChange={(e) => setData(e.target.value)}
      />

      <h3>Characters: {data.length}</h3>

      <p style={{ color: remaining <= 10 ? "red" : "green" }}>
        Remaining: {remaining}
      </p>
    </div>
  );
}

export default App;
