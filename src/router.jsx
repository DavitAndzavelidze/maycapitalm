import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home.jsx";
import Products from "./views/Products.jsx";
import About from "./views/About.jsx";
import Contact from "./views/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);
export default router;
