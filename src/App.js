import "./App.css";
import Header from "./Header";
import TinderCard from "./TinderCards";
import SwipeButtons from "./SwipeButtons";

function App() {
  return (
    <div className="app">
      {/* header */}
      <Header />
      {/* TinderCard */}
      <TinderCard />
      {/* SwipeButtons */}
      <SwipeButtons />
    </div>
  );
}

export default App;
