import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ScrollManager } from "./components/shared";
import Home from "./pages/Home";
import About from "./pages/About";
import FounderPage from "./pages/FounderPage";
import ComfortBoxPage from "./pages/ComfortBoxPage";

function Layout() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-clip">
      <ScrollManager />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/founder" element={<FounderPage />} />
          <Route path="/comfort-box" element={<ComfortBoxPage />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
