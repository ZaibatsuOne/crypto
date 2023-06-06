import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/pages/Homepage/Homepage";
import Layout from "./components/layout/Layout";
import ExplorePage from "./components/pages/Explore/ExplorePage";
import HelpCenter from "./components/pages/HelpCenter/HelpCenter";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/help" element={<HelpCenter />} />
      </Route>
    </Routes>
  );
}

export default App;
