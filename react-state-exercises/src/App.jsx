import { Component } from "react";

import Hudini from "./components/exercise1/Hudini";

import Landing from "./components/exercise2/Landing";
import Home from "./components/exercise2/Home";

import Ex4Home from "./components/exercise4/Home";

class App extends Component {
  state = {
    user: "Robyn",
    store: [
      { item: "XSPS Pro Player", price: 800, discount: 0.2, hottest: false },
      { item: "Gizem Backwatch", price: 230, discount: 0.6, hottest: false },
      {
        item: "Surround Sound Pelican",
        price: 3099,
        discount: 0.05,
        hottest: true,
      },
    ],
    shouldDiscount: false,
    currentPage: "Landing",
  };

  render() {
    return (
      <div>
        <h2>Exercise 1</h2>
        <Hudini />

        <hr />

        <h2>Exercise 2</h2>
        <Landing user={this.state.user} store={this.state.store} />
        <Home store={this.state.store} />

        <hr />

        <h2>Exercise 3</h2>

        <button onClick={() => this.setState({ currentPage: "Landing" })}>
          Landing
        </button>

        <button onClick={() => this.setState({ currentPage: "Home" })}>
          Home
        </button>

        {this.state.currentPage === "Landing" ? (
          <Landing user={this.state.user} store={this.state.store} />
        ) : (
          <Home store={this.state.store} />
        )}

        <hr />

        <h2>Exercise 4</h2>

        <button
          onClick={() =>
            this.setState({ shouldDiscount: !this.state.shouldDiscount })
          }
        >
          Toggle Discount
        </button>

        <Ex4Home
          store={this.state.store}
          shouldDiscount={this.state.shouldDiscount}
        />
      </div>
    );
  }
}

export default App;
