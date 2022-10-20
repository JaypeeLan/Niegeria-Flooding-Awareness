import "./App.css";
import FirstStoryPage from "./components/FirstStoryPage";
// import ReactPlayer from "react-player";
import Landing from "./components/Landing";
import SecondStoryPage from "./components/SecondStoryPage";

function App() {
  return (
    <div className="App">
      <Landing />
      <FirstStoryPage />
      <SecondStoryPage />
    </div>
  );
}

export default App;
