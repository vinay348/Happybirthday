import { BrowserRouter, Routes, Route } from "react-router-dom";
import PasswordPage from "./pages/PasswordPage";
import CountdownPage from "./pages/CountdownPage";
import BirthdayPage from "./pages/BirthdayPage";
import WishesPage from "./pages/WishesPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PasswordPage />} />
        <Route path="/countdown" element={<CountdownPage />} />
        <Route path="/birthday" element={<BirthdayPage />} />
        <Route path="/wishes" element={<WishesPage />} />


      </Routes>
    </BrowserRouter>
  );
}

export default Router;
