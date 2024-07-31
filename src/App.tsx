import "./App.css";
import { raiseIntent } from "@finos/fdc3";
import { guid } from "./FDCThreeli/utils";

function App() {
  return (
    <div>
      <button
        onClick={() => {
          raiseIntent("ViewChart", { type: "foo", id: { ticker: guid() } });
        }}
      >
        post
      </button>
    </div>
  );
}

export default App;
