import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import AppsPage from "./pages/AppsPage";
import AppDetailPage from "./pages/AppDetailPage";
import IndustriesPage from "./pages/IndustriesPage";
import IndustryDetailPage from "./pages/IndustryDetailPage";
import PricingPage from "./pages/PricingPage";
import FeaturesPage from "./pages/FeaturesPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ResourcesPage from "./pages/ResourcesPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="apps" element={<AppsPage />} />
          <Route path="apps/:appId" element={<AppDetailPage />} />
          <Route path="industries" element={<IndustriesPage />} />
          <Route path="industries/:industryId" element={<IndustryDetailPage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="features" element={<FeaturesPage />} />
          <Route path="resources" element={<ResourcesPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
