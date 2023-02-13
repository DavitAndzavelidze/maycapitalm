import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home.jsx";
import Products from "./views/Products.jsx";
import About from "./views/About.jsx";
import Contact from "./views/Contact.jsx";
import Navbar from "./components/Navbar.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
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
    ],
  },
  // {
  //   path: "*",
  //   element: <Navbar />,
  // },
]);
export default router;
