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
import ConnectWalletPage from "./components/pages/ConnectWallet/ConnectWalletPage";
import NotFoundPage from "./components/pages/NotFound/NotFoundPage";
import ActivityPage from "./components/pages/Activity/ActivityPage";
import AuthorPage from "./components/pages/Author/AuthorPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/marketplace" element={<ExplorePage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogCard />} />
        <Route path="/connect" element={<ConnectWalletPage />} />
        <Route path="/activity" element={<ActivityPage />} />
        <Route path="/author/:id" element={<AuthorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
