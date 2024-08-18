import "./app.css";
import App from "./App.svelte";
import { withSvelte } from '@veatla/store/svelte';
import { createStore } from '@veatla/store';


export const store = withSvelte(
  createStore({
    value: "Hello",
  })
);
const app = new App({
  target: document.getElementById("app")!,
});

export default app;
