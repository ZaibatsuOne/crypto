import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/pages/Homepage/Homepage";
import Layout from "./components/layout/Layout";
import ExplorePage from "./components/pages/Explore/ExplorePage";
import HelpPage from "./components/pages/HelpCenter/HelpPage";
import FaqPage from "./components/pages/FaqPage/FaqPage";
import ContactPage from "./components/pages/Contact/ContactPage";
import BlogPage from "./components/pages/Blog/BlogPage";
import BlogCard from "./components/pages/Blog/Blog-card/BlogCard";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="/marketplace" element={<ExplorePage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogCard />} />
      </Route>
    </Routes>
  );
}

export default App;
