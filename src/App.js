import React, { PureComponent } from "react";
import { Provider } from "react-redux";

import Counter from "./components/Counter";
import configureStore from "./store";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const store = configureStore();

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <div style={styles}>
          <h2>Watch the magic happen {"\u2728"}</h2>
          <div>
            <Counter />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
