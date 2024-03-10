import { Link, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AuthOnlyLayout from "./layouts/AuthOnlyLayout";
import { Button } from "./components/ui/button";
import { Loader } from "lucide-react";
import PageNotFound from "./pages/PageNotFound";
import LadingPage from "@/pages/LadingPage";
import SignIn from "@/pages/auth/SignIn";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<LadingPage />} />
          <Route path="/auth/login" element={<SignIn />} />
        </Route>
        <Route element={<AuthOnlyLayout />}></Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
