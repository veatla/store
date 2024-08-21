import createStore from "../../core/src/store";
import { withReact } from "../../core/src/react";
import { useEffect } from "react";

const store = withReact(createStore({ text: 1, number: 1 }));

const NumberRenderer = () => {
  const length = store((store) => store.number);

  useEffect(() => {
    console.log(`state => state.value updated`);
  }, [length]);

  return (
    <button
      onClick={() => {
        store.set({ number: length + 1 });
      }}
    >
      {length}
    </button>
  );
};

const StringRenderer = () => {
  const text = store((modal) => modal.text);

  useEffect(() => {
    console.log(`state => state.text updated`);
  }, [text]);

  return <button onClick={() => store.set({ text: text + 1 })}>{text}</button>;
};

const App = () => {
  return (
    <div>
      <h1>Hello world</h1>
      <NumberRenderer />
      <StringRenderer />
    </div>
  );
};

export default App;
