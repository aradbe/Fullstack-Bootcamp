import "./App.css";
import ShoppingCart from "./components/ShoppingCart";
import ThemeDemo from "./components/ThemeDemo";
import FormWizard from "./components/FormWizard";
import { ThemeProvider } from "./context/ThemeContext.jsx";

function App() {
  return (
    <div className="app">
      <section className="exercise">
        <h1>Exercise 1 - Shopping Cart with useReducer</h1>
        <ShoppingCart />
      </section>

      <section className="exercise">
        <h1>Exercise 2 - Theme Context</h1>

        <ThemeProvider>
          <ThemeDemo />
        </ThemeProvider>
      </section>

      <section className="exercise">
        <h1>Exercise 3 - Multi Step Form with useReducer</h1>
        <FormWizard />
      </section>
    </div>
  );
}

export default App;