import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/pages/Homepage/Homepage";
import Layout from "./components/layout/Layout";
import ExplorePage from "./components/pages/Explore/ExplorePage";
import HelpPage from "./components/pages/HelpCenter/HelpPage";
import FaqPage from "./components/pages/FaqPage/FaqPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/faq" element={<FaqPage />} />
      </Route>
    </Routes>
  );
}

export default App;
