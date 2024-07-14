import { useCallback, useEffect, useState } from "react";
import "./App.css";
import { addIntentListener, fdc3Ready } from "@finos/fdc3";
import { TickerGrid } from "./TickerGrid";

/* function App() {
  const [counterVal, setCounterVal] = useState(0);

  const setup = useCallback(async () => {
    await fdc3Ready;
    const listener = await addIntentListener("UpdateCounterVal", (ctx) => {
      setCounterVal(ctx.id?.counterVal ?? -1);
    });

    return () => {
      listener.unsubscribe();
    };
  }, []);

  useEffect(() => {
    setup();
  }, [setup]);

  return (
    <>
      <h1>WITNESS ME</h1>
      <h3>{counterVal}</h3>
    </>
  );
} */

function App() {
  return <TickerGrid />;
}

export default App;
