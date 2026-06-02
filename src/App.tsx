import { Route, Routes } from "react-router-dom";
import { SiteLayout } from "./layout/SiteLayout";
import { CloutSitesPage } from "./pages/CloutSitesPage";
import { HomePage } from "./pages/HomePage";
import { MasonPage } from "./pages/MasonPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ResumePage } from "./pages/ResumePage";

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="cloutsites" element={<CloutSitesPage />} />
        <Route path="mason" element={<MasonPage />} />
        <Route path="resume" element={<ResumePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
