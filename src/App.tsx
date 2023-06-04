import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/pages/Homepage/Homepage";
import Layout from "./components/layout/Layout";
import ExplorePage from "./components/pages/Explore/ExplorePage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="/explore" element={<ExplorePage />} />
      </Route>
    </Routes>
  );
}

export default App;
