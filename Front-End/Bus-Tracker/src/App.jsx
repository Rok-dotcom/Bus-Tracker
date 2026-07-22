import { Routes, Route } from "react-router-dom";
import AppHeader from "./components/AppHeader";
import AppBody from "./components/AppBody";
import InputForm from "./components/InputForm";
import Waiting from "./components/Waiting";
import InBus from "./components/InBus";
import NewHeader from "./components/NewHeader";
import UserGuide from "./components/UserGuide";
import AppFooter from "./components/AppFooter";

function Home() {
  return (
    <>
      <NewHeader />
      <UserGuide />
      <AppBody />
      <AppFooter />
    </>
  );
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/InputForm" element={<InputForm />} />
        <Route path="/Waiting" element={<Waiting />} />
        <Route path="/InBus" element={<InBus />} />
      </Routes>
    </>
  );
}

export default App;
