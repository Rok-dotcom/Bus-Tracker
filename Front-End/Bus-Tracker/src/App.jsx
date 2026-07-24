import { Routes, Route } from "react-router-dom";
import AppHeader from "./components/AppHeader";
import AppBody from "./components/AppBody";
import InputForm from "./components/InputForm";
import Waiting from "./components/Waiting";
import InBus from "./components/InBus";
import NewHeader from "./components/NewHeader";
import UserGuide from "./components/UserGuide";
import AppFooter from "./components/AppFooter";
import BusInfo from "./components/BusInfo";
import BusStatus from "./components/BusStatus";

function Home() {
  return (
    <>
      <UserGuide />
      <AppBody />
      <AppFooter />
    </>
  );
}

function App() {
  return (
    <>
      <NewHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/InputForm" element={<InputForm />} />
        <Route path="/Waiting" element={<Waiting />} />
        <Route path="/InBus" element={<InBus />} />
        <Route path="/BusInfo" element={<BusInfo />} />
        <Route path="/BusStatus" element={<BusStatus />} />
      </Routes>
    </>
  );
}

export default App;
