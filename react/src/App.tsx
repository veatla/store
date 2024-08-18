import { createStore } from "@veatla/store";
import { withReact } from "@veatla/store/react";
import { useEffect } from "react";

const store = withReact(
  createStore({
    value: 1,
    text: "",
  })
);

const rndm_text = (l: number) => {
  const randomStr = (Math.random() + 1).toString(36).substring(l);
  return randomStr;
};

const NumberRenderer = () => {
  const length = store((state) => state.value);

  useEffect(() => {
    console.log(`state => state.value updated`);
  }, [length]);

  return (
    <button
      onClick={() => {
        store.setState({
          value: length + 1,
        });
      }}
    >
      {length}
    </button>
  );
};

const StringRenderer = () => {
  const text = store((state) => state.text);

  useEffect(() => {
    console.log(`state => state.text updated`);
  }, [text]);

  return (
    <button
      onClick={() =>
        store.setState({
          text: rndm_text(8),
        })
      }
    >
      {text}
    </button>
  );
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
