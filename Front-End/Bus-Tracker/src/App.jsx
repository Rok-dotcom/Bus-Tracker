import { Routes, Route } from "react-router-dom";
import AppHeader from "./components/AppHeader";
import AppBody from "./components/AppBody";
import InBus from "./components/InBus";
import Waiting from "./components/Waiting";

function App() {
  return (
    <>
      <AppHeader />

      <Routes>
        <Route path="/" element={<AppBody />} />
        <Route path="/InBus" element={<InBus />} />
        <Route path="/Waiting" element={<Waiting />} />
      </Routes>
    </>
  );
}

export default App;
