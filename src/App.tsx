import "./App.css";
import HomePage from "./components/HomePage";
import { Provider } from "react-redux";
import { store } from "./redux";

function App() {
  return <div className="App">
    <Provider store={store}>
      <HomePage />
    </Provider>
  </div>;
}

export default App;
