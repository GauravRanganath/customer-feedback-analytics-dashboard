import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import FeedbackPage from "./pages/FeedbackPage";
import RootLayout from "./layouts/RootLayout"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="feedback_form" element={<FeedbackPage />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
