import { useEffect } from "react";
import "./App.css";
import { init } from "./FDCThreeli/api";
import { open } from "@finos/fdc3";

function App() {
  useEffect(() => {
    init();
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          open({ appId: "chart-view" }).then((id) => console.log(id));
        }}
      >
        post
      </button>
    </div>
  );
}

export default App;
