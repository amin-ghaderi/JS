import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./styles/cv-react.css";

import Layout from "./components/Layout";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import cvData from "./data/cvData";

import HomePage from "./pages/HomePage";
import SummaryPage from "./pages/SummaryPage";
import SocialLinksPage from "./pages/SocialLinksPage";
import ContactPage from "./pages/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "summary", element: <SummaryPage /> },
      { path: "skills", element: <Skills categories={cvData.skills} /> },
      { path: "projects", element: <Projects projects={cvData.projects} /> },
      { path: "sociallinks", element: <SocialLinksPage /> },
      { path: "contact", element: <ContactPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
