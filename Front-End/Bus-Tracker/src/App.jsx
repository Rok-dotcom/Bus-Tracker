import { Routes, Route } from "react-router-dom";
import AppHeader from "./components/AppHeader";
import AppBody from "./components/AppBody";
import IntputForm from "./components/InputForm";
import Waiting from "./components/Waiting";
import InBus from "./components/InBus";
import NewHeader from "./components/NewHeader";
import UserGuide from "./components/UserGuide";
import AppFooter from "./components/AppFooter";

function App() {
  return (
    <>
      <NewHeader></NewHeader>
      <UserGuide></UserGuide>

      <Routes>
        <Route path="/" element={<AppBody />} />
        <Route path="/InputForm" element={<IntputForm />} />
        <Route path="/Waiting" element={<Waiting />} />
        <Route path="/InBus" element={<InBus />} />
      </Routes>

      <AppFooter></AppFooter>
    </>
  );
}

export default App;
