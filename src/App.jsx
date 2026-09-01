import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import LoadingSpinner from "./components/loadingSpinner/index.jsx";
const Layout = lazy(() => import("./layout/main/index.jsx"));
const NotFound = lazy(() => import("./pages/404"));
const Home = lazy(() => import("./pages/home/index.jsx"));
const About = lazy(() => import("./pages/about/index.jsx"));
const Events = lazy(() => import("./pages/events/index.jsx"));
import "./App.scss";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="about-us"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="events"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Events />
            </Suspense>
          }
        />
      </Route>
      <Route
        path="*"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <NotFound />
          </Suspense>
        }
      />
    </>,
  ),
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
