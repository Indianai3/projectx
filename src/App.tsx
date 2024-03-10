import LadingPage from "@/pages/LadingPage";
import SignIn from "@/pages/auth/SignIn";
import { Route, Routes } from "react-router-dom";
import AuthOnlyLayout from "./layouts/AuthOnlyLayout";
import MainLayout from "./layouts/MainLayout";
import PageNotFound from "./pages/PageNotFound";

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
