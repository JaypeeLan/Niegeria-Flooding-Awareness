import "./App.css";
import Cards from "./components/Cards";
import Donations from "./components/Donations";
import FirstStoryPage from "./components/FirstStoryPage";
import FourthStoryPage from "./components/FourthStoryPage";
// import ReactPlayer from "react-player";
import Landing from "./components/Landing";
import SecondStoryPage from "./components/SecondStoryPage";
import ThirdStoryPage from "./components/ThirdStoryPage";

function App() {
  return (
    <div className="App">
      <Landing />
      <FirstStoryPage />
      <SecondStoryPage />
      <ThirdStoryPage />
      <FourthStoryPage />
      <Donations />
      <Cards />
    </div>
  );
}

export default App;
