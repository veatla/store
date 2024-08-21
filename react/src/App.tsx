import createStore from "../../core/src/store";
import { withReact } from "../../core/src/react";
import { useEffect } from "react";

enum Modal {
  None,
  Default,
}
const store = withReact(createStore(Modal.None));

const NumberRenderer = () => {
  const length = store();

  useEffect(() => {
    console.log(`state => state.value updated`);
  }, [length]);

  return (
    <button
      onClick={() => {
        store.setState(Modal.Default);
      }}
    >
      {length}
    </button>
  );
};

const StringRenderer = () => {
  const text = store();

  useEffect(() => {
    console.log(`state => state.text updated`);
  }, [text]);

  return <button onClick={() => store.setState(Modal.None)}>{text}</button>;
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
