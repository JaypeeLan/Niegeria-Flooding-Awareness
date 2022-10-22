import "./App.css";
import { useEffect, useState } from "react";
import Donations from "./components/Donations";
import FirstStoryPage from "./components/FirstStoryPage";
import FourthStoryPage from "./components/FourthStoryPage";
import Landing from "./components/Landing";
import SecondStoryPage from "./components/SecondStoryPage";
import ThirdStoryPage from "./components/ThirdStoryPage";

const loader =
  "https://netstorage-legit.akamaized.net/images/vllkyt5i9u5894kt3.jpg?imwidth=720";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <>
          <img
            style={{
              width: "100vw",
              height: "100vh",
              backgroundColor: "black",
            }}
            src={loader}
            alt="loader"
          />
        </>
      ) : (
        <>
          <Landing />
          <FirstStoryPage />
          <SecondStoryPage />
          <ThirdStoryPage />
          <FourthStoryPage />
          <Donations />
        </>
      )}
    </div>
  );
}

export default App;
