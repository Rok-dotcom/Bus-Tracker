import { Routes, Route } from "react-router-dom";
import AppBody from "./components/Home/AppBody";
import Waiting from "./Features/WaitingUser/Waiting";
import InBus from "./Features/InBusUser/InBus";
import NewHeader from "./components/Header/NewHeader";
import UserGuide from "./components/Home/UserGuide";
import BusInfo from "./Features/InBusUser/BusInfo";
import BusStatus from "./Features/WaitingUser/BusStatus";
import UpdateBusDetails from "./Features/InBusUser/UpdateBusDetails";
import Feedback from "./components/Header/Feedback";
import Suggestion from "./components/Header/Suggestion";
import Help from "./components/Header/Help";
import FeedbackSubmitted from "./components/Header/feedbackSubmitted";
import SuggestionSubmitted from "./components/Header/SuggestionSubmitted";
import Login from "./Features/auth/Login";
import ProtectedRoute from "./components/common/ProtectedRoute";
import Register from "./Features/auth/Register";
import AppFooter from "./components/Footer/AppFooter";

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
