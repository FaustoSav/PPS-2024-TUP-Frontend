import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { NotFound } from "../components/shared/NotFound";
import { Profile } from "../components/User/Profile";
import { SignIn } from "../components/Forms/SingIn/SingIn";
import { CategoriesList } from "../components/Products/CategoriesList";
import { ProductList } from "../components/Products/ProductList";
import { CartPage } from "./../pages/CartPage";
import { HomePage } from "./../pages/HomePage";
import { ProductOverview } from "../components/Products/ProductOverview";
import { Register } from "./../components/Forms/Register/Register";
import { ProtectedRoute } from "../components/shared/ProtectedRoute";
import { Checkout } from "../pages/Checkout";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        index: true,
      },
      {
        path: "/product/:productId",
        element: <ProductOverview />,
      },
      {
        path: "/categories",
        element: <CategoriesList />,
      },
      {
        path: "/categories/:categoryId",
        element: <ProductList />,
      },
      {
        path: "/",
        element: <ProtectedRoute route="/signin" />,
        children: [
          {
            path: "/profile",
            element: <Profile />,
          },
          {
            path: "/checkout",
            element: <Checkout />,
          },
        ],
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      // {
      //   path: "/aboutus",
      //   element: <AboutUs />,
      // },
    ],
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/register",
    element: <Register />,
  },
];

export const router = createBrowserRouter(routes);
