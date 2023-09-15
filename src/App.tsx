import React from "react";
import Hello from "./Hello.svelte";
import Counter from "./Counter.svelte";
import useStore from "./store";
import { SvelteWrapper } from "./SvelteWrapper";

const SvelteHello = SvelteWrapper(Hello);
const SvelteCounter = SvelteWrapper(Counter);
function App() {
  const { count, increment } = useStore();

  return (
    <div>
      <SvelteHello
        extraText="This is a prop passed from React to Svelte"
        onClick={increment}
      />
      <button className="btn btn-success" onClick={increment}>
        count is {count}
      </button>
      <SvelteCounter name="Svelte" />
    </div>
  );
}

export default App;
