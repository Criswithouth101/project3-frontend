import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InsightsList from "./pages/InsightsList";
import InsightDetail from "./pages/InsightDetail";
import InsightForm from "./pages/InsightForm";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InsightsList />} />
        <Route path="/insights/:id" element={<InsightDetail />} />
        <Route path="/add" element={<InsightForm />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
