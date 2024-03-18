import { useEffect, useState } from "react";
import "./App.css";
import { QrReader } from "react-qr-reader";

function App() {
  const [data, setData] = useState("aaa");
  const [open, setOpen] = useState(false);

  console.log(navigator);
  useEffect(() => {
    if (!navigator.getUserMedia) {
      navigator.getUserMedia({ audio: true, video: true });
    }
  }, []);
  return (
    <div>
      dddd
      {data}
      {open && (
        <QrReader
          scanDelay={2000}
          facingMode={"environment"}
          onResult={(result, error) => {
            if (result) {
              setData(result?.text);
              setOpen(false);
            }
          }}
        />
      )}
      <button onClick={() => setOpen(true)}>Scan</button>
    </div>
  );
}

export default App;
