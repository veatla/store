# @veatla/store
Simple store that uses [Observer Pattern](https://en.wikipedia.org/wiki/Observer_pattern)

## How does it works?
We can create store with `createStore(initialState)` function
```ts
import { createStore } from "@veatla/store";
import { withReact } from "@veatla/store/react";

// create store with initialState outside React app
const useStore = withReact(createStore({
    num: 1
}));

const App = () => {
    // get store.num and subscribe to changes
    // it will update only if value changed
    // store uses custom functon to check changes 
    const store = useStore((store) => store.num);

    const updateValue = () => {
        // update store
        // After set it will emit event to subscribers, to call re-render
        useStore.setStore({
            num: store + 1
        })
    }

    const silentUpdateValue = () => {
        // It will change store value
        // but it WILL NOT emit event to subscribers
        useStore.setStore({
            num: store + 1
        }, false)
    }

    return (
        <div>
            <button onClick={updateValue}>
                Update Event
            </button>
            <button onClick={silentUpdateValue}>
                Update Event
            </button>
            {store}
        </div>
    )
}

export default App;
```
