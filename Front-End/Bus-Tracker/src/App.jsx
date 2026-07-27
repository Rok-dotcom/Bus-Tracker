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
import UpdateBusDetails from "./components/UpdateBusDetails";
import Feedback from "./components/Header/Feedback";
import Suggestion from "./components/Header/Suggestion";
import Help from "./components/Header/Help";
import FeedbackSubmitted from "./components/Header/feedbackSubmitted";
import SuggestionSubmitted from "./components/Header/SuggestionSubmitted";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Register from "./components/Register";

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
        <Route
          path="/InBus"
          element={
            <ProtectedRoute>
              <InBus />
            </ProtectedRoute>
          }
        />
        <Route path="/BusInfo" element={<BusInfo />} />

        <Route
          path="/BusStatus"
          element={
            <ProtectedRoute>
              <BusStatus />
            </ProtectedRoute>
          }
        />
        <Route
          path="/UpdateBusDetails"
          element={
            <ProtectedRoute>
              <UpdateBusDetails />
            </ProtectedRoute>
          }
        />
        <Route path="/userFeedback" element={<Feedback />} />
        <Route path="/userSuggestion" element={<Suggestion />} />
        <Route path="/userHelp" element={<Help />} />
        <Route path="/feedbackSubmitted" element={<FeedbackSubmitted />} />
        <Route path="/suggestionSubmitted" element={<SuggestionSubmitted />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
