import { useEffect, useState } from "react";
import "./App.css";
import { QrReader } from "react-qr-reader";

function App() {
  const [data, setData] = useState("");
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(0);

  console.log(navigator);
  useEffect(() => {
    if (!navigator.getUserMedia) {
      navigator.getUserMedia({ audio: true, video: true });
    }
  }, []);
  return (
    <div>
      <div style={{ textAlign: "center", fontSize: "22px" }}>
        You scanned {data} {count} items
      </div>
      {open && (
        <QrReader
          scanDelay={2000}
          constraints={{ facingMode: "environment" }}
          onResult={(result, error) => {
            if (result) {
              setData(result?.text);
              setOpen(false);
              setCount((prev) => prev + 1);
            }
          }}
        />
      )}
      <button
        style={{
          display: "block",
          width: "100%",
          marginTop: "30px",
          border: "1px solid black",
          backgroundColor: "gray",
        }}
        onClick={() => setOpen(true)}
      >
        Scan
      </button>
    </div>
  );
}

export default App;
