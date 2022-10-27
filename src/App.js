import "./App.css";
import Header from "./components/header/Header";
import TinderCards from "./components/tinderCards/TinderCards";
import SwipeButtons from "./components/swipeButtons/SwipeButtons";
function App() {
  return (
    <div className="App">
      {/* header */}
      <Header />
      {/* TinderCard */}
      <TinderCards />
      {/* SwipeButtons */}
      <SwipeButtons />
    </div>
  );
}

export default App;
