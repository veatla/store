import { useSyncExternalStore } from "react";
import { createStore } from "@veatla/store";

const store = createStore({
  value: 1,
});

const App = () => {
  const state = useSyncExternalStore(store.subscribe, store.get);

  return (
    <div>
      <h1>Hello world</h1>
      <button
        onClick={() => {
          store.set({
            value: state.value + 1,
          });
        }}
      >
        Update
      </button>
      {state.value}
    </div>
  );
};

export default App;
