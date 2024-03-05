import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
