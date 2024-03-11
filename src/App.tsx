import AuthOnlyLayout from "@/layouts/AuthOnlyLayout";
import MainLayout from "@/layouts/MainLayout";
import AboutUs from "@/pages/AboutUs";
import FAQ from "@/pages/FAQ";
import LadingPage from "@/pages/LadingPage";
import PageNotFound from "@/pages/PageNotFound";
import SignIn from "@/pages/auth/SignIn";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<LadingPage />} />
          <Route path="/auth/login" element={<SignIn />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/faq" element={<FAQ />} />
        </Route>
        <Route element={<AuthOnlyLayout />}></Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
