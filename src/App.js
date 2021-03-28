import logo from "./logo.svg";
import "./App.css";
import { MainPage } from "./pages/MainPage";
import UserContextProvider from "./context/core";
import { AllPages } from "./pages/AllPages";

function App() {
  return (
    <>
      <UserContextProvider>
        <AllPages />
      </UserContextProvider>
    </>
  );
}

export default App;
